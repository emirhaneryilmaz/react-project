//import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

// app
const app = express();
// db
mongoose.connect(
    process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("DB Connected")).catch(err => console.log("DB Connection Error", err));

// middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));
// routes
const testRoutes = require('./routes/test');
app.use('/', testRoutes);

const userSchema = new mongoose.Schema({
    tckimlik: String,
    esifre: String
});

const User = new mongoose.model("User", userSchema);
User.createIndexes();

app.post("/Register", (req, res) => {
    console.log(req.body)
    const { tckimlik, esifre } = req.body;
    const user = new User({ tckimlik, esifre })
    user.save(err => {
        if (err) {
            res.send(err)
        } else {
            res.send({ message: "sucessful" })
        }
    })
})

// port
const port = process.env.PORT || 8080;

//listener
const server = app.listen(port, () =>
    console.log(`Server is running on port ${port}`)
);