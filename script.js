function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
}

function setup(){
    canvas = createCanvas(400, 340);
    background("white");
    canvas.position(472,300);
    canvas.mouseReleased(classifyCanvas);
}

function classifyCanvas(){
    classifier.classify(canvas,gotResult);
}

function draw(){
    strokeWeight(6);
    stroke("black");
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function gotResult(error,result){
    if(error){
        console.log(error)
    }
    else{
        console.log(result);
        document.getElementById("Lspan").innerHTML = result[0].label;
        document.getElementById("Cspan").innerHTML = result[0].confidence;
    }
}