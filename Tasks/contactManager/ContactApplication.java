package contactManager;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.InputMismatchException;
import java.util.Scanner;
import java.util.UUID;

public class ContactApplication extends Thread {

	Scanner scanner = new Scanner(System.in);
	public HashMap<String, Contact> contactsMap = new HashMap<String, Contact>();
	HashMap<String, ArrayList<String>> namesMap = new HashMap<String, ArrayList<String>>();
	HashMap<Integer, String> numbersMap = new HashMap<Integer, String>();
	HashMap<String, String> emailsMap = new HashMap<String, String>();

	@Override
	public void run() {
		loadContacts();
	}

	void loadContacts() {
		try {
			contactsMap = FilereadWrite.load();
			namesMap = FilereadWrite.loadNames();
			numbersMap = FilereadWrite.loadNumber();
			emailsMap = FilereadWrite.loadMail();
		} catch (Exception e) {
			System.out.println("No contacts Found");
		}

	}

	void runMenu() {

		try {

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
				printMenu();
				runMenu();
				break;

			}
		} catch (InputMismatchException e) {
			System.out.println(" Invalid input ");

		}
		FilereadWrite.save(contactsMap);

	}

	private Contact searchContact() {
		String id = "";
		System.out.println(
				"Select an option : \n" + "1-Search by name \n" + "2-Search by phone \n" + "3-Search by E-mail");
		int selectSearch = scanner.nextInt();

		Contact contact = null;
		switch (selectSearch) {
		case 1:
			contact = searchByName();
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
			printMenu();
			runMenu();
		}
		return contact;
	}

	// search methods
	private Contact searchByName() {
		Contact contact = null;
		try {
			System.out.println("Enter search name :");
			String searchName = scanner.next().toUpperCase();
			ArrayList<String> id = namesMap.get(searchName);
			contact = contactSelection(id);
		} catch (Exception e) {
			System.out.println(" Does not exist ");
			printMenu();
			runMenu();
		}
		return contact;
	}

	private Contact contactSelection(ArrayList<String> id) {
		Contact contact;
		int count = 0;
		if (id.size() > 1) {
			for (String i : id) {
				System.out.println((count + 1) + "-" + contactsMap.get(i));
				count++;
			}
			System.out.println(" selecet a contact :");
			int selection = scanner.nextInt();
			contact = contactsMap.get(id.get(selection - 1));
		} else {
			contact = contactsMap.get(id.get(0));
		}
		return contact;
	}

	private String searchByPhone() {
		System.out.println("Enter search phone number :");
		int searchNumber = scanner.nextInt();
		return numbersMap.get(searchNumber);

	}

	private String searchByMail() {
		System.out.println("Enter search mail :");
		String searchMail = scanner.next().toLowerCase();
		return emailsMap.get(searchMail);

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
				deleteContact(contact);
				break;
			default:
				System.out.println(" Invalid selection \n");
				printMenu();
				runMenu();
			}
		}
	}

	private void createContact() {
		System.out.println(" Enter new  contact :\n\n");
		String name = enterName();
		int number = enterNumber();
		String mail = enterEmail();
		String id = UUID.randomUUID().toString();
		contactsMap.put(id, new Contact(name, number, mail, id));
		System.out.println("Contact saved");
		numbersMap.put(number, id);
		namesMap.computeIfAbsent(name, k -> new ArrayList<String>()).add(id);
		emailsMap.put(mail, (id));
	}

	private void updateContact(Contact contact) {

		deleteContact(contact);
		createContact();
		System.out.println(" Updated contact");

	}

	private void deleteContact(Contact contact) {

		contactsMap.remove(contact.getId());
		namesMap.remove(contact.getName());
		numbersMap.remove(contact.getPhone());
		emailsMap.remove(contact.getMail());
		System.out.println(" Contact Deleted");

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

		System.out.println("All contacts : \n" + contactsMap.values() + "\n\n");
	}

	void printMenu() {
		System.out.println("\n\nContacts Menu : \n");
		System.out.println(
				"Select an option :\n" + "1-Search \n" + "2-Create \n" + "3-View all Contacts \n" + "0-Exit \n");
	}

}