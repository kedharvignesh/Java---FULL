import java.util.Arrays;
import java.util.Scanner;

public class StringChallenge2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		 Scanner in = new Scanner(System.in);
	     System.out.println(" enter string : ");  
		 String S = in.next();
		 System.out.println("enter start index : ");
	        int start = in.nextInt();
	        System.out.println("enter end index : ");
	        int end = in.nextInt();
	        
	        String outputString = S.substring(start, end);
	        System.out.println(outputString);
	        
	        
	      
	        

	}

}
