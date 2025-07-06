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


/*function carouselMove(next = true) {
    const galleryList = document.querySelector('.gallery_list');
    const galleryItem = document.querySelector('.gallery_item');
    
    // Получаем ширину элемента (300px из CSS)
    const itemWidth = galleryItem.offsetWidth;
    
    // Получаем gap между элементами (8px из CSS)
    const gap = parseInt(window.getComputedStyle(galleryList).gap) || 0;
    
    // Общее расстояние для прокрутки
    const scrollDistance = itemWidth + gap;
    
    // Прокручиваем вперед или назад
    galleryList.scrollBy({
      left: next ? scrollDistance : -scrollDistance,
      behavior: 'smooth'
    });
  }*/