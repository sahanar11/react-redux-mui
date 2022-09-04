import Dexie from "dexie";

export default class UserDatabase extends Dexie {
  users;
  constructor() {
    super("UserDatabase");
    this.version(1).stores({
      users: "++id,email",
    });
  }
}
