package Session;

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
import Classes.Usuario;
import Servlets_CRUD.ConexionBD;
import com.google.gson.Gson;


public class Login extends HttpServlet 
{
    
    private Gson gson = new Gson();
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        
        PrintWriter out = response.getWriter();
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        String nombre = request.getParameter("nombre");
        String pass = request.getParameter("pass");        
        
        try
        {
            ConexionBD db = new ConexionBD();
            
            Class.forName("com.mysql.jdbc.Driver");
            Connection conn = DriverManager.getConnection(db.url, db.user, db.password);
            
            //Creamos el query
            String query = "SELECT Usuario.id, nombre, apPaterno, apMaterno FROM Usuario JOIN DatosUsuario ON Usuario.id = DatosUsuario.id WHERE DatosUsuario.nombre = '" + nombre + "' AND Usuario.pass = " + pass + "; ";
                        
            //Creamos el java statement
            Statement st = conn.createStatement();    
                       
            //Ejecutamos el query
            ResultSet rs = st.executeQuery(query);
            
            //Creo la instancia
            String id = rs.getString("id");            
            nombre = rs.getString("nombre");            
            String apPaterno = rs.getString("apPaterno");
            String apMaterno = rs.getString("apMaterno");
            
            
            
            Usuario usuario = new Usuario(Integer.parseInt(id), nombre, apPaterno, apMaterno);

            
            out.append(this.gson.toJson(usuario));
            out.flush();
            st.close();
        }
        catch(Exception e){
            e.printStackTrace();
            System.err.println(e.getMessage());
        } 
    }
}
