img = "";
status = "";
person = [];
object = [];
audio = "audio.wav";

function preLoad()
{
    video = loadVideo("audio.wav");
}

function draw()
{
    if(person = "detected")
    {
        text("Baby Detected");
        audio = false;
    }
    else
    {
        text("Baby Not Detected");
        audio.play();
    }

    if(object <= 0)
    {
        text("Baby Not Detected");
        audio.play();
    }
}

function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480, 380);
    video.hide();
}

function start()
{
    objetDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(video, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
    objects = results;
}