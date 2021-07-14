module.exports.scrapper = function(req, res){
    console.log(req.body);
    return res.json({
        data:{
            message: 'Got the products',
        }
    });
}