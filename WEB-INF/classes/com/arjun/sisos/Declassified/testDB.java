package com.arjun.sisos;


import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
 
public class testDB extends HttpServlet {
 
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        processRequest(request, response);
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        processRequest(request, response);
    }

    public void processRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        
        StringBuffer outJSON = new StringBuffer();

        String rubbish = request.getParameter("check");
        
        meths k = new meths();
            String dailyDBRows = k.dailyDatabaseRows();
            outJSON.append("{\"result\": " + dailyDBRows + "}");
        
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
