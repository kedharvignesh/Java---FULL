
public class Employee implements EmployeeRules{

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		System.out.println("salary : "+SALARY);
		System.out.println("working hours : "+WORKING_HOURS);
		
		Employee emp1= new Employee();
		emp1.communicationLanguage();
		emp1.dressCode();
		emp1.leavesPerMonth();

	}

	@Override
	public void dressCode() {
		// TODO Auto-generated method stub
		System.out.println("casuals");
	}

	@Override
	public void leavesPerMonth() {
		// TODO Auto-generated method stub
		System.out.println("one paid leave");
	}

	@Override
	public void communicationLanguage() {
		// TODO Auto-generated method stub
		System.out.println("english");
		
	}

}

interface EmployeeRules{
	int SALARY = 25000;
	int WORKING_HOURS= 9;
	
	void dressCode();
	
	void leavesPerMonth();
	
	void communicationLanguage();
	
	
}
