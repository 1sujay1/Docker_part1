import express from "express";
const app = express();
import connectToDatabase from "./helper.mjs";

app.get("/", (req, res) => {
  res.send("<h1>Hi there!!</h1>");
});

await connectToDatabase();
app.listen(3000, () => {
  console.log("Listening to PORT", 3000);
});
