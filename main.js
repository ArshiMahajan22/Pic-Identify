Webcam.set({
    width: 350,
    height: 300,
    img_format: "png",
    png_quality: 90,
    constraints: {facing_mode: "environment"}
});
Webcam.attach('#Camera');

function TakePic(){
    Webcam.snap(function(Data_URI){
        document.getElementById("Photo").innerHTML = '<img id="snapshot" src="'+Data_URI+'"/>';
    });
}

console.log('ML5 Version', ml5.version);

classifier = ml5.imageClassifier('MobileNet', modelLoaded);
function modelLoaded(){
    console.log("model loaded");
}

function Identify(){
    Img = document.getElementById("snapshot");
    classifier.classify(Img, Result);
}

function Result(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("Guess").innerHTML = results[0].label;
    }
}