var infomation = "hello people";


console.log("hello"); //in console tab on site

//alert("greetings " + infomation); //pop up

//variable is to store infomation
//let vs. var

document.write("<p>" + infomation + "</p>"); //this to write in the document

var atributes = ["Blue", "Green", "Yellow"]; //how to make array is var brakets, counting from 0

console.log(atributes[1]); //printing on console what [number = the color of choice from 0-2 - blue to yellow]

// confused: document.getElementById("box1").write(atributes[2]);

var myMSG = document.getElementsByClassName('msg'); //singel and double quotations doesnmat mater until quote in quote



for(var i = 0; i< atributes.length; i++){  //i for index, a local var in this case
    console.log(atributes[i]);
    //document.write("<p>" + atributes[i] + "</p>"); //local var is i
   
    for(var i = 0; i< myMSG.length; i++){
        myMSG[i].innerHTML = atributes[i]; //innerHTML is what to put in html
    }
}

