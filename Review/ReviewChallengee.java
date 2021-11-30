package review;



//['2', '/', '3', '*', '5', '+','1']
public class ReviewChallengee {

	public static void main(String[] args) {
		
		char[] input = {'2','/','3','*','5','+','1'};
		
		double total = 0;
		double num1=Character.getNumericValue(input[0]);
		int num2=0;
		char operation = 0;
		for(int i=0;i<input.length-2;i+=2) {
			
			
			operation = (char)input[i+1];
			num2= Character.getNumericValue(input[i+2]);
			
			if(operation=='/') {
				
				total = (double)num1/num2;
			}
			else if (operation=='*') {
				total = num1*num2;
			}
			else if (operation=='+') {
				total = num1+num2;
			}
			else if(operation == '-') {
				total = num1-num2;
			}
			
			System.out.println("num1 = "+num1);
			System.out.println("num2 = "+num2);
			System.out.println("operator = " + operation +"\n");
			num1=total;
			
		}
		
		System.out.println("Total is : "+total);

	}

}
