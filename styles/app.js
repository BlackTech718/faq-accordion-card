var qblock = document.getElementsByClassName("question"); //variable/variable  non literal.
var i,x;
var answers = document.getElementsByClassName("answer");

for(i = 0; i< qblock.length; i++){
    qblock[i].addEventListener("click",function(){
        // for(i = 0 ; i< qblock.length; i++){
        //     qblock[i].classList.remove("open");
        //     qblock[i].children[0].classList.remove("boldf");
        //     qblock[i].children[1].classList.remove("arrowUp");
        // }; 
        // debugger
        if(this.classList.contains("open")){
            //  for(i = 0 ; i< qblock.length; i++){
                this.classList.remove("open");
                // this.children[0].classList.remove("boldf");
                // this.children[1].classList.remove("arrowUp");
        // }; 

        }else{
            for(i = 0; i < qblock.length; i++){
                qblock[i].classList.remove("open");
            }
            this.classList.add("open");
            // this.children[0].classList.add("boldf");
            // this.children[1].classList.add("arrowUp");
        }
    });
};
