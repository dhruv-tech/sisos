package com.arjun.sisos;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.naming.InvalidNameException;
import javax.naming.ldap.LdapContext;
import javax.naming.ldap.LdapName;

public class meths {

    public static final String db_server = "172.16.0.25";
    public static final String db_port = "3306";
    public static final String db_schema = "sisos";
    public static final String host = "jdbc:mysql://" + db_server + ":" + db_port + "/" + db_schema;
    String uname = "sisos";
    String upass = "sisos!21";

    public String checkAge(String in) {
        String ans = "false";
        int a = Integer.parseInt(in.substring(5).trim());
        if (a > 6) {
            ans = "true";
        }
        return ans;
    }

    public String getDate() {
        SimpleDateFormat df = new SimpleDateFormat("dd");
        Date date = new Date();
        String ans = df.format(date) + "";
        return ans;
    }

    public String getMonth() {
        SimpleDateFormat df = new SimpleDateFormat("MM");
        Date date = new Date();
        String ans = df.format(date) + "";
        return ans;
    }

    public String giveName() {
        String date = "d" + this.getDate() + this.getMonth() + this.getYear();
        return date;
    }

    public String getYear() {
        SimpleDateFormat df = new SimpleDateFormat("yy");
        Date date = new Date();
        String ans = df.format(date) + "";
        return ans;
    }

