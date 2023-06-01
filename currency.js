var select = document.querySelectorAll(".currency")
btn=document.getElementById("btn")
 input_currency = document.getElementById("input_currency")
 result_currency= document.getElementById("result_currency")


const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
  .then((data) => data.json())
  .then((data) => {
    const entries = Object.entries(data)
    // console.log(entries)
    for(i=0;  i< entries.length;   i++){
  select[0].innerHTML +=  `<option value="${entries[i][0]}">${entries[i][0]}</option>`
  select[1].innerHTML += `  <option value="${entries[i][0]}">${entries[i][0]}</option>`
    }
  });


function converter(){
    currency_value = input_currency.value
    if(select[0].value != select[1].value){
        
    
        const host = 'api.frankfurter.app';
        fetch(`https://${host}/latest?amount=${currency_value}&from=${select[0].value}&to=${select[1].value}`)
        .then((val) => val.json())
        .then((val) => {
            result_currency.value =Object.values(val.rates)[0]
            // alert(`10 GBP = ${data.rates.USD} USD`);
            console.log(Object.values(val.rates)[0])

        });
    }
    
    else{
        alert("select the currencies")
    }


    }


// var select = document.querySelectorAll(".currency"),
// input_currency = document.getElementById('input_currency'),
// result_currency = document.getElementById('result_currency');

// fetch(`https://api.frankfurter.app/currencies`)
//   .then((data) => data.json())
//   .then((data) => {
//     const entries = Object.entries(data);
//     console.log(data)
// 	  for (var i = 0; i < entries.length; i++) {
// 	    select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
// 	    select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
// 	  }
   	
// });

// function converter(){
//  	input_currency_val = input_currency.value;
//  	if(select[0].value != select[1].value ){
//  		alert("yes")
//  		const host = 'api.frankfurter.app';
// 		fetch(`https://${host}/latest?amount=${input_currency_val}&from=${select[0].value}&to=${select[1].value}`)
// 		  .then((val) => val.json())
//     	.then((val) => {
// 		    //alert(`10 GBP = ${data.rates.USD} USD`);
// 		    result_currency.value = Object.values(val.rates)[0]
// 		    console.log(Object.values(val.rates)[0])
// 		});
//  	}else{
//  		alert("Peease select two different currencies")
//  	}
// }

    





var body1 = document.getElementsByTagName('body')[0]
 var darkMood = document.getElementById('dark-mood')


 darkMood.addEventListener('click' , ()=>{
    darkMood.classList.toggle( 'active')
    body1.classList.toggle('night')

 } )