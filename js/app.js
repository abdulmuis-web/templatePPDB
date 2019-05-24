var banyakGambar = document.getElementsByClassName('image-slide');
var imageLength = banyakGambar.length;
// console.log(banyakGambar.length);
// for (let i = 1; i <= banyakGambar.length; i++) {
//     var panjangSlider = document.getElementsByTagName('img');
// }
function showImage() {
    // var imageLength = 'image' + banyakGambar.length;            
    for (let i = 1; i <= imageLength; i++) {
        var indexImage = document.getElementById('image' + i);
        if (i > 1) {
            indexImage.className = 'hidden';
            indexImage.classList.add('image-slide');
        }
        document.getElementById('left').className = 'hidden';
    }
}
function right_image() {
    let Index = document.getElementById('image');

    for (let i = 1; i <= imageLength; i++) {
        var ImageIndex = document.getElementById('image' + i);
        console.log(ImageIndex);
        document.getElementById('left').className = 'left-arrow';
        if (ImageIndex.classList.value == 'img-active image-slide') {
            ImageIndex.className = 'hidden';
            var ShowNumberImage = i + 1;
            if (i >= imageLength - 1) {
                document.getElementById('right').className = 'hidden';
            }
        } else if (i == ShowNumberImage) {
            ImageIndex.className = 'img-active image-slide';
        }
        else {
            ImageIndex.className = 'hidden image-slide';
        }

    }
}
function left_image() {
    let Index = document.getElementById('image');
    document.getElementById('right').className = 'right-arrow';
    for (let i = imageLength; i >= 1; i--) {
        var ImageIndex = document.getElementById('image' + i);
        if (ImageIndex.classList.value == 'img-active image-slide') {
            ImageIndex.className = 'hidden image-slide';
            var ShowNumberImage = i - 1;
            if (i <= imageLength - 1) {
                document.getElementById('left').className = 'hidden';
            }
            // console.log(i);
        } else if (i == ShowNumberImage) {
            ImageIndex.className = 'img-active image-slide';
            // console.log(i);
        }
        else {
            ImageIndex.className = 'hidden image-slide';
        }
    }
}
showImage();        