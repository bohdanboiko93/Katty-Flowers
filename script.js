const carousel = document.querySelector('.gallery_list');
const slide = document.querySelector('.gallery_item');

function carouselMove(positive = true) {
    const slideWidth = slide.clientWidth;
    carousel.scrollLeft = positive ? carousel.scrollLeft + slideWidth : carousel.scrollLeft - slideWidth;
}

carousel.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        e.currentTarget.scrollLeft += e.currentTarget.clientWidth;
    } else {
        e.currentTarget.scrollLeft -= e.currentTarget.clientWidth;
    }
});