package contactManager;

public interface Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ContactApplication contactApplication = new ContactApplication();
		contactApplication.start();
		contactApplication.printMenu();
		try {
			contactApplication.join();
		} catch (InterruptedException e) {
			System.out.println("Loading contacts");
		}

		contactApplication.runMenu();

	}

}
