
package Classes;

public class Usuario {
    private int id;
    private String nombre;
    private String apPaterno;
    private String apMaterno;
    
    public Usuario(){
        
    }
    
    public Usuario(int id, String nombre, String apPaterno, String apMaterno) {
        this.id = id;
        this.nombre = nombre;
        this.apPaterno = apPaterno;
        this.apMaterno = apMaterno;
    }
    
    public int getId () {
        return this.id;
    }
    
    public String getApPaterno () {
        return this.apPaterno;
    }
        
    public String getApMaterno () {
        return this.apMaterno;
    }

    public void setId (int id) {
        this.id = id;
    }
    
    public void setApPaterno (String apPaterno) {
        this.apPaterno = apPaterno;
    }
        
    public void setApMaterno (String apMaterno) {
        this.apMaterno = apMaterno;
    }    
    
}
