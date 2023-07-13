public class SecondChild extends FirstChild {
      public void child2Method() {
          System.out.println("Second child class is created");
      }
      public static void main(String[] args) {
      SecondChild child2 = new SecondChild();
      child2.parentMethod();
      child2.child1Method();
      child2.child2Method();
  }
  }
  
