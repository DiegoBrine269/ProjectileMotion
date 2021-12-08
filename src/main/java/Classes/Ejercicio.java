
package Classes;

public class Ejercicio {
    private int id;
    private String nombre;
    private int ancho;
    private int altura;
    
    public Ejercicio(int id, String nombre, int ancho, int altura) {
        this.id = id;
        this.nombre = nombre;
        this.ancho = ancho;
        this.altura = altura;
    }
    
    public int getId () {
        return this.id;
    }
    
    public int getAncho () {
        return this.ancho;
    }
        
    public int getAltura () {
        return this.altura;
    }

    public void setId (int id) {
        this.id = id;
    }
    
    public void setAncho (int ancho) {
        this.ancho = ancho;
    }
        
    public void setAltura (int altura) {
        this.altura = altura;
    }    
    
}
