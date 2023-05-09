

    window.onload = () => {
        var grid = document.querySelector('#anim-grid');
        var grid2 = document.querySelector('#design-grid');
        
        var masonry2 = new Masonry(grid2, {
            itemSelector: '.grid-item',
            // percentPosition: true,
            fitWidth: true,
            columnWidth: 200,
            gutter: 5
        });
        
        var masonry = new Masonry(grid, {
            itemSelector: '.grid-item',
            // percentPosition: true,
            fitWidth: true,
            columnWidth: 200,
            gutter: 5
        });
    }
 

    // var grid2 = document.querySelector('#design-grid');
    
    // var masonry2 = new Masonry(grid2, {
    //     itemSelector: '.grid-item2',
    // });


var AnimGrid = document.getElementById("anim-grid");
var DesignGrid = document.getElementById("design-grid");

var AnimBtn = document.getElementById("anim-btn");
var DesignBtn = document.getElementById("design-btn");

AnimBtn.onclick = function(event){
    DesignGrid.style.display="none";
    AnimGrid.style.display="flex";
    masonry.layout();

    AnimBtn.style.color="#e74d83";
    DesignBtn.style.color="#fff";
};
DesignBtn.onclick = function(event){
    AnimGrid.style.display="none";
    DesignGrid.style.display="flex";
    masonry2.layout();

    DesignBtn.style.color="#e74d83";
    AnimBtn.style.color="#fff";
};