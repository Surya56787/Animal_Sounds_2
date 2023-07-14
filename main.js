function Start(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/vCjsv1Akm/model.json", modelReady);
    }
    
    function modelReady(){
        classifier.classify(gotResults);
    }
    
    function gotResults(error, results){
        
    }