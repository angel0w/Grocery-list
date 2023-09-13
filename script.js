function addItem(ev) {
    let ulItems = document.getElementById('ulList');
    let liItem = document.getElementById('inputValue').value;

    let li = document.createElement('li');
    li.textContent = liItem;

    if (liItem !== '') {
        ulItems.append(li);
        document.getElementById('inputValue').value = '';
    }
}

let liElement = Array.from(document.querySelectorAll('#ulList'));


liElement.forEach(el => {
    el.addEventListener('click', (el) => {
        if (el.target.style.textDecoration == 'line-through') {
            el.target.style.textDecoration = 'none'
        } else {
            el.target.style.textDecoration = 'line-through';
        }

    })
})