    public String check(String userbox) {
        String date = this.giveName();
        String sqltable = "SELECT * FROM EXISTING WHERE NAME='" + date + "'";
        String sqlCheck = "SELECT * FROM " + date + " WHERE USERNAME = '" + userbox + "'";
        Connection con = null;
        Statement stmt = null;
        String toReturn = "false";
        try {
            ResultSet rs1;
            Class.forName("com.mysql.jdbc.Driver");
            con = DriverManager.getConnection(host, uname, upass);
            stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery(sqltable);
            if (rs.next() && (rs1 = stmt.executeQuery(sqlCheck)).next()) {
                toReturn = "true";
            }
            stmt.close();
            con.close();
            return toReturn;
        } catch (SQLException err) {
            System.out.println(err);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(meths.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            try {
                if (stmt != null) {
                    stmt.close();
                }
            } catch (SQLException e) {
                System.err.println(e);
            }
            try {
                if (con != null) {
                    con.close();
                }
            } catch (SQLException e) {
                System.err.println(e);
            }
        }
        return toReturn;
    }

    public void updDailyDB(String name, String year, String userbox) {

        {
            String date = this.giveName();
            String sql = "CREATE TABLE " + date + " (NAME VARCHAR(40), YR VARCHAR(15), USERNAME VARCHAR(20), SIGNED_OUT VARCHAR(15))";
            String sql1 = "SELECT * FROM EXISTING WHERE NAME='" + date + "'";
            String sql2 = "INSERT INTO " + date + " VALUES('" + name + "', '" + year + "', '" + userbox + "', 'no')";
            String sql3 = "INSERT INTO EXISTING VALUES('" + date + "')";
            Connection con = null;
            Statement stmt = null;
            try {
                Class.forName("com.mysql.jdbc.Driver");
                con = DriverManager.getConnection(host, uname, upass);
                stmt = con.createStatement();
                ResultSet rs = stmt.executeQuery(sql1);
                if (rs.next()) {
                    stmt.executeUpdate(sql2);
                } else {
                    stmt.executeUpdate(sql);
                    stmt.executeUpdate(sql2);
                    stmt.executeUpdate(sql3);
                }
            } catch (SQLException e) {
                e.printStackTrace();
            } catch (ClassNotFoundException ex) {
                Logger.getLogger(meths.class.getName()).log(Level.SEVERE, null, ex);
            } finally {
                try {
                    if (stmt != null) {
                        stmt.close();
                    }
                } catch (SQLException e) {
                    System.err.println(e);
                }
                try {
                    if (con != null) {
                        con.close();
                    }
                } catch (SQLException e) {
                    System.err.println(e);
                }
            }
        }
    }

    public String dailyDatabaseRows() {
        int c1 = 0;
        String query = "SELECT * FROM " + this.giveName();
        Connection con = null;
        Statement stmt = null;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            con = DriverManager.getConnection(host, uname, upass);
            stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery(query);
            while (rs.next()) {
                ++c1;
            }
            stmt.close();
            con.close();
        } catch (SQLException exc) {
            System.out.println(exc);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(meths.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            try {
                if (stmt != null) {
                    stmt.close();
                }
            } catch (SQLException e) {
                System.err.println(e);
            }
            try {
                if (con != null) {
                    con.close();
                }
            } catch (SQLException e) {
                System.err.println(e);
            }
        }
        return "" + c1 + "";
    }

    public void outDailyDB(String userbox) {
        String sqlCheck = "UPDATE " + this.giveName() + " SET SIGNED_OUT='yes' WHERE USERNAME='" + userbox + "'";
        Connection con = null;
        Statement stmt = null;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            con = DriverManager.getConnection(host, uname, upass);
            stmt = con.createStatement();
            int rs = stmt.executeUpdate(sqlCheck);
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(meths.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            try {
                if (stmt != null) {
                    stmt.close();
                }
            } catch (SQLException e) {
                System.err.println(e);
            }
            try {
                if (con != null) {
                    con.close();
                }
            } catch (SQLException e) {
                System.err.println(e);
            }
        }
    }

    public void faultDailyDB(String name, String year, String userbox) {
        String sqlCheck = "INSERT INTO " + this.giveName() + " VALUES ('" + name + "', '" + year + "', '" + userbox + "', 'no login')";
        Connection con = null;
        Statement stmt = null;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            con = DriverManager.getConnection(host, uname, upass);
            stmt = con.createStatement();
            stmt.executeUpdate(sqlCheck);
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(meths.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            try {
                if (stmt != null) {
                    stmt.close();
                }
            } catch (SQLException e) {
                System.err.println(e);
            }
            try {
                if (con != null) {
                    con.close();
                }
            } catch (SQLException e) {
                System.err.println(e);
            }
        }
    }

    public String sendNameYear(String receive) {
        int numRow = Integer.parseInt(receive);
        Connection con = null;
        Statement sta = null;
        ResultSet rs = null;
        String sendName = "";
        try {
            String name;
            String year;
            Class.forName("com.mysql.jdbc.Driver");
            con = DriverManager.getConnection(host, uname, upass);
            sta = con.createStatement();
            String sql = "SELECT * FROM " + this.giveName();
            rs = sta.executeQuery(sql);
            for (int i = 0; i < numRow; ++i) {
                rs.next();
            }
            if (rs.getString(4).equals("no")) {
                name = rs.getString(1);
                year = rs.getString(2);
            } else {
                name = "false";
                year = "false";
            }
            String string = sendName = "{\"json_response\":{\"name\":\"" + name + "\", \"year\":\"" + year + "\"}}";
            return string;
        } catch (Exception e) {
            System.err.println(e);
        } finally {
            try {
                if (sta != null) {
                    sta.close();
                }
            } catch (SQLException e) {
                System.err.println(e);
            }
            try {
                if (con != null) {
                    con.close();
                }
            } catch (SQLException e) {
                System.err.println(e);
            }
        }
        return sendName;
    }

    public String getDetails(String userbox, String passbox) {
        String out = "false";
        try {
            LdapContext ctx = ActiveDirectory.getConnection((String) userbox, (String) passbox, (String) "british-school.org", (String) "pdc");
            ActiveDirectory.User usr = ActiveDirectory.getUser((String) userbox, (LdapContext) ctx);
            if (usr != null) {
                out = usr.getDistinguishedName();
            } else {
                out = "false";
            }
            ctx.close();
            return out;
        } catch (Exception e) {
            System.err.println(e);
        }
        return out;
    }

    public String[] split(String in) {
        String[] out = new String[5];
        try {
            LdapName name = new LdapName(in);
            for (int i = 0; i < name.size(); ++i) {
                out[i] = name.get(i).substring(3);
            }
        } catch (InvalidNameException e) {
            System.out.println("Cannot parse name");
        }
        return out;
    }
}
