let imageSection = document.getElementById('main__imageSection');
let logoHeader = document.getElementById('header__logo');

let dialogRef = document.getElementById('main__dialog');
let dialogHeadline = document.getElementById('main__dialog_headline');
let dialogImages = document.getElementById('main__dialog_images');
let dialogImageNumber = document.getElementById('main__dialog_image-number');
let dialogLikeButton = document.getElementById('main__dialog_footer-like');
let dialogHeaderIcon = document.getElementById('main__dialog_header_icon');
let dialogLikeButtonLiked = document.querySelector('.main__dialog_footer-liked');
let previousButton = document.getElementById('previousButton');
let nextButton = document.getElementById('nextButton');

let mainImages = [];
let currentImage;

function renderImages() {
    setImage('./assets/lion-majestic.jpg', 'Majestätischer Löwe', 0, 'main__images', 'main__image-position100');
    setImage('./assets/tree-by-sunset.jpg', 'Sonnenuntergang am Meer', 1, 'main__images');
    setImage('./assets/malediven-waterbungalows.jpg', 'Bungalow am Meer', 2, 'main__images');
    setImage('./assets/waterfall.jpg', 'Wasserfall', 3, 'main__images');
    setImage('./assets/lake-with-hills.jpg', 'Bergsee', 4, 'main__images', 'main__image-position15');
    setImage('./assets/elephants-with-babys.jpg', 'Elefantenfamilie', 5, 'main__images', 'main__image-position80');
    setImage('./assets/big-ben-by-night.jpg', 'Big Ben bei Nacht', 6, 'main__images');
    setImage('./assets/aerialView-cliff.jpg', 'Haus am Meer', 7, 'main__images', 'main__image-position15');
    setImage('./assets/lying-cat.jpg', 'Liegende Katze', 8, 'main__images');
    setImage('./assets/ferrari-488-gtb.jpg', 'Ferrari 488 GTB', 9, 'main__images', 'main__image-position15');
    setImage('./assets/surfing-waves.jpg', 'Wellensurfer', 10, 'main__images');
    setImage('./assets/tokyo-by-night.jpg', 'Tokyo bei Nacht', 11, 'main__images');

    for (let i = 0; i < mainImages.length; i++) {
        imageSection.innerHTML += `<figure>${mainImages[i].outerHTML}</figure>`
    }
}

function setImage(path, alt, i, class1, class2) {
    let newImage = new Image();
    newImage.src = path;
    newImage.setAttribute('alt', alt);
    newImage.setAttribute('tabindex','0');
    newImage.setAttribute('onclick', 'openDialog(' + i + ')');
    newImage.classList.add(class1, class2);
    mainImages.push(newImage);
};

imageSection.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        openDialog(0);
    }
});


function openDialog(i) {
    mainImages[i].classList.remove('main__images');
    mainImages[i].classList.add('main__dialog_image');
    dialogHeadline.innerHTML = `${mainImages[i].alt}`;
    dialogImages.innerHTML = `<figure>${mainImages[i].outerHTML}</figure>`;
    dialogImageNumber.innerHTML = `${i + 1}`;
    dialogRef.showModal();
    dialogRef.classList.add('opened');
    currentImage = i;
    if (!mainImages[currentImage].classList.contains('liked')) {
        dialogLikeButton.classList.remove('main__dialog_footer-liked');
    } else {
        dialogLikeButton.classList.add('main__dialog_footer-liked');
    }
    dialogHeaderIcon.addEventListener('keyup', function(event) {
        if (event.keyCode === 13) {
            closeDialog();
        }
    });
}

function closeDialog() {
    dialogRef.close();
    dialogRef.classList.remove('opened');
    logoHeader.focus();
}

document.body.addEventListener('keyup', function(event) {
    if (event.keyCode === 37) {
        previousImage();
    }
})

previousButton.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        previousImage();
    }
})

function previousImage() {
    if (currentImage == 0) {
        currentImage = mainImages.length - 1;
    } else {
        currentImage = currentImage - 1 % mainImages.length;
    }
    dialogImages.innerHTML = `<figure>${mainImages[currentImage].outerHTML}</figure>`;
    dialogHeadline.innerHTML = `${mainImages[currentImage].alt}`;
    dialogImageNumber.innerHTML = `${currentImage + 1}`;
    openDialog(currentImage);
}

document.body.addEventListener('keyup', function(event) {
    if (event.keyCode === 39) {
        nextImage();
    }
})

nextButton.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        nextImage();
    }
})

function nextImage() {
    if (currentImage == mainImages.length - 1) {
        currentImage = mainImages.length - mainImages.length;
    } else {
        currentImage = currentImage + 1 % mainImages.length;
    }
    dialogImages.innerHTML = `<figure>${mainImages[currentImage].outerHTML}</figure>`;
    dialogHeadline.innerHTML = `${mainImages[currentImage].alt}`;
    dialogImageNumber.innerHTML = `${currentImage + 1}`;
    openDialog(currentImage);
}

dialogLikeButton.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        like();
    }
})

function like() {
    if (!mainImages[currentImage].classList.contains('liked')) {
        mainImages[currentImage].classList.add('liked');
        dialogLikeButton.classList.add('main__dialog_footer-liked');
        // dialogLikeButtonLiked.setAttribute('style', 'animation: main__dialog_keyframe-like 1s ease-in-out');
    } else {
        mainImages[currentImage].classList.remove('liked');
        dialogLikeButton.classList.remove('main__dialog_footer-liked');
        // dialogLikeButtonLiked.setAttribute('style', 'animation: none');
    }
}