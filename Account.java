import java.util.*;
public class Account {
   private String id;
   private String name;
   private int balance = 0;
public Account(String id, String name, int balance) {
    this.id = id;
    this.name = name;
    this.balance = balance;
}
public String getId() {
    return id;
}
public String getName() {
    return name;
}
public int getBalance() {
    return balance;
}
public void credit(int amount){
    balance = balance+amount;
}
public void debit(int amount){
    if(amount<=balance){
        balance = balance-amount;
    }
    else{
        System.out.println("Amount is " +amount + " Amount exceeded balance");
    }
}
public void transferTo(Account acc,Account newAcc,int amount){
    if(amount<=balance){
        acc.balance = balance-amount;
        newAcc.balance =+ amount;

    }
    else{
        System.out.println("Amount is " +amount + " Amount exceeded balance"); 
    }

    }

public static void main(String[] args){
    Account acc = new Account("id2345","Anitha",100);
    

    Account newAcc = new Account("id6789","Ziya",0);
    

    acc.credit(50);
    System.out.println("Amount credited 50 so balance is:" +acc.getBalance());
    
    acc.debit(50);
    System.out.println("Amount debited 50 so balance is:" +acc.getBalance());

    acc.debit(200);/*Checking condition amount exceeds balance */
    System.out.println("Debited amount greater than balance,so balance is:" +acc.getBalance());

    acc.transferTo(acc,newAcc,20);
    System.out.println("Balance in older account:" +acc.getBalance());
    System.out.println("Amount shifted to balance in new account:" +newAcc.getBalance());

    acc.transferTo(acc,newAcc,500);/*Checking condition amount greater than balance */
    System.out.println("Balance in older account with amount greater than balance,so balance is:" +acc.getBalance());
    System.out.println("Amount shifted to balance in new account:" +newAcc.getBalance());

    Object[] oldaccount= {acc.getId(),acc.getName(),acc.getBalance()};
    System.out.println("Old account :" + Arrays.toString(oldaccount));

    Object[] newaccount = {newAcc.getId(),newAcc.getName(),newAcc.getBalance()};
    System.out.println("New account :" + Arrays.toString(newaccount));
    
}
}






   
   
