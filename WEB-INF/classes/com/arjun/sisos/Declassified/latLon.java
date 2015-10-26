package com.arjun.sisos;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Nuriya Ansari 
 */
public class latLon extends HttpServlet {

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
        String lat = request.getParameter("lat");
        String lon = request.getParameter("lon");
        String location;

        double lat1 = Double.parseDouble(lat);
        double lon1 = Double.parseDouble(lon);

        double cLat = 28.59762575;
        double cLon = 77.18010725;

        double latDis = (cLat - lat1) * 110854;
        double lonDis = (cLon - lon1) * 96496;

        double pytha = (latDis * latDis) + (lonDis * lonDis);

        double Dist = Math.sqrt(pytha);

        if (Dist < 500) {
            location = "true";
        } else {
            location = "false";
        }

        String toSend = "{\"location\": " + location + "}";
        outJSON.append(toSend);

        publishJSON(request, response, outJSON.toString());
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
}
