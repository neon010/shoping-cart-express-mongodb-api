const express = require("express");
const router = express.Router();

router.get("/", (req,res,next)=>{
    res.status(200).json({
        message: "orders fetched",
    });
 
});

router.post("/", (req,res,next)=>{
    res.status(201).json({
        message: "order placed"
    });
});

router.get("/:orderId", (req,res,next)=>{
    res.status(200).json({
        message: "orders fetched",
        id: req.params.orderId
    });
 
});


router.put("/:productId", (req,res,next)=>{
    const id = req.params.productId;
    if (id==="special") {
        res.status(200).json({
            message: "You updated a special product",
            id:id
        });
    } else {
        res.status(200).json({
            message: "you passed an id",
            id: id
        });
    }
});

router.delete("/:productId", (req,res,next)=>{
    res.status(200).json({
        message: "handling delete request from /product"
    });
});


module.exports = router