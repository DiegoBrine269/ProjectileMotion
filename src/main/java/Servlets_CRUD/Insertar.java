package Servlets_CRUD;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLEncoder;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class Insertar extends HttpServlet {

    protected void processRequest(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        
        resp.setContentType("text/html;charset=UTF-8");
        req.setCharacterEncoding("UTF-8");
        
        PrintWriter out = resp.getWriter();
        
        String nombre = req.getParameter("nombre");
        String ancho = req.getParameter("ancho");
        String altura = req.getParameter("altura");
        
        try
        {
            ConexionBD db = new ConexionBD();
            
            Class.forName("com.mysql.jdbc.Driver");
            Connection conn = DriverManager.getConnection(db.url, db.user, db.password);
            PreparedStatement st;
            String query;
            
            //Creamos el query
            query = "INSERT INTO Ejercicio (nombre, ancho, altura) VALUES (?, ?, ?);";

            st = conn.prepareStatement(query);
            st.setString(1, nombre);
            st.setString(2, ancho);
            st.setString(3, altura);
            
            st.executeUpdate();
  
            // Close all the connections
            st.close();
            conn.close();
            
            resp.sendRedirect(req.getContextPath() + "/");

        }
        catch(Exception e){
            e.printStackTrace();
            out.println(e.getMessage());
        } 
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        processRequest(req, resp);
    }


}
