
package Classes;

public class Ejercicio {
    private int id;
    private String nombre;
    private int distanciaX;
    private String fondo;    //URL
    private String objetivo; //URL
    
    public Ejercicio(int id, String nombre, int distanciaX, String fondo, String objetivo) {
        this.id = id;
        this.nombre = nombre;
        this.distanciaX = distanciaX;
        this.fondo = fondo;
        this.objetivo = objetivo;
    }
    
    public int getId () {
        return this.id;
    }

    public void setId (int id) {
        this.id = id;
    }
    

    
}
