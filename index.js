var ctx,
    width,
    height;

function canvas_generator() {
    // creer l'élement
    let canvas = document.createElement("canvas");
    ctx = canvas.getContext("2d");
    canvas.addEventListener('click', (event) => {
        let elemLeft = canvas.offsetLeft,
            elemTop = canvas.offsetTop;
        let xClick = event.pageX - elemLeft,
            yClick = event.pageY - elemTop;
            console.log(xClick + '//' + yClick);
        if(xClick > 640 && yClick > 315 && xClick < 690 && yClick < 440){ console.log("WIN")
        draw_images("images/victory.png");
    }
    });
    //configurer le canvas
    //changer hauter/largeur
    canvas.setAttribute("id", "canvas");
    canvas.setAttribute("width", 800);
    canvas.setAttribute("height", 800);

    //ajouter l'élement à la page
    // c va etre un enfant de "Game"
    document.getElementById("game").appendChild(canvas)
    return "ok";
}


function draw_images(image_id) {
    let my_image = new Image(800, 800);
    my_image.src = image_id;

    my_image.onload = () => {
        ctx.drawImage(my_image, 0, 0, 800, 800);
    }

}


function load_imgs() {
    draw_images("images/background.jpg");
}

function start() {
    canvas_generator();
    load_imgs();   
}

start();
