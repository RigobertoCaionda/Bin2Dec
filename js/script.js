function converter(){
	var num = document.getElementById("numBinario").value;
	var sum = 0;
	var i = 0;
	var resultado = document.getElementById("resDecimal");
	if(num!="" && verificarBinario()){
		while(num){
		sum = sum+Math.pow(2,i)*(num%10);
		i++;
		num = parseInt(num/10);
	}
	resultado.value=sum;
	}else{
	alert("O campo esta vazio ou vc nao digitou um numero binario!");
}
}

function verificarBinario(){
	var binario = document.getElementById("numBinario").value;//para pegar o valor
	binario.split("");
	var bin = new Array();
	bin= binario;
	for(var i=0; i<binario.length;i++){
		if(bin[i] ==0 || bin[i] ==1){
			
		}else{
			return false;
		}
	}
	return true;
}
