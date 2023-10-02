const app = require('express')();
const http = require('http')
const cors = require('cors')
const PORT = process.env.PORT || 5000

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  }));


app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
});