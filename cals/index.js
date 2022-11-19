let input1=document.getElementById('input');


function fun(value){
  
  input1.value += value;
  
}

function allclear(){
  input1.value = null;
}

function clearone(){
  // console.log('5');
  input1.value=input1.value.slice(0,-1);
  }
  
  let equalto = document.getElementById('equalto');
equalto.addEventListener('click',function(){
  if(input1.value == null){
    input1.value = "";
  }else{
    input1.value =eval(input1.value);
  }
 
//  console.log(parseFloat(input.value))
// console.log(typeof input.value)
})

let addition =document.getElementById('addition').addEventListener('click',function(){
  
let error =input1.value. charAt(input1.value. length-1);
if(error == '+'){
  
  
  input1.value +="+";
  input1.value=input1.value.slice(0,-1);
}else{
  input1.value += "+";
}

}



)

let dot =document.getElementById('dot').addEventListener('click',function(){
  
  let error =input1.value. charAt(input1.value. length-1);
  if(error == '.'){
    
    
    input1.value +=".";
    input1.value=input1.value.slice(0,-1);
  }else{
    input1.value += ".";
  }
  }
  )
  
  let minus =document.getElementById('minus').addEventListener('click',function(){
  
    let error =input1.value. charAt(input1.value. length-1);
    if(error == '-'){
      
      
      input1.value +="-";
      input1.value=input1.value.slice(0,-1);
    }else{
      input1.value += "-";
    }
    
    }
    )
    

    let multiply =document.getElementById('multiply').addEventListener('click',function(){
  
      let error =input1.value. charAt(input1.value. length-1);
      if(error == '*'){
        
        
        input1.value += "*";
        input1.value=input1.value.slice(0,-1);
      }else{
        input1.value += "*";
      }
      
      }
      
      
      
      )
      
      let divide =document.getElementById('divide').addEventListener('click',function(){
  
        let error =input1.value. charAt(input1.value. length-1);
        if(error == '/'){
          
          
          input1.value +="/";
          input1.value=input1.value.slice(0,-1);
        }else{
          input1.value += "/";
        }
        
        }
        
        
        
        )
        

        let remainder =document.getElementById('remainder').addEventListener('click',function(){
  
          let error =input1.value. charAt(input1.value. length-1);
          if(error == '%'){
            
            
            input1.value +="%";
            input1.value=input1.value.slice(0,-1);
          }else{
            input1.value += "%";
          }
          
          }
          
          
          
          )