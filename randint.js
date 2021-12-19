function getRndInteger() {
    // let max=document.getElementById("max").value;
    // let min=document.getElementById("min").value;

    // var randint=Math.floor(Math.random() * (max - min + 1) ) + min;
    var no=Math.floor(Math.random() * 1000);
    console.log(no);
    document.getElementById("result").innerHTML=no;

  }

  function clr(){
    document.getElementById("result").innerHTML="";
  }

  