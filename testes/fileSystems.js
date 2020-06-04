const fs = require('fs');

// fs.unlink("./images/postagens/5312.jpg");
fs.unlink("./public/images/postagens/5312.jpg", (err) => {
    if (err) {
        console.log("failed to delete local image:"+err);
    } else {
        console.log('successfully deleted local image');                                
    }
});