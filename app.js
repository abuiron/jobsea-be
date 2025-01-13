const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const jobTypeRoute = require('./routes/jobsTypeRoutes');
const jobRoute = require('./routes/jobsRoutes');

const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error");

// Database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));

// Middleware
app.use(morgan('dev'));
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({
    limit: "5mb",
    extended: true
}));
app.use(cookieParser());
app.use(cors());

// Routes middleware
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', jobTypeRoute);
app.use('/api', jobRoute);

// Error middleware
app.use(errorHandler);

// Port
const port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
