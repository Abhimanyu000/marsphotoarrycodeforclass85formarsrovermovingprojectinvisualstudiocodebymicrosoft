canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

marsphotoarrycodeforclass85formarsrovermovingprojectinvisualstudiocodebymicrosoft=["MARS1.jpg", "MARS2.jpg", "MARS3.jpg", "MARS4.jpg"];

randomnumber=Math.floor(Math.random()*4);



rover_width=100;

rover_height=90;

rover_x=230;

rover_y=500;

background_image=marsphotoarrycodeforclass85formarsrovermovingprojectinvisualstudiocodebymicrosoft[randomnumber];
console.log("background_image="+background_image);

rover_image="rover.png";

function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadBackground;
    background_imgtag.src=background_image;
     
    rover_imgtag=new Image();
    rover_imgtag.onload=uploadRover;
    rover_imgtag.src=rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgtag, rover_x, rover_y, rover_width, rover_width);
}

window.addEventListener("keydown", mykeydownformovingroverdown);

function mykeydownformovingroverdown(e){
    keypress=e.keyCode;
    console.log(keypress);
    if (keypress=="38"){
        up();
        console.log("up");
    }
    
    if (keypress=="40"){
        down();
        console.log("down");
    }

    if (keypress=="37"){
        left();
        console.log("left");
    }

    if (keypress=="39"){
        right();
        console.log("right");
    }
}

function up(){
    if (rover_y>=0){
        rover_y=rover_y-10;
        console.log("UP PRESSED. x="+rover_x+", y="+rover_y);
        uploadBackground();
        uploadRover();
    }
};

function down(){
    if (rover_y<=500){
        rover_y=rover_y+10;
        console.log("DOWN PRESSED. x="+rover_x+", y="+rover_y);
        uploadBackground();
        uploadRover();
    }
};

function left(){
    if (rover_x>=0){
        rover_x=rover_x-10;
        console.log("LEFT PRESSED. x="+rover_x+", y="+rover_y);
        uploadBackground();
        uploadRover();
    }
};

function right(){
    if (rover_x<=700){
        rover_x=rover_x+10;
        console.log("RIGHT PRESSED. x="+rover_x+", y="+rover_y);
        uploadBackground();
        uploadRover();
    }
};