public class ChildClass  extends AbstractParent{
    @Override
    public void abstractMethods(){

    System.out.println("This is the implementation using abstract class");
    }
public static void main(String[] args){
    ChildClass child = new ChildClass();
    child.abstractMethods();
}    

    
}
