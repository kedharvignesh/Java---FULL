import { generateUniqueId } from "./utils";
export default class Contact {
    constructor(firstName, lastName, email, phone, dateOfBirth, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.id = generateUniqueId();

    }

}
