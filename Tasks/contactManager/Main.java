package contactManager;

public interface Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ContactApplication contactApplication = new ContactApplication();
		contactApplication.loadContacts();
		contactApplication.menu();

	}

}
