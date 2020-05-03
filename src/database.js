const mongoose = require("mongoose");

mongoose
  .connect('mongodb://localhost/notes-db-app', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
  })
  .then(db => console.log("DB is connected"))
  .catch(err => console.error(err));