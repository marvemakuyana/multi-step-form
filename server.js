const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routers/user');
//const cors = require('cors');

const app = express();
 app.use(express.json());
 //app.use(cors());

// Db config
const db = require('./config/keys').mongoURI

//connect to Mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err))

app.use(userRouter)
app.get('/', (req, res) => {
    res.send('<h2>This is from index.js </h2>')
});
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))