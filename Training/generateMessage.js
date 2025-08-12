// 1. Template Literals
function generateMessage() {
    
    const name = document.getElementById('userName').value;
    const age = document.getElementById('userAge').value;
    const greeting = document.getElementById('greeting').value;
    const ageAllowed = `${age >= 18 ? 'You are allowed to vote' : 'You are not allowed to vote!'}`;
    const time = `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`;
    const nextYear = `${parseInt(age) + 1}`;
    const msg = `${greeting} ${name} you are ${age} years old ${ageAllowed} and the is ${time} next year you will be ${nextYear}`;
    
    document.getElementById('messageOutput').textContent = msg;
}