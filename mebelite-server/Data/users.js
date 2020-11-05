import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("qwerty", 10),
    isAdmin: true,
  },
  {
    name: "Mark",
    email: "Mark@example.com",
    password: bcrypt.hashSync("qwerty", 10),
  },
  {
    name: "Arina",
    email: "Arina@example.com",
    password: bcrypt.hashSync("qwerty", 10),
  },
  {
    name: "John",
    email: "John@example.com",
    password: bcrypt.hashSync("qwerty", 10),
  },
];

export default users;
