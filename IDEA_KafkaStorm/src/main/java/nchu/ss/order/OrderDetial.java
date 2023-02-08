package nchu.ss.order;

public class OrderDetial {
    private String orderid;
    private String orderdetailid;
    private String sender;
    private String sendplace;
    private String recipient;
    private String receiveplace;
    private String methodofpayment;
    private String paytime;
    private long freight;
    private double total;

    public String getOrderid() {
        return orderid;
    }

    public void setOrderid(String orderid) {
        this.orderid = orderid;
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
}
