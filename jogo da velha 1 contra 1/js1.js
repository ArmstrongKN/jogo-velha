 function calcular()
{
let b1 = document.getElementById ("j1").value;
let b2 = document.getElementById ("j2").value;
let b3 = document.getElementById ("j3").value;
let b4 = document.getElementById ("j4").value;
let b5 = document.getElementById ("j5").value;
let b6 = document.getElementById ("j6").value;
let b7 = document.getElementById ("j7").value;
let b8 = document.getElementById ("j8").value;
let b9 = document.getElementById ("j9").value;
  let  c = [
      [b1,b2,b3],
      [b4,b5,b6],
      [b7,b8,b9],
      [b1,b4,b7],
      [b2,b5,b8],
      [b3,b6,b9],
      [b1,b5,b9],
      [b3,b5,b7]
];
    let g = ["X","O"];
    let jogador = "X";
 
 
          if(b1 != "X" && b1 != "O") 
   { 
          document.getElementById("j1").value = "";
          document.getElementById("cxteste").value = "Dg O ou X";
          document.getElementById("j1").focus(); 
   }  

          else if(b1 == "X" && b1 == "O") 
   {
          document.getElementById("j1").disabled="true";
          document.getElementById("cxteste").value = "";
   }

          if(b2 != "X" && b2 != "O")
   { 
          document.getElementById("j2").value = "";
          document.getElementById("cxteste").value = "Dg o ou X";
          document.getElementById("j2").focus();
   }  

          else if(b2 == "X" && b2 == "O" )
   {
          document.getElementById("j2").disabled="true";
          document.getElementById("cxteste").value = "";
   }
          if(b3 != "X" && b3 != "O") 
   {
          document.getElementById("j3").value = "";
          document.getElementById("cxteste").value = "Dg o ou X";
          document.getElementById("j3");j3.focus(); 
   }  

          else if(b3 == "X" && b3 == "O" )
   {
          document.getElementById("j3").disabled="true";
          document.getElementById("cxteste").value = "";
   } 

          if(b4 != "X" && b4 != "O") 
   {
          document.getElementById("j4").value = "";
          document.getElementById("cxteste").value = "Dg o ou X";
          document.getElementById("j4");j4.focus(); 
   }  

          else if(b4 == "X" && b4 == "O" )
   {
          document.getElementById("j4").disabled="true";
          document.getElementById("cxteste").value = "";
   } 

        if(b5 != "X" && b5 != "O") 
   {
          document.getElementById("j5").value = "";
          document.getElementById("cxteste").value = "Dg O ou X";
          document.getElementById("j5");j5focus(); 
   }  

       else if(b5 == "X" && b5 == "O" )
   {
          document.getElementById("j5").disabled="true";
          document.getElementById("cxteste").value = "";
   }

       if(b6 != "X" && b6 != "O") 
   { 
          document.getElementById("j6").value = "";
          document.getElementById("cxteste").value = "Dg O ou X";
          document.getElementById("j6");j6.focus(); 
   }  

       else if(b6 == "X" && b6 == "O" )
   {
          document.getElementById("j6").disabled="true";
          document.getElementById("cxteste").value = "";
   }

       if(b7 != "X" && b7 != "O") 
   {
          document.getElementById("j7").value = "";
          document.getElementById("cxteste").value = "Dg O ou X";
          document.getElementById("j7");j7.focus(); 
   }  

       else if(b7 == "X" && b7 == "O" )
   {
          document.getElementById("j7").disabled="true";
          document.getElementById("cxteste").value = "";
   }

       if(b8 != "X" && b8 != "O") 
   {
          document.getElementById("j8").value = "";
          document.getElementById("cxteste").value = "Dg O ou X";
          document.getElementById("j8");j8.focus(); 
   }   

       else if(b8 == "X" && b8 == "O" )
   {
          document.getElementById("j8").disabled="true";
          document.getElementById("cxteste").value = "";
   } 

       if(b9 != "X" && b9 != "O") 
   {
          document.getElementById("j9").value = "";
          document.getElementById("cxteste").value = "Dg O ou X";
          document.getElementById("j9");j9.focus(); 
   }  
       else if(b9 == "X" && b9 == "O" )
   {
          document.getElementById("j9").disabled="true";
          document.getElementById("cxteste").value = "";
   } 



  
  if (c[0][0] == g[0,0] && c[0][1] == g[0,0] && c[0][2] == g[0,0] || c[1][0] == g[0,0] && c[1][1] == g[0,0] && c[1][2] == g[0,0]  || c[2][0] == g[0,0] && c[2][1] == g[0,0] && c[2][2] == g[0,0] ){
     document.write('X  ganhou');
  }else
  if (c[3][0] == g[0,0] && c[3][1] == g[0,0] && c[3][2] == g[0,0]  || c[4][0] == g[0,0] && c[4][1] == g[0,0] && c[4][2] == g[0,0]  || c[5][0] == g[0,0] && c[5][1] == g[0,0] && c[5][2] == g[0,0]) {
     document.write('X  ganhou')
  }else
  if (c[6][0] == g[0,0] && c[6][1] == g[0,0] && c[6][2] == g[0,0]  || c[7][0] == g[0,0] && c[7][1] == g[0,0] && c[7][2] == g[0,0]) {
     document.write('X  ganhou')
  }else
  if (c[0][0] == g[0,1] && c[0][1] == g[0,1] && c[0][2] == g[0,1] || c[1][0] == g[0,1] && c[1][1] == g[0,1] && c[1][2] == g[0,1]  || c[2][0] == g[0,1] && c[2][1] == g[0,1] && c[2][2] == g[0,1]) {
     document.write('O   ganhou')
  }else
  if (c[3][0] == g[0,1] && c[3][1] == g[0,1] && c[3][2] == g[0,1]  || c[4][0] == g[0,1] && c[4][1] == g[0,1] && c[4][2] == g[0,1]  || c[5][0] == g[0,1] && c[5][1] == g[0,1] && c[5][2] == g[0,1]) {
     document.write('O   ganhou')
  }else
  if ( c[6][0] == g[0,1] && c[6][1] == g[0,1] && c[6][2] == g[0,1]  || c[7][0] == g[0,1] && c[7][1] == g[0,1] && c[7][2] == g[0,1]) {
     document.write('O   ganhou' ) 
  }
}
 

