const express = require('express');
const bodyParser = require('body-parser');

const professionalRoutes = require('./routes/professional');
const PORT = 8080;
const app = express();

app
  .use(bodyParser.json())
  .use((req,res, next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    next();
  })
  .use('/professional', professionalRoutes); //



app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
