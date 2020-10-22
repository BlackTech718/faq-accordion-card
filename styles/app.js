var qblock = document.getElementsByClassName("question"); //variable/variable  non literal.
var i,x;
var answers = document.getElementsByClassName("answer");



for(i = 0; i< qblock.length; i++){
    qblock[i].addEventListener("click",function(){
        

        for(i = 0 ; i< qblock.length; i++){
            qblock[i].children[0].classList.remove("question_bold");
            qblock[i].children[1].classList.remove("arrow");
            qblock[i].children[2].classList.remove("answer_show");  
        };
            this.children[0].classList.add("question_bold"); //heavy font
            this.children[1].classList.add("arrow"); //arrow down
            this.children[2].classList.add("answer_show"); //show answer  
    });
};



// function opencheck(){
//     var x;
//     var qblock = document.getElementsByClassName("question"); //variable/variable  non literal.
//     var answers = document.getElementsByClassName("answer")
//     for(x=0; i< answers.length; i++){
//         qblock[x].addEventListener("click", function(){
//             if (answers[x].style.display === "block"){
//                 answers[x].style.display = "none";
//             }else{
//                 answers[x].display = "block";
//             }
//         })
//     }

// }

    
  
















// arrow.addEventListener("click", function(){
//     var ocheck = qblock[2].children[2].style
//     arrow.style.transform = "rotate(360deg)";
//     qblock[0].children[0].classList.add("question_bold");
//     qblock[0].children[2].style.display = "block";
//     ocheck.display = "block";
// })
// qblock[0].children[0].classList.remove
