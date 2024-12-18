function navigateTo(page, userName) {
    if (userName) {
        localStorage.setItem("userName", userName);
    }
    window.location.href = page;
}

document.getElementById('addForm').onsubmit = function(event) { 
    event.preventDefault(); 
    var givenAnswer = parseFloat(document.getElementById('given-answer').value);
    var answer = parseFloat(document.getElementById('answer').value);
    givenAnswer == answer ? document.getElementById('result').innerText = "Correct Answer, Well Done!" : document.getElementById('result').innerText = "Incorrect Answer, Try Again!";
}
