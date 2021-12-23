
public interface DataTypes {
	
	public static void main(String[] args) {
		// char - only one character  can be stored , it can be alphabet or symbol or numeric 
		char char1 = 'a';
		char char2= 'B';
		char char3 ='+';
		char char4 = '5';
		
		System.out.println(char1+" "+ char2+" " + char3 +" "+ char4 );
		
		
		
		
		// byte stores values from -128 to 127 ,  for alphabets and symbols it stores ascii values . and numeric values for numbers 
		
		byte byte1 = 1;
		byte byte2 = 'r';
		byte byte3 = '=';
		byte bytemax = Byte.MAX_VALUE;
		byte bytemin = Byte.MIN_VALUE;
		
		System.out.println("byte1 = " +byte1
				+ "		 byte2 = "+ byte2
				+ "		 byte3 = " +byte3
				+ "		 bytemax = "+ bytemax
				+ "		 bytemin =  "+ bytemin);
		
		
		
		// short data type stores numeric values . short min value = -32768 short max value = 32767
		short shortMin = Short.MIN_VALUE;
		short shortMax= Short.MAX_VALUE;
		
		System.out.println(" short min value = "+ shortMin + " short max value = "+shortMax);
		
		
		
		// int data type stores numeric values .int min value = -2147483648 int max value = 2147483647
		
	int intMin = Integer.MIN_VALUE;
	int intMax= Integer.MAX_VALUE;
	System.out.println(" int min value = "+ intMin + " int max value = "+intMax);
	
	
	
	
	//long data type stores numeric values . long min value = -9223372036854775808 long max value = 9223372036854775807
	
	long longMin= Long.MIN_VALUE;
	long longMax= Long.MAX_VALUE;
	System.out.println(" long min value = "+ longMin + " long max value = "+longMax);
	
	
	
	
	
	//float data type is a single precision float point .float min value = 1.4E-45 float max value = 3.4028235E38
	float floatMax= Float.MAX_VALUE;
	float floatMin= Float.MIN_VALUE;
	float float1= 1.00333f;
	System.out.println(" float min value = "+ floatMin + " float max value = "+floatMax);
	System.out.println(" float1 = " +float1);
	
	
	
	
	
	
	//double - double precision 	double min value = 2.2250738585072014E-308 double max value = 1.7976931348623157E308

		
	double doubleMin= 	Double.MIN_NORMAL;
	double doubleMax= Double.MAX_VALUE;
	System.out.println(" double min value = "+ doubleMin + " double max value = "+doubleMax);
	
		
	}
	
	

}
