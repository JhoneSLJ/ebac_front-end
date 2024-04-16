let varFormu = document.getElementById('formu');
const varNum1 = document.getElementById('num-1');
const varNum2 = document.getElementById('num-2');


varFormu.addEventListener('submit', function(e){
    e.preventDefault();
    varFormu = false
})

const mensagemSu = `O Segundo número é maior portanto esse formulário é válido`;
const mensagemErro = `Erro! o Segundo número precisa ser maior que o primeiro`


varFormu.addEventListener("submit", function(e){
    if(parseInt(varNum1.value) < parseInt(varNum2.value)){
        varFormu = true
        const mensagemSuAlter = document.querySelector('.sucess-msg')
        mensagemSuAlter.innerHTML = mensagemSu;
        mensagemSuAlter.style.display = 'block';
        varNum1.value = '';
        varNum2.value = '';
        
    }
    else{
        
        
    }
})
const errorMsgAlt = document.querySelector('.errorMsg')
errorMsgAlt.innerHTML = mensagemErro;

varNum1.addEventListener('keyup', function(e){
    console.log(e.target.value);
    if(parseInt(varNum1.value) > parseInt(varNum2.value)){
        errorMsgAlt.style.display = 'block';
        varNum1.classList.add('num1')
    } else{errorMsgAlt.style.display = 'none';
        varNum1.classList.remove('num1')}
})
varNum2.addEventListener('keyup', function(e){
    console.log(e.target.value);
    if(parseInt(varNum1.value) > parseInt(varNum2.value)){
        errorMsgAlt.style.display = 'block';
        varNum1.classList.add('num1')
    } else{errorMsgAlt.style.display = 'none';
        varNum1.classList.remove('num1')}
})


