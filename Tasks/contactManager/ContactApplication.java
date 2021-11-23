package contactManager;

import java.util.Collection;
import java.util.HashMap;
import java.util.InputMismatchException;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Scanner;
import java.util.Set;

public class ContactApplication {

	Scanner scanner = new Scanner(System.in);
	static HashMap<String, Contact> contactsMap = new HashMap<String, Contact>();

	static HashMap<String, String> namesMap = new HashMap<String, String>();
	static HashMap<Integer, String> numbersMap = new HashMap<Integer, String>();
	static HashMap<String, String> emailsmap = new HashMap<String, String>();

	void loadContacts() {
		try {
			FilereadWrite.load();
			FilereadWrite.loadNames();
			FilereadWrite.loadNumber();
			FilereadWrite.loadMail();
		} catch (Exception e) {
			System.out.println("No contacts Found");
		}

	}

	void runMenu() {

		try {

			printMenu();
			int select = scanner.nextInt();
			while (select != 0) {
				switch (select) {
				case 1:
					Contact contact = searchContact();
					contactAction(contact);
					break;
				case 2:
					createContact();
					break;
				case 3:
					viewContacts();
					break;
				case 0:
					select = 0;
					break;
				default:
					System.out.println("\n\tInvalid input - press 1 or 2 or 3 else 0 to exit  ");
				}
				runMenu();
				break;

			}
		} catch (InputMismatchException e) {
			System.out.println(" Invalid input ");

		}
		FilereadWrite.save();

	}

	private Contact searchContact() {
		String id = "";
		System.out.println(
				"Select an option : \n" + "1-Search by name \n" + "2-Search by phone \n" + "3-Search by E-mail");
		int selectSearch = scanner.nextInt();

		Contact contact = null;
		switch (selectSearch) {
		case 1:
			id = searchByName();
			contact = contactsMap.get(id);
			System.out.println(contact);
			break;
		case 2:
			id = searchByPhone();
			contact = contactsMap.get(id);
			System.out.println(contact);
			break;
		case 3:
			id = searchByMail();
			contact = contactsMap.get(id);
			System.out.println(contact);
			break;

		default:
			System.out.println("\n\tInvalid input - going back to menu   ");
			runMenu();
		}
		return contact;
	}

	// search methods
	private String searchByName() {
		String key = "";
		System.out.println("Enter search name :");
		String searchName = scanner.next().toUpperCase();
		if (namesMap.containsValue(searchName)) {
			for (Entry<String, String> entries : namesMap.entrySet()) {
				if (entries.getValue().equals(searchName)) {
					key = entries.getKey();
				}
			}
		}
		return key;
	}

	private String searchByPhone() {
		System.out.println("Enter search phone number :");
		int searchNumber = scanner.nextInt();
		return numbersMap.get(searchNumber);

	}

	private String searchByMail() {
		System.out.println("Enter search mail :");
		String searchMail = scanner.next().toLowerCase();
		return emailsmap.get(searchMail);

	}

	void contactAction(Contact contact) {
		if (contact != null) {
			System.out.println("Select an option :\n" + "1-Update \n" + "2-Delete \n");
			int contactOption = scanner.nextInt();
			switch (contactOption) {
			case 1:
				updateContact(contact);
				break;
			case 2:
				if (deleteContact(contact))
					System.out.println(" Deleted Contact");
				;
				break;
			default:
				System.out.println(" Invalid selection \n");
				runMenu();
			}
		}
	}

	private void createContact() {
		System.out.println(" Enter new  contact :\n\n");
		String name = enterName();
		int number = enterNumber();
		String mail = enterEmail();
		contactsMap.put((name + mail + number), new Contact(name, number, mail));
		System.out.println("Contact saved");
		numbersMap.put(number, (name + mail + number));
		namesMap.put(name, (name + mail + number));
		emailsmap.put(mail, (name + mail + number));
	}

	private void updateContact(Contact contact) {

		deleteContact(contact);
		createContact();
		System.out.println(" Updated contact");

	}

	private boolean deleteContact(Contact contact) {

		if (contactsMap.remove(contact.getId()) != null)
			return true;
		namesMap.remove(contact.getName());
		numbersMap.remove(contact.getPhone());
		emailsmap.remove(contact.getMail());
		return false;

	}

	String enterName() {
		System.out.println("Enter contact name :");
		return scanner.next().toUpperCase();
	}

	int enterNumber() {
		System.out.println(" Enter phone number :");
		return scanner.nextInt();
	}

	String enterEmail() {
		System.out.println(" Enter E-mail :");
		return scanner.next().toLowerCase();
	}

	void viewContacts() {

		System.out.println("All contacts : \n" + contactsMap + "\n\n");
	}

	void printMenu() {
		System.out.println("\n\nContacts Menu : \n");
		System.out.println(
				"Select an option :\n" + "1-Search \n" + "2-Create \n" + "3-View all Contacts \n" + "0-Exit \n");
	}

}
