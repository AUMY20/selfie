var speech_to_text = window.webkitSpeechRecognition;
var speech = new speech_to_text();

function takeselfie()
{
    document.getElementById("text_selfie").innerHTML = " ";
    speech.start();

}

speech.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("text_selfie").innerHTML =content;
    if(content == "take my selfie"){
        console.log(content);
        speak(); 
    }
    
}

Webcam.set({
    width:500,
    height:300,
    image_format:'png',
    png_quality:100
});

camera = document.getElementById("camera");

function speak()
{
    synth = window.speechSynthesis;
    speak_data = "Taking selfie in five seconds";
    speak_utter = new SpeechSynthesisUtterance(speak_data);
    synth.speak(speak_utter);
    Webcam.attach(camera);
setTimeout(function() { selfie(); save(); }, 5000);

}
function selfie()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='img_selfie' src='"+data_uri+"'/>";
    });
}
function save()
{
    link = document.getElementById("link");
    image = document.getElementById("img_selfie").src;
    link.href=image;
    link.click();
}