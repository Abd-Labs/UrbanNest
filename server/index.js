const express = require('express')
const app = express();
const http = require("http");
const cors = require("cors");
const dotenv = require('dotenv')
const connectDB = require('./mongodb/connect.js')
const PropertyRoutes = require('./routes/v1/PropertyRoutes.js')
const UserRoutes = require('./routes/v1/UserRoutes.js')
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.use(express.json({ limit: "50mb" }));

app.use('/api/users',UserRoutes);
app.use('/api/properties',PropertyRoutes);

const startServer = async()=>{
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

startServer()


