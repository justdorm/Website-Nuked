import Masonry from "masonry-layout";


window.onload = () => {
    const grid = document.querySelector('.anim-grid');
    
    const masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
    });

}