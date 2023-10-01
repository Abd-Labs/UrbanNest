const app = require('express')();
const http = require('http')

const PORT = process.env.PORT || 5000

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  }));


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
});