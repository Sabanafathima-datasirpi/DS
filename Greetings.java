public class Greetings {
    public void greet(){
        System.out.println("Hello");
    }
    public void greet(String name){
        System.out.println("Hello " + name);
    }
    public static void main(String[] args){
        Greetings greeting = new Greetings();
        greeting.greet();
        greeting.greet("Sansa");

    }
    
}
