console.log("background script is running");

let openWindow = window.open("https://www.amazon.in/gp/registry/wishlist?requiresSignIn=1&ref_=nav_AccountFlyout_wl");

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
//     console.log(request);
//     console.log(sender);
//     let url; 
//     if(request.data.isLogin){
//         url = 'http://localhost:8000/users/create-session';
//     }else{
//         url = 'http://localhost:8000/users/create-user';
//     }
//     $.ajax({
//         type: 'POST',
//         url: url,
//         data: request.data.data,
//         success: function(data){
//             console.log('Data from server: ')
//             console.log(data.data.token);
//             document.cookie = `amazon-scrap=${data.data.token}`
//         },
//         error: function(err){
//             console.log('There was some error: ', err);
//         } 
//     });
// });

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log(sender);
    console.log(request.items);
    openWindow.close();
        $.ajax({
        type: 'POST',
        url: 'http://localhost:8000/scrap',
        data: request,
        success: function(data){
            console.log('Data from server: ')
            console.log(data);
        },
        error: function(err){
            console.log('There was some error: ', err);
        } 
    });
});

