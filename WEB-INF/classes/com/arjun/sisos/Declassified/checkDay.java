package com.arjun.sisos;
// importing required packages

import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Properties;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Calendar;
//
// new java class - extension of Http Servlet - necessary for JSON

public class checkDay extends HttpServlet {
  //

    // essential declaration for servlets - not relevant to logic 
    private Properties studs = null;

    public void init() throws ServletException {

    }
//

// methods to get and post through JSON
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        processRequest(request, response);
    }
    //      

    public void processRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        StringBuffer outJSON = new StringBuffer();
        String check = request.getParameter("check");

        Calendar cal = Calendar.getInstance();
        SimpleDateFormat sdf = new SimpleDateFormat("HH");
        SimpleDateFormat sdf1 = new SimpleDateFormat("mm");
        String hour = sdf.format(cal.getTime());
        String min = sdf1.format(cal.getTime());
        int hour1 = Integer.parseInt(hour);
        int min1 = Integer.parseInt(min);
        // get the day 
        Calendar calendar = Calendar.getInstance();
        int day = calendar.get(Calendar.DAY_OF_WEEK);

        //	
        if (day == 1) {
            day = 1;
        }
        if (day == 2) {
            if ((hour1 == 15) && ((min1 > 05) && (min1 < 31))) {
                day = 2;
            } else {
                day = 8;
            }
        }
        if (day == 3) {
            if ((hour1 == 14) && ((min1 > 15) && (min1 < 41))) {
                day = 3;
            } else {
                day = 8;
            }
        }
        if (day == 4) {
            if ((hour1 == 15) && ((min1 > 05) && (min1 < 31))) {
                day = 4;
            } else {
                day = 8;
            }

        }
        if (day == 5) {
            if ((hour1 == 14) && ((min1 > 15) && (min1 < 41))) {
                day = 5;
            } else {
                day = 8;
            }
        }
        if (day == 6) {
            if (((hour1 == 14) && (min1 > 15)) || ((hour1 == 15) && (min1 < 31))) {
                day = 6;
            } else {
                day = 8;
            }
        }
        if (day == 7) {
            day = 7;
        }
        outJSON.append(day);
        //publish the output of logic on JSON
        publishJSON(request, response, outJSON.toString());
        //

    }

    /**
     * Publishes the JSON back to the calling AJAX request
     *
     * @param request
     * @param response
     * @param publish
     * @throws ServletException
     * @throws IOException
     */
    // publish JSON method
    public void publishJSON(HttpServletRequest request, HttpServletResponse response, String publish) throws ServletException, IOException {
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        if (publish != null && !publish.isEmpty()) {
            out.println(publish);
        } else {
            out.println("{failure:internal error}"); // will be thrown if JSON is empty
        }
    }
//
}
