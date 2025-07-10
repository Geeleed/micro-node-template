const express = require("express");
const app = express();

app.use("/test", require("./routes/testRouter"));
app.use("/user", require("./routes/userRouter"));

app.route("/").get((req, res) => {
  res.sendFile(require("path").join(__dirname, "/front/index.html"));
});

app.listen(8200, () => console.log(`✅ server run on http://localhost:8200`));
