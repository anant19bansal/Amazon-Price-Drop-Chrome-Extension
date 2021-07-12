console.log("background script is running");

console.log($('<h1>Hi</h1>'));


// $.ajax({
//     type: 'POST',
//     url: 'http://localhost:8000/products',
//     data: {
//         message: 'Message from background script',
//     },
//     success: function(data){
//         console.log(data);
//     },
//     error: function(err){
//         console.log('There was some error: ', err);
//     } 
// });

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log(request);
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8000/users/create-user',
        data: request.data,
        success: function(data){
            console.log(data);
        },
        error: function(err){
            console.log('There was some error: ', err);
        } 
    });
});