function limpar(){
       document.getElementById("cxteste").value = "";
}
 




//   if(b1 && b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9);
//   {   
//        document.write('EMPATE')
//    }
 
 
     
//    if(b2 != "")
//     {
//         document.getElementById("j2").disabled="true";
//     }
//    if(b3 != "")
//     {
//         document.getElementById("j3").disabled="true";
//     }
//    if(b4 != "")
//     {
//         document.getElementById("j4").disabled="true";
//     }
//    if(b5 != "")
//     {
//         document.getElementById("j5").disabled="true";
//     }
//    if(b6 != "")
//     {
//         document.getElementById("j6").disabled="true";
//     }
//    if(b7 != "")
//     {
//         document.getElementById("j7").disabled="true";
//     }
//    if(b8 != "")
//     {
//         document.getElementById("j8").disabled="true";
//     }
//    if(b9 != "")
//     {
//         document.getElementById("j9").disabled="true";
//     }
    
   
 

 
  
//   if (!isValidInput(b1) || !isValidInput(b2) || !isValidInput(b3) || !isValidInput(b4) || !isValidInput(b5) || !isValidInput(b6) || !isValidInput(b7) || !isValidInput(b8) || !isValidInput(b9)) {
//     alert("Por favor, insira apenas 'x' ou 'o' nos campos!");
//     return;  
    
// let b = [];
// for (let i = 1; i <= 9; i++) {
//   let valor = document.getElementById("j" + i).value;
//   if (valor !== "x" && valor !== "o") {
//     alert("Por favor, insira apenas 'x' ou 'o'");
//     return;
//   }
//   b.push(valor);
//   }