const input = document.querySelector('.weight__input')
document.getElementById('next').onclick = function() {
    if(input.value != ''){
        window.location.href = 'fourth-question.html'
    } else{
        input.classList.add('red-holder')
        input.placeholder = `Введите корректное значение!`
    }
}


