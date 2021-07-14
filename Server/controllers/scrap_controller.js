const Product = require('../models/product');

module.exports.scrapper = async function(req, res){
    // console.log(req.body);
    try {
        let items = req.body.items;
        for(item of items){
            let product = await Product.findOne({itemId: item.itemId, name: item.name});
            if(product){
                
            }else{
                await Product.create(item);
            }
        }
        
        return res.status(200).json({
            data:{
                message: 'Product list is updated',
            }
        });    
    } catch (error) {
        console.log('Error in scrap controller: ', error);
        return res.status(500).json({
            data:{
                message: 'Server error while scrapping'
            }
        });
    }
    
}