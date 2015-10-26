package com.arjun.sisos;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
 


public class authCheckReg extends HttpServlet {

    // Parameters in ProcessRequest()
    String userbox;
    String passbox;
    meths k = new meths();

    public void init() throws ServletException {
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        processRequest(request, response);
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        processRequest(request, response);
    }

    public void processRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        StringBuffer outJSON = new StringBuffer();
        userbox = request.getParameter("userbox"); // get the user name from request
        passbox = request.getParameter("passbox"); // get the password from request
        String result = "false", admin = "false", signed = "false";

        String details = k.getDetails(userbox, passbox);
        if (details.equals("false")) {
            result = "false";
        } else {
            result = "true";
            String in[] = k.split(details);
            if (in[2].equals("Student")) {
                if (k.checkAge(in[3]).equals("true")) {
                    admin = "false";
                    signed = k.check(userbox);
                    if (signed.equals("false")) { 
                        signed = "false";
                        k.updDailyDB(in[4], in[3], userbox); 
                    } else {
                        signed = "true";
                    }
                } else {
                    result = "false";
                }
            } else {
                admin = "true";
            }
        }

        String output = "{\"json_response\":{\"result\":\"" + result + "\", \"admin\":\"" + admin + "\", \"signed\":\"" + signed + "\"}}";

        outJSON.append(output);

        publishJSON(request, response, outJSON.toString());
    }

    public void publishJSON(HttpServletRequest request, HttpServletResponse response, String publish) throws ServletException, IOException {
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        if (publish != null && !publish.isEmpty()) {
            out.println(publish);
        } else {
            out.println("{failure:internal error}"); // will be thrown if JSON is empty
        }
    }

}
