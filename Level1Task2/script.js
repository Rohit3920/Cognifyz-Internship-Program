
const colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click", function () {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    colorButton.style.backgroundColor = randomColor;
});


function showGreeting() {
    const now = new Date();
    const hour = now.getHours();
    console.log(hour)
    let alertMeg;

    if (hour > 8 && hour < 12) {
        alertMeg = "Good morning!";
    } else if (hour > 12 && hour < 16) {
        alertMeg = "Good afternoon!";
    } else if(hour > 16 && hour < 20){
        alertMeg = "Good evening!";
    }else {
        alertMeg = "Good Night!";
    }

    alert(alertMeg);
}

function calculateSum() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = parseFloat(document.getElementById("result").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please fill the feilds")
        document.getElementById("num1").focus();
        return;
    }

    const sum = num1 + num2;
    document.getElementById("result").value = sum;
}