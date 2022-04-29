function preload(){

}
function setup(){
canvas= createCanvas(500,400)
canvas.position( 770, 380)
video = createCapture(VIDEO)
video.hide()

poseNet = ml5.poseNet(video, modelLoded)
poseNet.on("pose", gotpose)
}
function draw(){
    image(video, 0, 0, 500, 400)
}
function snap(){
    save("Beard Man.png")
}    
function modelLoded(){
    console.log("Video is There")
}
function gotpose(r){
if(r.length > 0)
console.log(r)
console.log("posestion x =" + r[0].pose.nose.x)
console.log("posestion y =" + r[0].pose.nose.y)
}
