const express=require('express');
const userRoutes=require('./src/routes/user');
const stocks=require('./src/routes/stocks');
const app=express();
const cors=require('cors');
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/v1/user',userRoutes);
app.use('/api/v1/stocks',stocks);
app.use(cors());
app.listen(process.env.PORT|| 3000,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});
