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

    window.onload = () => {
        masonry.layout();
        masonry2.layout();
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
    AnimBtn.style.color = "#e74d83";
    DesignBtn.style.color ="#fff";
    DesignGrid.style.display="none";
    AnimGrid.style.display="flex";
    masonry.layout();


};
DesignBtn.onclick = function(event){
    DesignBtn.style.color="#e74d83";
    AnimBtn.style.color="#fff";
    AnimGrid.style.display="none";
    DesignGrid.style.display="flex";
    masonry2.layout();


};

AnimBtn.onmouseover = function(event){
//     // AnimBtn.style.textShadow ="0 0 2px #fff";
//     // AnimBtn.style.textShadow ="0 0 10px #e74d83";
//     // AnimBtn.style.textShadow ="0 0 21px #e74d83";
//     // AnimBtn.style.textShadow ="0 0 42px #e74d83";
//     // AnimBtn.style.textShadow ="0 0 82px #e74d83";
//     // AnimBtn.style.textShadow ="0 0 92px #e74d8";
//     // AnimBtn.style.textShadow ="0 0 102px #e74d83";
//     AnimBtn.style.textShadow ="0 0 151px #83173d";
}