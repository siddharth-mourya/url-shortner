const express = require("express"); //imports express module to file
const cors = require("cors"); //imports cors module

const app = express(); //makes a new server instance

app.use(cors()); //makes server allow cross-origin
app.use(express.json()); //enables server to understand json requests

app.get("/", (req, res) => {
  //listens to the route '/' and returns a text to it
  res.send("This is awesome! Shortening URLs for ya");
});

//if PORT number are defined as a environment variable, use it, if not, use 3000
const PORT = process.env.PORT || 3000;

//puts the server to listen
app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
