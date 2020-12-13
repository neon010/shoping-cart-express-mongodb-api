const express = require("express");
const app = express();
const morgan = require("morgan");

const productRotes = require("./api/routes/product");
const ordersRoutes = require("./api/routes/order");

app.use(morgan("dev"));

app.use("/products",productRotes);
app.use("/orders", ordersRoutes);

app.use((req,res,next)=>{
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error: error.message
    });
    
});




module.exports = app;