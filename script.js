function addItem(ev) {
    let ulItems = document.getElementById('ulList');
    let liItem = document.getElementById('inputValue').value;

    let li = document.createElement('li');
    let p = document.createElement('p');
    let span = document.createElement('span');

    p.textContent = liItem;
    span.textContent = 'X';

    if (liItem !== '') {
        li.appendChild(p);
        li.appendChild(span);
        ulItems.append(li);
        document.getElementById('inputValue').value = '';
    }

    span.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    });
}

let clearBtn = document.getElementById('clearButton');
clearBtn.addEventListener('click', (e) => {
    let lists = document.querySelectorAll('li');
    lists.forEach((el) => {
        el.remove();
    });
});




let pElement = Array.from(document.querySelectorAll('#ulList'));
pElement.forEach((el) => {
    el.addEventListener('click', (e) => {


        if (e.target.children[0].style.textDecoration == 'line-through') {
            e.target.children[0].style.textDecoration = 'none';
        } else {
            e.target.children[0].style.textDecoration = 'line-through';
        }
    });
});
