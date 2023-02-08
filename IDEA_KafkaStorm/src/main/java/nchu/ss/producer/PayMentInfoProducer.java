/*
time: 2021/6/3 1:33
author: Kong Luoyi
*/
package nchu.ss.producer;

import com.alibaba.fastjson.JSONObject;
import nchu.ss.order.PaymentInfo;
import nchu.ss.util.MysqlUtil;

import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerRecord;

import java.sql.*;
import java.util.Arrays;
import java.util.Properties;

public class PayMentInfoProducer {

    public static void main(String[] args) throws SQLException, InterruptedException {
        // 1、准备配置文件
        Properties props = new Properties();
        props.put("bootstrap.servers", "localhost:9092,localhost:9092,localhost:9092");
        /**
         * 当生产者将ack设置为“全部”（或“-1”）时，min.insync.replicas指定必须确认写入被认为成功的最小副本数。
         */
        props.put("acks", "all");
        /**
         * 设置一个大于零的值,将导致客户端重新发送任何失败的记录
         */
        props.put("retries", 0);
        /**
         * 只要有多个记录被发送到同一个分区，生产者就会尝试将记录一起分成更少的请求。
         * 这有助于客户端和服务器的性能。该配置以字节为单位控制默认的批量大小。
         */
        props.put("batch.size", 16384);
        /**
         *在某些情况下，即使在中等负载下，客户端也可能希望减少请求的数量。
         * 这个设置通过添加少量的人工延迟来实现这一点，即不是立即发出一个记录，
         * 而是等待达到给定延迟的记录，以允许发送其他记录，以便发送可以一起批量发送
         */
        props.put("linger.ms", 1);
        /**
         * 生产者可用于缓冲等待发送到服务器的记录的总字节数。
         * 如果记录的发送速度比发送给服务器的速度快，那么生产者将会阻塞，max.block.ms之后会抛出异常。
         * 这个设置应该大致对应于生产者将使用的总内存，但不是硬性限制，
         * 因为不是所有生产者使用的内存都用于缓冲。
         * 一些额外的内存将被用于压缩（如果压缩被启用）以及用于维护正在进行的请求。
         */
        props.put("buffer.memory", 33554432);
        props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
        props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");
        // 2、创建KafkaProducer
        KafkaProducer<String, String> kafkaProducer = new KafkaProducer<String, String>(props);

        // 数据库读取数据
        int paraCount = 18;
        Connection conn = MysqlUtil.getConn();
        Statement state = conn.createStatement();
        PreparedStatement pst = conn.prepareStatement("SELECT id FROM `order` LIMIT 1 ");
        ResultSet retsult = pst.executeQuery();  //执行语句，得到第一个id的结果
        Long [] temp = new Long [1];
        while (retsult.next()) {
            for (int i = 0; i < 1; i++) {
                temp[i] = retsult.getLong(i+1);
            }
            System.out.println(temp[0]);
        }
        Long flag = temp[0]-1;
        System.out.println(flag);

        ResultSet rs = state.executeQuery("select * from `order`,orderdetail where order_id = orderid and id >" + flag + " order by id limit 1");
        String str = "";

        while (true) {
            if (rs.next()) {
                flag = rs.getLong(8);
                System.out.println(flag);

                // 创建订单信息类并赋值
                PaymentInfo info = new PaymentInfo();
                info.setOrder_id(rs.getString(1));
                info.setBook_id(rs.getString(2));
                info.setBook_name(rs.getString(3));
                info.setBook_type(rs.getString(4));
                info.setBook_num(rs.getLong(5));
                info.setBook_price(rs.getDouble(6));
                info.setBook_press(rs.getString(7));
                info.setId(rs.getLong(8));
                info.setOrderdetailid(rs.getString(9));
                info.setSender(rs.getString(11));
                info.setSendplace(rs.getString(12));
                info.setRecipient(rs.getString(13));
                info.setReceiveplace(rs.getString(14));
                info.setMethodofpayment(rs.getString(15));
                info.setPaytime(rs.getString(16));
                info.setFreight(rs.getLong(17));
                info.setTotal(rs.getDouble(18));

                // 查看select信息
                String [] paras = new String [paraCount];
                for(int i = 0; i<paraCount; i++){
                    paras[i] = rs.getString(i+1);
                }
                System.out.println(Arrays.toString(paras));
                // 向kafka发送本条信息（订单信息类的json）
                JSONObject obj = new JSONObject();

                kafkaProducer.send(new ProducerRecord<String, String>("bookOrder", obj.toJSONString(info)));
            } else {
                System.out.println("发送完数据了，先冷静0.5秒钟。");
                Thread.sleep(500);
                rs.close();
                rs = state.executeQuery("select * from `order`,orderdetail where order_id = orderid and id >" + flag + " order by id limit 1");
            }
        }

    }

}
