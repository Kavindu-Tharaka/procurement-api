const Order = require('../models/OrderModel');


exports.getOrders = async(req,res) => {
    try {
        const results = await Order.find();
        res,send(results);
        
    } catch (error) {
        res.send(error.message);
        console.log(error.message)
    }
}

exports.addOrder = async (req,res) => {
    
    try {
       const newOrder = new Order({
           orderItems : req.body.orderItems
       })

        const result =await newOrder.save()
        res.send(result)
    } catch (error) {
        res.send(error.message)
        console.log(error.message)
    }
}