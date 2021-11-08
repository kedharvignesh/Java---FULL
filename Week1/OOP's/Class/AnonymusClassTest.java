
public class AnonymusClassTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		AnotherClass anotherClass=new AnotherClass();
		System.out.println(anotherClass.doSomething());

	}
	
	public final static String doStringStuff(UpperConcat uc,String s1,String s2) {
		return uc.upperAndConcat(s1, s2);
	}

}

interface UpperConcat {
	public String upperAndConcat(String s1,String s2) ;
}


class AnotherClass{
	public String doSomething() {
		System.out.println(" another class name is : "+getClass().getSimpleName() );
		return AnonymusClassTest.doStringStuff(new UpperConcat() {
			
			@Override
			public String upperAndConcat(String s1, String s2) {
				// TODO Auto-generated method stub
				System.out.println(" anonymus class name is : "+getClass().getSimpleName() );
				return s1.toUpperCase()+s2.toUpperCase();
			}
		}, "string1", "string2");
	}
}
