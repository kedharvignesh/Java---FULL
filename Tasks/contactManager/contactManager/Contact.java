package contactManager;

public class Contact {

	private String name;
	private long phone;
	private String mail;
	private final String id;

	// Constructors
	public Contact(String name, long phone, String mail, String id) {
		this.name = name;
		this.phone = phone;
		this.mail = mail;
		this.id = id;
	}

	// getters and setters
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public long getPhone() {
		return phone;
	}

	public void setPhone(long phone) {
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
