import UserDatabase from "./UserDatabase";
import _isEmpty from "lodash-es/isEmpty";

let dbInstance;
function initDatabase() {
  dbInstance = new UserDatabase();
  return dbInstance;
}
const getUserDatabase = () => {
  if (dbInstance) {
    return dbInstance;
  }
  return initDatabase();
};

const getById = async (id) => {
  return await getUserDatabase().users.get({ id });
};
const getByEmail = async (email) => {
  return await getUserDatabase().users.get({ email });
};

const checkUserExistsByEmail = async (email) => {
  const users = await getByEmail(email);
  return !_isEmpty(users);
};
const checkUserExists = async (userDetails) => {
  const { email } = userDetails || {};
  const userEmailExists = await checkUserExistsByEmail(email);
  return userEmailExists;
};

const createUser = async (userDetails) => {
  const db = getUserDatabase();
  const userExists = await checkUserExists(userDetails);
  if (userExists) {
    throw new Error("User already exists");
  }
  db.transaction("rw", db.users, async () => {
    const userId = await db.users.add(userDetails);
    return await getById(userId);
  });
};

const UserService = {
  getUserDatabase,
  getById,
  getByEmail,
  checkUserExists,
  createUser,
};

export default UserService;
