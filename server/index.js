const express = require("express");
const msgCntl = require("./controllers/message_controller");
//Create an express app.
const app = express();

//Configure the app to parse JSON from the body.
app.use(express.json());
app.use(express.static("public/build"));

const msgBaseURL = "/api/messages";
app.get(msgBaseURL, msgCntl.readMsg);
app.post(msgBaseURL, msgCntl.createMsg);
app.put(`${msgBaseURL}/:id`, msgCntl.updateMsg);
app.delete(`${msgBaseURL}/:id`, msgCntl.deleteMsg);

//Configure the app to listen on port 3001 and display a message when it is listening.
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
