//Create an array to hold the messages.
const messages = [];
//variable that will keep track of what id to assign to messages.
let id = 0;

//Export an object with methods to create, read, update, and delete messages.
module.exports = {
  createMsg: (req, res) => {
    //create a message using text and time off of the request body.
    const { text, time } = req.body;
    //push this new messsage object into the messages array.
    messages.push({ id, text, time });
    //id should be incremented by one so that the previous id won't be used on any other future messages
    id++;
    //send the updated messages array.
    res.status(200).send(messages);
  },
  readMsg: (req, res) => {
    //return the entire messages array
    res.status(200).send(messages);
  },

  updateMsg: (req, res) => {
    //update the text property of a message using the text value from the request body
    const { text } = req.body;
    //which message to update based on the value of id from the request url parameters.
    const updateID = req.params.id;
    //.findIndex to get the index where the ids match from params and body
    const messageIndex = messages.findIndex(
      (message) => message.id == updateID
    );
    //get the object using the index
    let message = messages[messageIndex];

    //update the object.
    messages[messageIndex] = {
      id: message.id,
      text: text || message.text,
      time: message.time,
    };

    res.status(200).send(message);
  },
  deleteMsg: (req, res) => {
    //get the correct ID from params to delete
    const deleteID = req.params.id;
    //get message object index
    const messageIndex = messages.findIndex(
      (message) => message.id == deleteID
    );

    //delete index from array
    messages.splice(messageIndex, 1);

    res.status(200).send(messages);
  },
};
