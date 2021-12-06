
public class Encapsulation {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Ticket passenger1 = new Ticket();
		
		passenger1.setAge(22);
		passenger1.setName("kedhar");
		//can have some validation for seetters and getters .
		
		System.out.println(passenger1.getAge());
		System.out.println(passenger1.getName());

	}

}

class Ticket{
	private String name;
	private int age;
	
	// can have some validation to access getters and setters .
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	
	
}