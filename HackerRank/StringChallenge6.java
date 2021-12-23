import java.util.Scanner;

public class StringChallenge6 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		 Scanner scan = new Scanner(System.in);
		 System.out.println(" enter the sentence ");
	        String s = scan.nextLine();
	        // Write your code here.
	       
	        
	        s = s.trim();
	        if (s.length() == 0) {
	            System.out.println(0);
	        } else {
	        
	        String[] arrayS = s.split("[\\W']+");
	        System.out.println(arrayS.length);
	        for(String i:arrayS) {
	        	System.out.println(i);
	        }
	        }
	        

	}

}
