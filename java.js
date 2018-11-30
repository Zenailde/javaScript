function Calculadora(){
    var n1 = document.getElementById("valor1").value;
    var n2 =  document.getElementById("valor2").value;
    var op = document.getElementById("op").value;
    
	function somar(){
		 alert(parseFloat(n1) + parseFloat(n2));
	}
	
	function subtrair(){
		 alert(parseFloat(n1) - parseFloat(n2));
	}
	
	function multiplicar(){
		 alert(parseFloat(n1) * parseFloat(n2));
	}
	
	function dividir(){
		 alert(parseFloat(n1) / parseFloat(n2));
	}
	
	
    if(op=="somar"){
        somar();
		
    }else if(op=="subtrair"){
		subtrair();
		
       
    }else if(op=="multiplicar"){
             multiplicar();
          
    }else
        dividir();
}
