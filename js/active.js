const labels = document.querySelectorAll('.age__item')

labels.forEach(label => {
    label.addEventListener('click',e=> {
        labels.forEach.call(document.querySelectorAll('label'), function (el) {
            el.classList.remove('act');
        });
        label.classList.add('act')
    })

});
