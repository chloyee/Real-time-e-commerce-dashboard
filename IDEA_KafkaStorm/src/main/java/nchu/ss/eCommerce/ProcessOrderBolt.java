package nchu.ss.eCommerce;

import com.alibaba.fastjson.JSONObject;
import nchu.ss.order.PaymentInfo;
import nchu.ss.util.JedisUtil;
import org.apache.storm.topology.BasicOutputCollector;
import org.apache.storm.topology.OutputFieldsDeclarer;
import org.apache.storm.topology.base.BaseBasicBolt;
import org.apache.storm.tuple.Fields;
import org.apache.storm.tuple.Tuple;
import org.apache.storm.tuple.Values;
import redis.clients.jedis.Jedis;



public class ProcessOrderBolt extends BaseBasicBolt {
    private Long count;

    @Override
    public void execute(Tuple tuple, BasicOutputCollector basicOutputCollector) {
        System.out.println("start ProcessOrderBolt!");
        Object value = tuple.getValue(4);
        JSONObject obj = new JSONObject();
        PaymentInfo parseObject = obj.parseObject(value.toString(), PaymentInfo.class);
        String orderId = parseObject.getOrder_id();

        Jedis conn = JedisUtil.getConn();
        // 总销售金额(total)
        conn.incrBy("total_price", (long) parseObject.getTotal());
        // 订单数量(order)
        conn.incrBy("order_num",1);
        // 下单客户数(custom)
        conn.incrBy("custom"+parseObject.getRecipient(), 1);
        // 全国各地下单的图书的累计数量（按省份）(city)
        String city = parseObject.getReceiveplace();
        conn.incrBy("city"+city, parseObject.getBook_num());
        // 每个出版社(press)的总销量
        conn.incrBy("press_num"+parseObject.getBook_press(), parseObject.getBook_num());
        // 每本图书(book)的销售数量
        conn.incrBy("book_num"+parseObject.getBook_name(), parseObject.getBook_num());
        // 图书类型销量(type)
        conn.incrBy("type_num"+parseObject.getBook_type(), parseObject.getBook_num());
        // 全国各地发货的订单的累计数量（按省份）(source)
        String source = parseObject.getReceiveplace();
        conn.incrBy("source"+source, 1);
        // 每个出版社(press)的总销量
        conn.incrBy("payment_type"+parseObject.getMethodofpayment(), 1);
        conn.close();

        // 统计
        if (count == null) {
            count = 0L;
        }
        if (orderId != null) {
            count++;
        }

        System.out.println("Id：" + orderId);
        System.out.println("count：" + count);

        basicOutputCollector.emit(new Values(orderId, count));
    }

    @Override
    public void declareOutputFields(OutputFieldsDeclarer outputFieldsDeclarer) {
        outputFieldsDeclarer.declare(new Fields("orderId", "count"));
    }
}
