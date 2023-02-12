var apiKey = "5bbe78e4f8701f39c80f4733";
document.addEventListener("DOMContentLoaded", () => {

    
    //The below fetch is to make the select and add data to it
    fetch("https://v6.exchangerate-api.com/v6/" + apiKey + "/latest/USD")
        .then( response => {
            return response.json();
        })
        .then( data => {
            var keys = Object.keys(data.conversion_rates);
            var myselect1 = document.querySelector("#myselect1");
            var myselect2 = document.querySelector("#myselect2");
            
            keys.forEach((akey) => {
                var optionElement1 = document.createElement('option');
                var optionElement2 = document.createElement('option');

                optionElement1.innerHTML = akey;
                optionElement2.innerHTML = akey;

                optionElement1.value = akey;
                optionElement2.value = akey;

                myselect1.append(optionElement1);
                myselect2.append(optionElement2);
            })
        })
        .catch( error => {
            console.log(error)
        });



        document.querySelector("#submitButton").addEventListener('mouseover',  () => {
            document.querySelector('html').style.backgroundColor = "#37c51b"
    
        })
        document.querySelector("#submitButton").addEventListener('mouseout',  () => {
            document.querySelector('html').style.backgroundColor = "#08c"
    
        })

     



//------------------ On Submit --------------------------

    document.querySelector("form").onsubmit = () => { 
       let number1 = document.querySelector("#number1").value;
       let firstC = myselect1.value;
       let secondC = myselect2.value;

        fetch("https://v6.exchangerate-api.com/v6/" + apiKey + "/latest/" + firstC)
        .then( response => {
            return response.json();
        })
        .then( data => {
            const rate = data.conversion_rates[secondC];
            total = calculateTotal(number1 , rate);
            display(number1, rate, firstC, secondC , total)
        })
        .catch( error => {
            console.log(error)
        });
        return false;
    }
})


function calculateTotal(number1, rate){
   total = number1 * rate;
   return total.toFixed(2);
}

function display(number1, rate, firstC, secondC, total){
    document.querySelector("#result").innerHTML = ` ${number1} <span class="Cs"> ${firstC} </span> is =  <span id = "total"> </span>      <span class="Cs"> ${secondC} </span> `
    document.querySelector("#result2").innerHTML = ` 1 <span class="Cs"> ${firstC} </span> is = <span id="rate"> ${rate} </span> <span class="Cs"> ${secondC} </span>  `
    document.querySelector("#rate").innerHTML  = rate; // only showing 1 in both currencies
    document.querySelector("#total").innerHTML  = total; // Total will be entered here
 

}