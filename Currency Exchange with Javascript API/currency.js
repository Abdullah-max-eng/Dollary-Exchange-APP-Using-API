var apiKey = "5bbe78e4f8701f39c80f4733";
document.addEventListener("DOMContentLoaded", () => {
    //The below fetch is to make the select and add data to it
    fetch("https://v6.exchangerate-api.com/v6/" + apiKey + "/latest/USD")
        .then( response => {
            return response.json();
        })
        .then( data => {
            var keys = Object.keys(data.conversion_rates);
            var myselect = document.querySelector("#myselect");
            
            keys.forEach((akey) => {
                var optionElement = document.createElement('option');
                optionElement.innerHTML = akey;
                optionElement.value = akey;
                myselect.append(optionElement);
            })

        })
        .catch( error => {
            console.log(error)
        });



//------------------ On Submit --------------------------



    document.querySelector("form").onsubmit = () => {
        
        // console.log("Working!")
        
        var apiKey = "5bbe78e4f8701f39c80f4733";

        fetch("https://v6.exchangerate-api.com/v6/" + apiKey + "/latest/USD")
        .then( response => {
            return response.json();
        })
        .then( data => {
            // document.querySelector("#result").innerHTML = `1 US Dollar  = ${rate}`;
            var keys = Object.keys(data.conversion_rates);
            var myselect = document.querySelector("#myselect");

            keys.forEach((akey) => {
                var optionElement = document.createElement('option');
                optionElement.innerHTML = akey;
                optionElement.value = akey;
                myselect.append(optionElement);
            })
            var currency = document.querySelector("#myselect").value;
            const rate = data.conversion_rates[currency];
            document.querySelector("#result").innerHTML = `1 Dollar is = ${rate} ${currency}`;
            // console.log(keys)
        })
        .catch( error => {
            console.log(error)
        });

        

        return false;
    }












})