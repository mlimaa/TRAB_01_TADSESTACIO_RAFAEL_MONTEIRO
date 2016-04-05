// SER OBRIGATORIAMENTE MAIUSCULO O CAMPO
function letrasMaiuscula(letras){
        resultado = letras.value.toUpperCase();
        letras.value = resultado;
}

function validaCheckBox( obj ){
        var loopvalidar = document.getElementsByName( obj.name );
        var cont = 0;
        for ( var i = 0; i < loopvalidar.length; i++ )// LOOP COM CONTADOR ATEH 1 - CHEGANDO A 1 ELE BLOQUEA O RESTO
 {         if ( loopvalidar[i].checked )
           cont++;
           if ( cont > 1 ){
             obj.checked = false;
             break;
    }
}
        if (!obj.checked) {
return;
    	}else	
          if(document.getElementById ("simMensagem").checked == true){
          document.getElementById("menssagemvermelha").value = 
"A qualquer momento você podera cancelar o recebimento dos e-mail's de  promoção enviando um e-mail com o assunto STOP MAIL para o endereço contato@estacio.br";
}else{
          document.getElementById("menssagemvermelha").value = " ";
}
     
}
function validaCampos(erro,df){
erro='error';	
df='padrao';
    
if (document.getElementById ("simMensagem").checked == false &&
document.getElementById("naoMensagem").checked == false){
alert ("Clique em pelo menos em uma das opções de Receber Promoções");
return false;
}

if(document.getElementById("cpf").value.length < 14){
alert('Preencha o campo CPF');
document.getElementById("cpf").focus();
return false;   
}

if(document.getElementById("nome").value.length < 3){
alert('Preencha o campo Nome');
document.getElementById("nome").focus();
return false;
}

if(document.getElementById("cidade").value.length < 3){
alert('Preencha o campo Cidade');
document.getElementById("cidade").focus();
return false;
}

if(document.getElementById("email").value.length < 10 ){
alert('Preencha o campo E-mail');
document.getElementById("email").focus();
return false;
}


if(document.getElementById("senha").value.length < 6 ){
alert('Preencha o campo Senha');
document.getElementById("senha").focus();
return false;
}


if (document.form1.sel.value==""){
   window.alert("Escolha um Sexo !");
   document.form1.sel.focus();
   return false; 
} else{
   return true;
}
}

function validaMascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout('execmascara()',1)
}
 
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
 
function mascaraCPF(v){
 
    //Remove tudo o que não é dígito
    v=v.replace(/\D/g,"")
 
    if (v.length <= 14) { //CPF menor igual a 14 caracteres
 
        //Coloca um ponto entre o terceiro e o quarto dígitos
        v=v.replace(/(\d{3})(\d)/,"$1.$2")
 
        //Coloca um ponto entre o terceiro e o quarto dígitos
        //de novo (para o segundo bloco de números)
        v=v.replace(/(\d{3})(\d)/,"$1.$2")
 
        //Coloca um hífen entre o terceiro e o quarto dígitos
        v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
 
    } 
 
    return v
 
}

function mascaraTelefone(v){
 
    //Remove tudo o que não é dígito
    v=v.replace(/\D/g,"")
 
    if (v.length <= 14) { // telefone menor que 14 caracteres
 
    
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    
 
    } 
 
    return v
 
}