var qblock = document.getElementsByClassName("question"); //variable/variable  non literal.
var i;
var answers = document.getElementsByClassName("answer");

for(i = 0; i< qblock.length; i++){
    

    qblock[i].addEventListener("click",function(){
        if(this.classList.contains("open")){
                this.classList.remove("open");
        }else{
            for(i = 0; i < qblock.length; i++){
                qblock[i].classList.remove("open");
            }
            this.classList.add("open");
        }
    });


};
