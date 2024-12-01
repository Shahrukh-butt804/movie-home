import dotenv from "dotenv";
dotenv.config();

import connectDb from "./db/mongodb.js";
import { app } from "./app.js";
const port = process.env.PORT || 5000;

connectDb()
  .then(() => {
    app.on("error", (err) => {
      console.log("ERROR after connecting DB", err);
      process.exit(1);
    });
    app.listen(port, () => {
      console.log("server is running on port", port);
    });
  })
  .catch((err) => {
    console.log("mongoDb connection failed", err);
    process.exit(1);
  });


// import { upload } from "./middlewares/multer.middleware.js";
// app.post("/route", upload.single("name"), (req, res) => {

// });
