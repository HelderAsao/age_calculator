function resultado(){

    let inputdia = window.document.querySelector('.inputdia ')
    let inputmes = window.document.querySelector('.inputmes')
    let inputano = window.document.querySelector('.inputano')
    let button = window.document.querySelector('.button')
    let spanano = window.document.querySelector('.years')
    let spanmes = window.document.querySelector('.months')
    let spandia = window.document.querySelector('.day')
    let data = new Date()
    let dia = data.getDate()
    let mes = data.getMonth() +1 
    let ano = data.getFullYear()
    let finputano = Number(inputano.value)
    let finputmes = Number(inputmes.value)
    let finputdia = Number(inputdia.value)
    const stringdia = window.document.querySelector('.data_day')
    const stringmes = window.document.querySelector('.data_month')
    const stringano = window.document.querySelector('.data_year')
    const errodia = window.document.querySelector('.erro_dia')
    const erromes = window.document.querySelector('.erro_mes')
    const erroano = window.document.querySelector('.erro_ano')
    let resano = window.document.querySelector('.yearspan')
    let resmes = window.document.querySelector('.monthspan')
    let resdia = window.document.querySelector('.dayspan')
    let idadeano = ano - finputano
    let idademes = mes - finputmes
    let idadedia = dia - finputdia
    let valid_error_day = window.document.querySelector('.valid_error_day')
    let valid_error_month = window.document.querySelector('.valid_error_month')
    let valid_error_year = window.document.querySelector('.valid_error_year')
   
   

    if(isNaN(finputano) || finputano==0){
        inputano.style.borderColor ='hsl(0, 100%, 67%)';
        stringano.style.color='hsl(0, 100%, 67%)';
        erroano.style.display = 'block'


    } else if(finputano>ano || finputano<0){
        valid_error_year.style.color = 'hsl(0, 100%, 67%)';
        valid_error_year.style.display = 'block'
        inputano.style.borderColor ='hsl(0, 100%, 67%)';
        stringano.style.color='hsl(0, 100%, 67%)';
        erroano.style.display = 'none'

    } else{
        inputano.style.borderColor ='hsl(0, 0%, 86%)';
        valid_error_year.style.display = 'none'
        stringano.style.color= 'black'
         erroano.style.display = 'none'

    }





    if(isNaN(finputmes) || finputmes == 0){
        inputmes.style.borderColor ='hsl(0, 100%, 67%)';
        stringmes.style.color='hsl(0, 100%, 67%)';
         erromes.style.display = 'block'

    }else if(finputmes >= 13 || finputmes < 0){
        valid_error_month.style.color = 'hsl(0, 100%, 67%)';
        valid_error_month.style.display = 'block'
        inputmes.style.borderColor ='hsl(0, 100%, 67%)';
        stringmes.style.color='hsl(0, 100%, 67%)';
        erromes.style.display = 'none'
    
    } else {
        inputmes.style.borderColor ='hsl(0, 0%, 86%)';
        valid_error_month.style.display = 'none'
        stringmes.style.color= 'black'
        erromes.style.display = 'none'

    }



    
    if(isNaN(finputdia) ||  finputdia == 0){
        
        inputdia.style.borderColor ='hsl(0, 100%, 67%)';
        stringdia.style.color='hsl(0, 100%, 67%)';
        errodia.style.display = 'block'
         
    } else if(finputdia >=32 || finputdia < 0){
        valid_error_day.style.color = 'hsl(0, 100%, 67%)';
        valid_error_day.style.display = 'block'
        inputdia.style.borderColor ='hsl(0, 100%, 67%)';
        stringdia.style.color='hsl(0, 100%, 67%)';
        errodia.style.display = 'none'
    
    }else {
        inputdia.style.borderColor ='hsl(0, 0%, 86%)';
        valid_error_day.style.display = 'none'
        stringdia.style.color= 'black'
        errodia.style.display = 'none'

    }
       

    
    if ( finputmes > mes || finputmes == mes && finputdia > dia){

        idadeano--
        idademes--
    }

    if (idademes < 0) {
        idademes += 12; 
       
    }
    

    if (idadedia < 0) {

       // let proximo_aniver = new Date(ano, finputmes -1 ,finputdia)
        //console.log(idadedia = Math.abs(idadedia) ) //Transforma o valor negativo para positivo
        let proximoAniversario = new Date(ano, finputmes - 1, finputdia); // Data do próximo aniversário
        let Ultimo_dia_mes_anterior = new Date(ano , mes-1 , 0). getDate()
        idadedia = idadedia + Ultimo_dia_mes_anterior

        
    }

    if(finputmes > 0 || finputdia > 0 || finputano > 0){

        spanano.innerHTML= idadeano
        spanmes.innerHTML = idademes
        spandia.innerHTML = idadedia 

   
    
    }




}
