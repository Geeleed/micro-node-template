const express = require("express");
const prisma = require("../prisma/prismaControl");
const router = express.Router();

router.use(express.json());

router.route("/").get(async (req, res) => {
  try {
    const allUsers = await prisma.user.findMany();
    console.log("read success");
    const result = JSON.stringify(
      { users: allUsers, message: "read success" },
      null,
      2
    );
    res.setHeader("Content-Type", "application/json");
    res.send(result);
  } catch (error) {
    console.error("Error reading users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.route("/").post(async (req, res) => {
  try {
    const { name, email } = req.body;
    const data = { name, email };
    await prisma.user.create({ data });
    console.log("create success");
    res.send({ message: "create success" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.route("/").delete(async (req, res) => {
  try {
    await prisma.user.deleteMany();
    console.log("delete success");
    res.send({ message: "delete success" });
  } catch (error) {
    console.error("Error deleting users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
