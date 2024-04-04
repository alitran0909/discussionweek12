//challenge 1 part 1
document.querySelector("#subscribe").addEventListener("click", function(){
   if(this.checked){
        document.querySelector("#emailDiv").style.display = "block";
   }
   else{
      document.querySelector("#emailDiv").style.display = "none";
    }
})

//challenge 1 part 2
document.addEventListener("click", function(){
   let currentTime = new Date();
    alert("Current time: " + currentTime);
})

//challenge 2
document.querySelector("#sameAddress").addEventListener("click", function(){
    console.log(this.checked)

    bill = document.querySelector("#bill")
    home = document.querySelector("#home")

    if(this.checked){
        console.log("Set it")
        home.value = bill.value
        home.disabled = true
    }
    else{
        home.value = ""
        home.disabled = false
    }
})

//challenge 3


