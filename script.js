"use strict";

class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}


class AddressBook {
    constructor() {
        this.contacts = [
            new Contact("josie", "josiekwheeler@gmail.com", "248-303-5359", "self"),
            new Contact("brandon", "dinobrown39@gmail.com", "313-463-3795", "boyfriend")
        ];
    }
    add(info) {
        this.contacts.push(info);
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
    }
    deleteByName(name) {
        this.contacts.splice(name, 1);
    }
    print() {
        for (let i = 0; i < this.contacts.length; i++) {
            console.log(`Index: ${i}, Name: ${this.contacts[i].name}, Email: ${this.contacts[i].email}, Phone: ${this.contacts[i].phone}, Relation: ${this.contacts[i].relation},`);
        }
    }
}


const book = new AddressBook();


while (true) {
    let choice = prompt("Add, Delete, Print, or Quit?");
    if (choice === "Quit") {
        console.log("Goodbye!");
        break;
    } else if (choice === "Print") {
        book.print();
    } else if (choice === "Delete") {
        let deleteChoice = prompt("Delete by index or by name?");
        if (deleteChoice === "Name") {
            book.deleteByName(prompt("What name to delete?"));
        } else if (deleteChoice === "Index") {
            book.deleteAt(prompt("What index to delete?"));
        }
    } else if (choice === "Add") {
        book.add(new Contact(
            prompt("Enter a name."),
            prompt("Enter an email."),
            prompt("Enter a phone number."),
            prompt("Enter a relation.")
        ));
    }
}