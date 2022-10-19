require("dotenv").config();

const DB_URI =
  process.env.NODE_ENV === "test"
    ? "postgresql:///messagely_test"
    : "postgresql://gbmcquigg:Blake2017@localhost/bookstore";

module.exports = { DB_URI };
