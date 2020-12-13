const express = require("express");
const router = express.Router();

router.get("/:productId", (req,res,next)=>{
    const id = req.params.productId;
    if (id==="special") {
        res.status(200).json({
            message: "You find a special product",
            id:id
        });
    } else {
        res.status(200).json({
            message: "you passed an id",
            id: id
        });
    }
});

router.post("/", (req,res,next)=>{
    res.status(200).json({
        message: "handling post request from /product"
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