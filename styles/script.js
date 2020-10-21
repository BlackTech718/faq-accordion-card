document.getElementById("down_arrow").onclick = function() {  
    fun();  
    };  
    function fun() { 
        var answer = document.getElementById("answer"); 
        var downarrow = document.getElementById("down_arrow");
        var question = document.getElementById("question");

        if(answer.style.display === "block"){
            answer.style.display = "none";
            question.style.fontWeight = "normal"
            downarrow.style.transform = "none";       
        }else{
            answer.style.display = "block";
            question.style.fontWeight = "700";
            downarrow.style.transform = "rotate(180deg)";
        }
    };


document.getElementById("down_arrow1").onclick = function() {  
    fun1();  
    };  
    function fun1() { 
        var answer1 = document.getElementById("answer1"); 
        var downarrow1 = document.getElementById("down_arrow1");
        var question1 = document.getElementById("question1");

        if(answer1.style.display === "block"){
            answer1.style.display = "none";
            question1.style.fontWeight = "normal"
            downarrow1.style.transform = "none"       
        }else{
            answer1.style.display = "block";
            question1.style.fontWeight = "700";
            downarrow1.style.transform = "rotate(180deg)";
        } 
    
    };


document.getElementById("down_arrow2").onclick = function() {  
    fun2();  
    };  
    function fun2() {  
        var answer2 = document.getElementById("answer2"); 
        var downarrow2 = document.getElementById("down_arrow2");
        var question2 = document.getElementById("question2");

        if(answer2.style.display === "block"){
            answer2.style.display = "none";
            question2.style.fontWeight = "normal"; 
            downarrow2.style.transform = "none";      
        }else{
            answer2.style.display = "block";
            question2.style.fontWeight = "700";
            downarrow2.style.transform = "rotate(180deg)";
        }   
    };


document.getElementById("down_arrow3").onclick = function() {  
    fun3();  
    };  
    function fun3() {  
        var answer3 = document.getElementById("answer3"); 
        var downarrow3 = document.getElementById("down_arrow3");
        var question3 = document.getElementById("question3");

        if(answer3.style.display === "block"){
            answer3.style.display = "none";
            question3.style.fontWeight = "normal"; 
            downarrow3.style.transform = "none";      
        }else{
            answer3.style.display = "block";
            question3.style.fontWeight = "700";
            downarrow3.style.transform = "rotate(180deg)";
        }   
    };


document.getElementById("down_arrow4").onclick = function() {  
    fun4();  
    };  
    function fun4() {  
        var answer4 = document.getElementById("answer4"); 
        var downarrow4 = document.getElementById("down_arrow4");
        var question4 = document.getElementById("question4");

        if(answer4.style.display === "block"){
            answer4.style.display = "none";
            question4.style.fontWeight = "normal"; 
            downarrow4.style.transform = "none";      
        }else{
            answer4.style.display = "block";
            question4.style.fontWeight = "700";
            downarrow4.style.transform = "rotate(180deg)";
        }      
    };