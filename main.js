let main__imageSection = document.getElementById('main__imageSection');
let header__logo = document.getElementById('header__logo');

let dialogRef = document.getElementById('main__dialog');
let main__dialog_headline = document.getElementById('main__dialog_headline');
let main__dialog_images = document.getElementById('main__dialog_images');
let main__dialog_image_number = document.getElementById('main__dialog_image-number');
let main__dialog_footer_like = document.getElementById('main__dialog_footer-like');
let main__images_wacg = document.querySelector('.main__images');
let main__dialog_header_icon = document.getElementById('main__dialog_header_icon');
let previousButton = document.getElementById('previousButton');
let nextButton = document.getElementById('nextButton');

let main__images = [];
let currentImage;

function renderImages() {
    let main__image_lion = new Image();
    main__image_lion.src = './assets/lion-majestic.jpg';
    main__image_lion.setAttribute('class', 'main__images main__image-position100');
    main__image_lion.setAttribute('alt', 'Majestätischer Löwe');
    main__image_lion.setAttribute('tabindex', '0');
    main__image_lion.setAttribute('onclick', 'openDialog(0)');
    main__images.push(main__image_lion);

    let main__image_tree_by_sunset = new Image();
    main__image_tree_by_sunset.src = './assets/tree-by-sunset.jpg';
    main__image_tree_by_sunset.setAttribute('class', 'main__images');
    main__image_tree_by_sunset.setAttribute('alt', 'Sonnenuntergang am Meer');
    main__image_tree_by_sunset.setAttribute('tabindex', '0');
    main__image_tree_by_sunset.setAttribute('onclick', 'openDialog(1)');
    main__images.push(main__image_tree_by_sunset);

    let main__image_waterbungalows = new Image();
    main__image_waterbungalows.src = './assets/malediven-waterbungalows.jpg';
    main__image_waterbungalows.setAttribute('class', 'main__images');
    main__image_waterbungalows.setAttribute('alt', 'Bungalow am Meer');
    main__image_waterbungalows.setAttribute('tabindex', '0');
    main__image_waterbungalows.setAttribute('onclick', 'openDialog(2)');
    main__images.push(main__image_waterbungalows);

    let main__image_waterfall = new Image();
    main__image_waterfall.src = './assets/waterfall.jpg';
    main__image_waterfall.setAttribute('class', 'main__images');
    main__image_waterfall.setAttribute('alt', 'Wasserfall');
    main__image_waterfall.setAttribute('tabindex', '0');
    main__image_waterfall.setAttribute('onclick', 'openDialog(3)');
    main__images.push(main__image_waterfall);

    let main__image_lake_hills = new Image();
    main__image_lake_hills.src = './assets/lake-with-hills.jpg';
    main__image_lake_hills.setAttribute('class', 'main__images main__image-position15');
    main__image_lake_hills.setAttribute('alt', 'Bergsee');
    main__image_lake_hills.setAttribute('tabindex', '0');
    main__image_lake_hills.setAttribute('onclick', 'openDialog(4)');
    main__images.push(main__image_lake_hills);

    let main__image_elephants = new Image();
    main__image_elephants.src = './assets/elephants-with-babys.jpg';
    main__image_elephants.setAttribute('class', 'main__images main__image-position80');
    main__image_elephants.setAttribute('alt', 'Elefantenfamilie');
    main__image_elephants.setAttribute('tabindex', '0');
    main__image_elephants.setAttribute('onclick', 'openDialog(5)');
    main__images.push(main__image_elephants);

    let main__image_big_ben = new Image();
    main__image_big_ben.src = './assets/big-ben-by-night.jpg';
    main__image_big_ben.setAttribute('class', 'main__images');
    main__image_big_ben.setAttribute('alt', 'Big Ben bei Nacht');
    main__image_big_ben.setAttribute('tabindex', '0');
    main__image_big_ben.setAttribute('onclick', 'openDialog(6)');
    main__images.push(main__image_big_ben);

    let main__image_aerial_cliff = new Image();
    main__image_aerial_cliff.src = './assets/aerialView-cliff.jpg';
    main__image_aerial_cliff.setAttribute('class', 'main__images main__image-position15');
    main__image_aerial_cliff.setAttribute('alt', 'Haus am Meer');
    main__image_aerial_cliff.setAttribute('tabindex', '0');
    main__image_aerial_cliff.setAttribute('onclick', 'openDialog(7)');
    main__images.push(main__image_aerial_cliff);

    let main__image_cat_lying = new Image();
    main__image_cat_lying.src = './assets/lying-cat.jpg';
    main__image_cat_lying.setAttribute('class', 'main__images');
    main__image_cat_lying.setAttribute('alt', 'Liegende Katze');
    main__image_cat_lying.setAttribute('tabindex', '0');
    main__image_cat_lying.setAttribute('onclick', 'openDialog(8)');
    main__images.push(main__image_cat_lying);

    let main__image_ferrari = new Image();
    main__image_ferrari.src = './assets/ferrari-488-gtb.jpg';
    main__image_ferrari.setAttribute('class', 'main__images main__image-position15');
    main__image_ferrari.setAttribute('alt', 'Ferrari 488 GTB');
    main__image_ferrari.setAttribute('tabindex', '0');
    main__image_ferrari.setAttribute('onclick', 'openDialog(9)');
    main__images.push(main__image_ferrari);

    let main__image_surfing_waves = new Image();
    main__image_surfing_waves.src = './assets/surfing-waves.jpg';
    main__image_surfing_waves.setAttribute('class', 'main__images');
    main__image_surfing_waves.setAttribute('alt', 'Wellensurfer');
    main__image_surfing_waves.setAttribute('tabindex', '0');
    main__image_surfing_waves.setAttribute('onclick', 'openDialog(10)');
    main__images.push(main__image_surfing_waves);

    let main__image_tokyo_by_night = new Image();
    main__image_tokyo_by_night.src = './assets/tokyo-by-night.jpg';
    main__image_tokyo_by_night.setAttribute('class', 'main__images');
    main__image_tokyo_by_night.setAttribute('alt', 'Tokyo bei Nacht');
    main__image_tokyo_by_night.setAttribute('tabindex', '0');
    main__image_tokyo_by_night.setAttribute('onclick', 'openDialog(11)');
    main__images.push(main__image_tokyo_by_night);

    for (let i = 0; i < main__images.length; i++) {
        main__imageSection.innerHTML += `<figure>${main__images[i].outerHTML}</figure>`
    }
}

