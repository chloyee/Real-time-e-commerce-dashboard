/*
time: 2021/6/1 21:18
author: Kong Luoyi
*/

package nchu.ss.util;

import java.sql.*;
import java.util.Arrays;

public class MysqlUtil {
    static String selectsql = null;
    static ResultSet retsult = null;

    public static final String url = "jdbc:mysql://127.0.0.1/bookorder?characterEncoding=utf-8&serverTimezone=GMT";
    public static final String driver = "com.mysql.jdbc.Driver";
    public static final String user = "root";
    public static final String password = "123456";

    public static Connection conn = null;
    public static PreparedStatement pst = null;

    public static Connection getConn(){
        try {
            Class.forName(driver);//指定连接类型
            conn = DriverManager.getConnection(url, user, password);//获取连接
        } catch (Exception e) {
            e.printStackTrace();
        }
        return conn;
    }

//    测试连接
    public static void main(String[] args) {
        int paraCount = 5; //读取参数数量
        selectsql = "select * from `order`";//SQL语句

        try {
            Class.forName(driver);//指定连接类型
            conn = DriverManager.getConnection(url, user, password);//获取连接
            pst = conn.prepareStatement(selectsql);//准备执行语句
        } catch (Exception e) {
            e.printStackTrace();
        }

        String [] paras = new String [paraCount];
        try {
            retsult = pst.executeQuery();//执行语句，得到结果集

            while (retsult.next()) {
                for(int i = 0; i<paraCount; i++){
                    paras[i] = retsult.getString(i+2);
                }
                System.out.println(Arrays.toString(paras));

            }//显示数据
            retsult.close();
            conn.close();//关闭连接
            pst.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }


}
