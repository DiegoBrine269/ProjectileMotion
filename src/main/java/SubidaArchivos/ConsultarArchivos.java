package SubidaArchivos;


import java.io.*;

import java.util.*;
 
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
 


public class ConsultarArchivos extends HttpServlet {
    private String filePath;

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, java.io.IOException{
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        java.io.PrintWriter out = response.getWriter( );
        
        filePath = request.getRealPath("/img/"); 
        File folder = new File(filePath);
        //out.println(folder.getAbsolutePath());
        
        
        out.println("{\"files\" : [");
  
        int i = 0;
        
        for (File file : folder.listFiles()) {
            i++;
            
            if (!file.isDirectory()) 
                out.println("\"" + file.getName() + "\" ");
            
            if(i != folder.listFiles().length)
                out.println(", ");
            
        }
        out.println("]}");
    }
    

}