main__imageSection.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        openDialog(0);
    }
});


function openDialog(i) {
    main__images[i].classList.remove('main__images');
    main__images[i].classList.add('main__dialog_image');
    main__dialog_headline.innerHTML = `${main__images[i].alt}`;
    main__dialog_images.innerHTML = `<figure>${main__images[i].outerHTML}</figure>`;
    main__dialog_image_number.innerHTML = `${i + 1}`;
    dialogRef.showModal();
    dialogRef.classList.add('opened');
    currentImage = i;
    if (!main__images[currentImage].classList.contains('liked')) {
        main__dialog_footer_like.classList.remove('main__dialog_footer-liked');
    } else {
        main__dialog_footer_like.classList.add('main__dialog_footer-liked');
    }
    main__dialog_header_icon.addEventListener('keyup', function(event) {
        if (event.keyCode === 13) {
            closeDialog();
        }
    });
}

function closeDialog() {
    dialogRef.close();
    dialogRef.classList.remove('opened');
    header__logo.focus();
}

document.body.addEventListener('keyup', function(event) {
    if (event.keyCode === 37) {
        previousImage();
    }
})

previousButton.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 || event.keyCode === 37) {
        previousImage();
    }
})

function previousImage() {
    if (currentImage == 0) {
        currentImage = main__images.length - 1;
    } else {
        currentImage = currentImage - 1 % main__images.length;
    }
    main__dialog_images.innerHTML = `<figure>${main__images[currentImage].outerHTML}</figure>`;
    main__dialog_headline.innerHTML = `${main__images[currentImage].alt}`;
    main__dialog_image_number.innerHTML = `${currentImage + 1}`;
    openDialog(currentImage);
}

document.body.addEventListener('keyup', function(event) {
    if (event.keyCode === 39) {
        nextImage();
    }
})

nextButton.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 || event.keyCode === 39) {
        nextImage();
    }
})

function nextImage() {
    if (currentImage == main__images.length - 1) {
        currentImage = main__images.length - main__images.length;
    } else {
        currentImage = currentImage + 1 % main__images.length;
    }
    main__dialog_images.innerHTML = `<figure>${main__images[currentImage].outerHTML}</figure>`;
    main__dialog_headline.innerHTML = `${main__images[currentImage].alt}`;
    main__dialog_image_number.innerHTML = `${currentImage + 1}`;
    openDialog(currentImage);
}

main__dialog_footer_like.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        like();
    }
})

function like() {
    if (!main__images[currentImage].classList.contains('liked')) {
        main__images[currentImage].classList.add('liked');
        main__dialog_footer_like.classList.add('main__dialog_footer-liked');
    } else {
        main__images[currentImage].classList.remove('liked');
        main__dialog_footer_like.classList.remove('main__dialog_footer-liked');
    }
}