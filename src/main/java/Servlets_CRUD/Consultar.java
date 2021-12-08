package Servlets_CRUD;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import Classes.Ejercicio;
import com.google.gson.Gson;
import java.util.ArrayList;
import java.util.List;

public class Consultar extends HttpServlet 
{
    
    private Gson gson = new Gson();
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        
        PrintWriter out = response.getWriter();
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        //En el caso de que se quiera consultar un usuario en específico
        String idParameter = "";
        if(request.getParameter("id") != null){
            idParameter = request.getParameter("id");
        }
        
        try
        {
            ConexionBD db = new ConexionBD();
            
            Class.forName("com.mysql.jdbc.Driver");
            Connection conn = DriverManager.getConnection(db.url, db.user, db.password);
            
            //Creamos el query
            String query = "";
            
            if(idParameter != "")
                query = "SELECT * FROM Ejercicio WHERE id = " + idParameter ;
            else
                query = "SELECT * FROM Ejercicio" ;
            
            //Creamos el java statement
            Statement st = conn.createStatement();        
            
            //Ejecutamos el query
            ResultSet rs = st.executeQuery(query);
            
            List<Ejercicio> ejercicios = new ArrayList<Ejercicio>();
                            
            while (rs.next())
            {
                //Creo la instancia
                String id = rs.getString("id");
                String nombre = rs.getString("nombre");
                String ancho = rs.getString("ancho");
                String altura = rs.getString("altura");
                Ejercicio ejercicio = new Ejercicio(Integer.parseInt(id), nombre, Integer.parseInt(ancho), Integer.parseInt(altura));
                
                ejercicios.add(ejercicio);                 
            }
            
            out.append(this.gson.toJson(ejercicios));
            out.flush();
            st.close();
        }
        catch(Exception e){
            e.printStackTrace();
            System.err.println(e.getMessage());
        } 
    }
}
