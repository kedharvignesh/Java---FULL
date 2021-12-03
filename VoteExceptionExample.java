package review;

import java.util.Scanner;

public class VoteExceptionExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("Enter Age :");
		Scanner scanner = new Scanner(System.in);
		
		int age = scanner.nextInt();
		
		try {
			if(age<18) {
				throw new VoteException(" Under Age");
			}
		}catch(VoteException e) {
			System.out.println("vote Exception catched");
			e.printStackTrace();
			e.getMessage();
		}

	}

}



class VoteException extends Exception{
	public VoteException(String message) {
		super(message);
		System.out.println(" ");	}
	

	
}