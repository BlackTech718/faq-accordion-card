
var qblock = document.getElementsByClassName("quest") //main variable. 


// First Question
qblock[0].children[0].children[0].addEventListener('click',function(){
    var firstquest = qblock[0].children[0].style;
    var firstanswer = qblock[0].children[1].style;
    var arrow = qblock[0].children[0].children[0].style
    /* setting variables for the arrows of other children of the qblock
        Also adding if condition as test only *will move to original statements 
        to close all open qblock answer elements if open */
        var qblockanswer2 = qblock[1].children[1].style
        var qblockanswer3 = qblock[2].children[1].style
        var qblockanswer4 = qblock[3].children[1].style
        var qblockanswer5 = qblock[4].children[1].style
        if(qblockanswer2.display === "block" || qblockanswer3.display === "block" || qblockanswer4.display === "block" || qblockanswer5.display === "block"){
            qblockanswer2.display = "none"
            qblockanswer3.display = "none"
            qblockanswer4.display = "none"
            qblockanswer5.display = "none"
        };
        // End of Test Code Above

    if(firstanswer.display === "block"){
        firstanswer.display = "none";
        firstquest.fontWeight = "normal"
        arrow.transform = "none";
    }else{
        firstanswer.display = "block";
        // firstanswer.transition = "all 3s";
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