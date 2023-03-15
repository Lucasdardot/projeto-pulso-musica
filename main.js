
musica = ""
pontosPulsoDireito = 0
pontosPulsoEsquerdo= 0 

pulsoDireitoX = 0
pulsoEsquerdoY = 0 

pulsoDireitoY = 0
pulsoEsquerdoX = 0 

function setup(){

    canvas = createCanvas(600,500)
    canvas.position(400,350)
    video = createCapture(VIDEO)
    video.hide()

    posenet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose",gotPoses)
   }

   function modelLoaded(){
      console.log("Deu certo!")
   }

 function draw(){
    image(video,0,0,600,500)
 }

 function preload(){
    
    musica = loadSound("enimie.mp3")

 }

 function play(){
    musica.play()
    musica.setVolume(1)
    musica.rate(1)
 }

 function gotPoses(results){
   if(results.length > 0){
      console.log(results)
      pontosPulsoDireito = results[0].pose.keypoints[10].score
      pontosPulsoEsquerdo = results[0].pose.keypoints[9].score

      console.log("Pontos pulso direito = " + pontosPulsoDireito + " pontosPulsoEsquerdo = " + pontosPulsoEsquerdo);
      pulsoDireitoX = results[0].pose.rightWrist.x
      pulsoDireitoY = results[0].pose.rightWrist.y

      console.log("pulsoDireitoX = " + pulsoDireitoX + " pulsoDireitoY = " + pulsoDireitoY);

      pulsoEsquerdoX = results[0].pose.leftWrist.x
      pulsoEsquerdoY = results[0].pose.leftWrist.y

      console.log("pulsoEsquerdoX = " + pulsoEsquerdoX + " pulsoEsquerdoY = " + pulsoEsquerdoY);
   }
 }
