
var qblock = document.getElementsByClassName("quest") //main variable. 

// First Question
qblock[0].children[0].children[0].addEventListener('click',function(){
    var firstquest = qblock[0].children[0].style;
    var firstanswer = qblock[0].children[1].style;
    var arrow = qblock[0].children[0].children[0].style
    if(firstanswer.display === "block"){
        firstanswer.display = "none";
        firstquest.fontWeight = "normal"
        arrow.transform = "none";
    }else{
        firstanswer.display = "block";
        firstquest.fontWeight = "700";
        arrow.transform = "rotate(180deg)";
    }
})
// Second Question
qblock[1].children[0].children[0].addEventListener('click',function(){
    var firstquest = qblock[1].children[0].style;
    var firstanswer = qblock[1].children[1].style;
    var arrow = qblock[1].children[0].children[0].style
    if(firstanswer.display === "block"){
        firstanswer.display = "none";
        firstquest.fontWeight = "normal"
        arrow.transform = "none";
    }else{
        firstanswer.display = "block";
        firstquest.fontWeight = "700";
        arrow.transform = "rotate(180deg)";
    }
})
// Third Question
qblock[2].children[0].children[0].addEventListener('click',function(){
    var firstquest = qblock[2].children[0].style;
    var firstanswer = qblock[2].children[1].style;
    var arrow = qblock[2].children[0].children[0].style
    if(firstanswer.display === "block"){
        firstanswer.display = "none";
        firstquest.fontWeight = "normal"
        arrow.transform = "none";
    }else{
        firstanswer.display = "block";
        firstquest.fontWeight = "700";
        arrow.transform = "rotate(180deg)";
    }
})
// Fourth Question
qblock[3].children[0].children[0].addEventListener('click',function(){
    var firstquest = qblock[3].children[0].style;
    var firstanswer = qblock[3].children[1].style;
    var arrow = qblock[3].children[0].children[0].style
    if(firstanswer.display === "block"){
        firstanswer.display = "none";
        firstquest.fontWeight = "normal"
        arrow.transform = "none";
    }else{
        firstanswer.display = "block";
        firstquest.fontWeight = "700";
        arrow.transform = "rotate(180deg)";
    }
})
// Fifth Question
qblock[4].children[0].children[0].addEventListener('click',function(){
    var firstquest = qblock[4].children[0].style;
    var firstanswer = qblock[4].children[1].style;
    var arrow = qblock[4].children[0].children[0].style
    if(firstanswer.display === "block"){
        firstanswer.display = "none";
        firstquest.fontWeight = "normal"
        arrow.transform = "none";
    }else{
        firstanswer.display = "block";
        firstquest.fontWeight = "700";
        arrow.transform = "rotate(180deg)";
    }
})