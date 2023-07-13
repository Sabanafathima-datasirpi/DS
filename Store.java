public class Store {
    private String name;
    private String address;

    public Store(String name, String address) {
        this.name = name;
        this.address = address;
    }

    public String getName(){
        return name;

    }
    public void setName(String newName){
        name = newName;
    }
    public String getAddress(){
        return address;

    }
    public void setAddress(String newAddress){
        address = newAddress;
    }
  
public static void main(String[] args){
    Store store = new Store("Fathima Electronics","14C,Mohamedali street,Tirunelveli Town");
    System.out.println("Store Name:" +store.getName());
    System.out.println("Store Address:" +store.getAddress());

    store.setName("Sabana Electronics");
    store.setAddress("12B,Mohamedali street,Tirunelveli Town");

    System.out.println("Store Name:" +store.getName());
    System.out.println("Store Address:" +store.getAddress());



  }
    
}
