/*
File: sophisticated_code.js
Description: This JavaScript code showcases an advanced implementation of a web-based messaging application.
*/

// Class for managing users
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.id = User.generateId();
  }

  static generateId() {
    return Math.floor(Math.random() * 100000);
  }

  getInfo() {
    return `User ${this.id}: ${this.name} (${this.email})`;
  }
}

// Class for managing messages
class Message {
  constructor(from, to, content) {
    this.from = from;
    this.to = to;
    this.content = content;
    this.timestamp = new Date();
  }

  static formatTimestamp(timestamp) {
    return timestamp.toLocaleString();
  }

  display() {
    console.log(`${this.from.name} (${this.from.email}) sent a message to ${this.to.name} (${this.to.email}):`);
    console.log(this.content);
    console.log(`Sent at: ${Message.formatTimestamp(this.timestamp)}`);
  }
}

// Class for managing conversations
class Conversation {
  constructor() {
    this.messages = [];
  }

  addMessage(message) {
    this.messages.push(message);
  }

  displayMessages() {
    console.log(`--- Conversation (${this.messages.length} messages) ---`);
    this.messages.forEach((message) => {
      message.display();
    });
    console.log('--- End of conversation ---');
  }
}

// Create users
const user1 = new User("John Doe", "john@example.com");
const user2 = new User("Jane Smith", "jane@example.com");

// Create messages
const message1 = new Message(user1, user2, "Hey Jane, how's it going?");
const message2 = new Message(user2, user1, "Hi John, everything is fine. How about you?");
const message3 = new Message(user1, user2, "I'm doing great. Just working on a new project.");

// Create conversation
const conversation = new Conversation();
conversation.addMessage(message1);
conversation.addMessage(message2);
conversation.addMessage(message3);

// Display conversation
conversation.displayMessages();
