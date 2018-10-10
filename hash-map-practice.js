/*
####Questions

>  _What is a hash table?_

A hash table is a data structure in computer science that stores data in key/value pairs. The key is derived by giving a piece of data to a hashing function. The function converts the key to an integer and stores the value at the place in the internal hash table array corresponding to the integer derived from the hashing function.

> _What is hashing?_

Hashing is the act of converting a piece of data to be used as a key in a key/value pair into an integer to be used as an index within an array.

> _How does a hash table store data?_

A function converts a given key into an integer and stores the value at the place in the internal hash table array corresponding to the integer derived from the hashing function.

> _How are hash tables and objects different?_ 

From doing some research on StackOverflow, it appears that the biggest difference between hash tables (Maps) and objects in JavaScript is that the key can be any value (including objects) in a hash table, whereas it must be a string in an object.

There are also some more nuanced differences, such as the ability to iterate through a hash map in insertion order, whereas this is not officially supported in the JavaScript spec for objects.

> _Determine whether you would use a hash table or an object for the following pieces of data:_

- A list of pets and their unique names: **hash table**
- The name, age, and birthday of your best friend: **object**
- The name and location of every company in a given city: **hash table**
- All of the books checked out from a library by a particular individual: **object**
- The primary and secondary phone numbers for a contact: **object**

For all of the above answers, I determined what to use base on if I felt like I needed functionality that is similar to a dictionary for the specified use case. If yes, I used a hash map, if no, I used an object.

*/

// Build a sytem that allows a sales associate to enter a customer's name, address, and phone number into the system and look up customers using their phone numbers

class CustomerDatabase {
  constructor() {
    this.database = new Map;
  }

  addNewCustomer(name, address, phoneNumber) {
    this.database.set(phoneNumber, {name: name, address: address});
    return 'Customer added to database.'
  }

  findCustomer(phoneNumber) {
    return this.database.get(phoneNumber);
  }
}

const customerDatabase = new CustomerDatabase;

customerDatabase.addNewCustomer('Josh', '123 Sesame Street', '8132678213');
customerDatabase.findCustomer('8132678213');

// Build a system that allows a store owner to track their store's inventory using a hash table for storage.

class Inventory {
  constructor() {
    this.inventory = new Map;
  }

  addNewItem(item, quantity) {
    this.inventory.set(item, quantity);
    return `New item ${item} added to inventory.`
  }

  addItemQuantity(item, quantity) {
    if(!this.inventory.has(item)) {
      this.addNewItem(item, quantity);
      return `Item not found. New item ${item} added to inventory.`
    }

    const prevQuantity = this.inventory.get(item);
    const newQuantity = prevQuantity + quantity;
    this.inventory.set(item, newQuantity);
    return `${quantity} added to ${item} inventory quantity.`;
  }

  subtractItemQuantity(item, quantity) {
    if(!this.inventory.has(item)) {
      return `There are no ${item}s currently in inventory.`;
    }

    const prevQuantity = this.inventory.get(item);
    if (quantity > prevQuantity) {
      return `There are not enough ${item}s to subtract ${quantity} from inventory.`;
    }

    const newQuantity = prevQuantity - quantity;
    this.inventory.set(item, newQuantity);
    return `${quantity} subracted from ${item} inventory quantity.`;
  }

  getItemQuantity(item) {
    if(!this.inventory.has(item)) {
      return 'Item not found.'
    }

    return `Item: ${item}\nQuantity: ${this.inventory.get(item)}\n`;
  }
}

// Build a system that allows digital copies of newspapers to be entered and searched by publisher and publication date

class NewspaperDatabase {
  constructor() {
    this.dateLookup = new Map;
    this.publisherLookup = new Map;
  }

  addNewspaper(newspaper, publisher, publicationDate) {
    this.dateLookup.set(publicationDate, {newspaper: newspaper, publisher: publisher});
    this.publisherLookup.set(publisher, {newspaper: newspaper, publicationDate: publicationDate});
    return 'Newspaper added to database.';
  }

  findNewspaper(searchTerm, searchType) {
    const noneFound = 'No newspapers found.';
    if(searchType === 'publisher') {
      if(!this.publisherLookup.has(searchTerm)) {
        return noneFound;
      } else {
        return this.publisherLookup.get(searchTerm);
      }
    }

    if(searchType === 'date') {
      if(!this.dateLookup.has(searchTerm)) {
        return noneFound;
      } else {
        return this.dateLookup.get(searchTerm);
      }
    }
  }
}