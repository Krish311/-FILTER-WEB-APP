hornX=0;
hornY=0;
function preload() {
Abyssal_horn = loadImage('https://i.postimg.cc/X7pXFGxk/Abyssal-Horns.webp');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet Is Initialized');
}


function draw() {
    image(video, 0, 0, 300, 300)
    circle(hornX, hornY, 20);
    image(Abyssal_horn, hornX, noseY, 30, 30);
}
function take_snapshot() {
    save('myFilterImage.png');
}

function gotPoses(results) 
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.horn.x-15; 
        noseY = results[0].pose.horn.y-15;

    }
}