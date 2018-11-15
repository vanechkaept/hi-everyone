

// $("button").on("click",function(){
//     var val1;
//     val1=$("#first").val();
//     val1=parseFloat(val1);
    
//     $("div.firstdel").remove();
  
//   alert("ddd");
//   $("#res").html(val1);

// });



var tempOut, prNum, newP=0 ;

prNum = Math.floor((Math.random()*100) + 1);
tempOut= document.getElementById("temp-out");
tempOut.innerHTML= "Загаданное число: " +prNum;







function out(){
    var num,  res,  text,p, val ;

    p= document.getElementById("go");
    p.innerHTML  ="Попытка "+ newP;  
    newP += 1;


    

    

    // p= document.getElementById("res");
    // p.innerHTML += "<b> hi</b> ";
    // на место div.res ставит строчку hello
    

    num =document.getElementById("second").value;
    res=  document.getElementById("res");
    // res.innerHTML= num;

   val = document.getElementById("val");
   val.innerHTML += " " + num;


    // text = document.getElementById("text");
    if(num>100){
        alert("Вы ввели неправильное число");
        
    }

    if(num==prNum){
        res.innerHTML = "!!!Вы угадали!!!";
        alert("!! Молодец !! Ты выиграл !!")
    }else if (num > prNum){
        res.innerHTML = "Вы переборщили";
    }else{
        res.innerHTML = "Попробуйте число побольше ";
    }
    
    if(newP>10){
        // break;
      alert("Игра закончена");
               
    }

}

