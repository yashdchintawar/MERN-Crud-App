const express = require("express");
const app = express();

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");

const userRoute = require("./routes/userRoutes");

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected Sucessfully");
    app.listen(process.env.PORT || 8000, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Mongo DB Connected! & Running At", process.env.PORT);
      }
    });
  })
  .catch((error) => { 
    console.log(error);
  });

  app.use(userRoute);
