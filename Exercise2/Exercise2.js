function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("1.jpg")) {
        image.src = "2.jpg";
    }
    else if(image.src.match("2.jpg")) {
    image.src = "3.jpg";
    }
    else if(image.src.match("3.jpg")) {
               image.src = "4.jpg";
    }
    else if(image.src.match("4.jpg")) {
               image.src = "5.jpg";
    }
    else
    {
        image.src = "1.jpg";
    }
}
function changeImage2() {
    var image = document.getElementById('myImage');
    if (image.src.match("1.jpg")) {
        image.src = "5.jpg";
    }
    else if(image.src.match("2.jpg")) {
    image.src = "1.jpg";
    }
    else if(image.src.match("3.jpg")) {
               image.src = "2.jpg";
    }
    else if(image.src.match("4.jpg")) {
               image.src = "3.jpg";
    }
    else
    {
        image.src = "4.jpg";
    }
}
