import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.regex.PatternSyntaxException;



public class StringChallenge7 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner in = new Scanner(System.in);
		System.out.println("enter no. of test cases ");
		int testCases = Integer.parseInt(in.nextLine());
		while(testCases>0){
			String pattern = in.nextLine();
			testCases--;
		   try {
			Pattern.compile(pattern);
			System.out.println("Valid");
		   }catch(PatternSyntaxException e){
			   System.out.println("Invalid");
		   } 
	}
		
		
		
		

}
	}
