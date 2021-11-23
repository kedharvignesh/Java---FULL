package contactManager;

public class Contact {

	private String name;
	private int phone;
	private String mail;
	private String id;

	// Constructors
	public Contact(String name, int phone, String mail) {
		this.name = name;
		this.phone = phone;
		this.mail = mail;
		this.id=name+mail+phone;
	}

	// getters and setters
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getPhone() {
		return phone;
	}

	public void setPhone(int phone) {
		this.phone = phone;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}
	public String getId() {
		return id;
	}

	@Override
	public String toString() {
		return "Contact [name=" + name + ", phone=" + phone + ", mail=" + mail + "]";
	}

}
