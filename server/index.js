const express = require('express')
const app = express();
const cors = require("cors");
const dotenv = require('dotenv')
dotenv.config();
const connectDB = require('./mongodb/connect.js')
const PropertyRoutes = require('./routes/v1/PropertyRoutes.js')
const UserRoutes = require('./routes/v1/UserRoutes.js')
const authRoute = require('./routes/auth-route.js')

const PORT = process.env.PORT || 5000;
const passport = require('passport');
require('./passport');

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials:true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

// app.use(
//   session({
//     secret: 'MySecretKey',
//     resave: true,
//     saveUninitialized: true,
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

app.use(express.json({ limit: "50mb" }));

app.use('/api/users',UserRoutes);
app.use('/api/properties',PropertyRoutes);
app.use('/auth',authRoute)
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


