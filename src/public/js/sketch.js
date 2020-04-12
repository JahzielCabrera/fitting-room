let video;
let poseNet;
let pose;
let img;


function preload(){
    img = loadImage("img/sudadera.PNG");
}

function setup(){
    var canvas = createCanvas(640, 480);
    canvas.parent('sketch-holder');
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function gotPoses(poses){
    console.log(poses);
    if (poses.length > 0) {
        pose = poses[0].pose;
        skeleton = poses[0].skeleton;
    }
}

function modelLoaded(){
    console.log("PoseNet is ready");
}

function draw(){
    image(video, 0, 0);

    const deltaPix = 40;

    if (pose) {
        var hDerX = pose.rightShoulder.x - deltaPix;
        var hDerY = pose.rightShoulder.y - deltaPix;
        var hIzqX = pose.leftShoulder.x + deltaPix;
        var cadDerX = pose.rightHip.x - deltaPix;
        var cadDerY = pose.rightHip.y + deltaPix;
        var ancho = hIzqX - hDerX;
        var largo = cadDerY - hDerY;
        //var ancho = pose.leftShoulder.x - pose.rightShoulder.x;
        //var largo = pose.rightHip.y - pose.rightShoulder.y;

        image(img, hDerX, hDerY, [ancho], [largo]);
    }

}
