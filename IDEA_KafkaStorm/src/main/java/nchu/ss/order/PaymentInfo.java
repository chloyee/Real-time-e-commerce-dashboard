/*
time: 2021/6/2 23:30
author: Kong Luoyi
*/
package nchu.ss.order;

import com.alibaba.fastjson.JSONObject;
import nchu.ss.util.MysqlUtil;

import java.sql.*;
import java.util.Arrays;

public class PaymentInfo {
    private String order_id;
    private String book_id;
    private String book_name;
    private String book_type;
    private long book_num;
    private double book_price;
    private String book_press;
    private long id;
    private String orderdetailid;
    private String sender;
    private String sendplace;
    private String recipient;
    private String receiveplace;
    private String methodofpayment;
    private String paytime;
    private long freight;
    private double total;

    public PaymentInfo(){}

    public PaymentInfo(String order_id, String book_id, String book_name, String book_type, long book_num, double book_price, String book_press, long id, String orderdetailid, String sender, String sendplace, String recipient, String receiveplace, String methodofpayment, String paytime, long freight, double total) {
        this.order_id = order_id;
        this.book_id = book_id;
        this.book_name = book_name;
        this.book_type = book_type;
        this.book_num = book_num;
        this.book_price = book_price;
        this.book_press = book_press;
        this.id = id;
        this.orderdetailid = orderdetailid;
        this.sender = sender;
        this.sendplace = sendplace;
        this.recipient = recipient;
        this.receiveplace = receiveplace;
        this.methodofpayment = methodofpayment;
        this.paytime = paytime;
        this.freight = freight;
        this.total = total;
    }

    public String getOrder_id() {
        return order_id;
    }

    public void setOrder_id(String order_id) {
        this.order_id = order_id;
    }

    public String getBook_id() {
        return book_id;
    }

    public void setBook_id(String book_id) {
        this.book_id = book_id;
    }

    public String getBook_name() {
        return book_name;
    }

    public void setBook_name(String book_name) {
        this.book_name = book_name;
    }

    public String getBook_type() {
        return book_type;
    }

    public void setBook_type(String book_type) {
        this.book_type = book_type;
    }

    public long getBook_num() {
        return book_num;
    }

    public void setBook_num(long book_num) {
        this.book_num = book_num;
    }

    public double getBook_price() {
        return book_price;
    }

    public void setBook_price(double book_price) {
        this.book_price = book_price;
    }

    public String getBook_press() {
        return book_press;
    }

    public void setBook_press(String book_press) {
        this.book_press = book_press;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getOrderdetailid() {
        return orderdetailid;
    }

    public void setOrderdetailid(String orderdetailid) {
        this.orderdetailid = orderdetailid;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getSendplace() {
        return sendplace;
    }

    public void setSendplace(String sendplace) {
        this.sendplace = sendplace;
    }

    public String getRecipient() {
        return recipient;
    }

    public void setRecipient(String recipient) {
        this.recipient = recipient;
    }

    public String getReceiveplace() {
        return receiveplace;
    }

    public void setReceiveplace(String receiveplace) {
        this.receiveplace = receiveplace;
    }

    public String getMethodofpayment() {
        return methodofpayment;
    }

    public void setMethodofpayment(String methodofpayment) {
        this.methodofpayment = methodofpayment;
    }

    public String getPaytime() {
        return paytime;
    }

    public void setPaytime(String paytime) {
        this.paytime = paytime;
    }

    public long getFreight() {
        return freight;
    }

    public void setFreight(long freight) {
        this.freight = freight;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

//    public String getInfo() {
//        JSONObject obj = new JSONObject();
//        String jsonString = obj.toJSONString(this);
//        return jsonString;
//        //  return new Gson().toJson(this);
//    }
    public static void main(String[] args) throws SQLException, InterruptedException {
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
                PaymentInfo info = new PaymentInfo();
//                info.
                String [] paras = new String [paraCount];
                for(int i = 0; i<paraCount; i++){
                    paras[i] = rs.getString(i+1);
                }
                System.out.println(Arrays.toString(paras));
//                kafkaProducer.send(new ProducerRecord<String, String>("itcast_order", info.getInfo()));
            } else {
                System.out.println("没有数据了，先冷静1秒钟。");
                Thread.sleep(1000);
                rs.close();
                rs = state.executeQuery("select * from `order`,orderdetail where order_id = orderid and id >" + flag + " order by id limit 1");
            }
        }
    }
}
