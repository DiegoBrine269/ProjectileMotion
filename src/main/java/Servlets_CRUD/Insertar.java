package Servlets_CRUD;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLEncoder;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.Iterator;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

public class Insertar extends HttpServlet {

   private boolean isMultipart;
   private String filePath;
   private int maxFileSize = 50 * 1024;
   private int maxMemSize = 4 * 1024;
   private File file ;
    
    protected void processRequest(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/html;charset=UTF-8");
        req.setCharacterEncoding("UTF-8");
        
        PrintWriter out = resp.getWriter();
        
        String nombre = req.getParameter("nombre");
        String distanciaX = req.getParameter("distanciaX");
        String fondo = req.getParameter("fondo");
        String objetivo = req.getParameter("objetivo");
        
        try
        {
            ConexionBD db = new ConexionBD();
            
            Class.forName("com.mysql.jdbc.Driver");
            Connection conn = DriverManager.getConnection(db.url, db.user, db.password);
            PreparedStatement st;
            String query;
            
            //Creamos el query
            query = "INSERT INTO Ejercicio (nombre, distanciaX) VALUES (?, ?);";

            st = conn.prepareStatement(query);
            st.setString(1, nombre);
            st.setString(2, distanciaX);
            
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
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        processRequest(req, resp);
    }


}
