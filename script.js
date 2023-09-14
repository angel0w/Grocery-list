function addItem(ev) {
    let ulItems = document.getElementById('ulList');
    let liItem = document.getElementById('inputValue').value;

    let li = document.createElement('li');
    li.textContent = liItem;

    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = 'X';

    if (liItem !== '') {
        li.appendChild(deleteElement);
        ulItems.append(li);
        document.getElementById('inputValue').value = '';
    }

    deleteElement.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    });

    let clearBtn = document.getElementById('clearButton');
    clearBtn.addEventListener('click', (e) => {
        let lists = document.querySelectorAll('li');
        lists.forEach((el) => {
            el.remove()
        })
    })

}

let liElement = Array.from(document.querySelectorAll('#ulList'));
liElement.forEach((el) => {
    el.addEventListener('click', (el) => {
        if (el.target.style.textDecoration == 'line-through') {
            el.target.style.textDecoration = 'none';
        } else {
            el.target.style.textDecoration = 'line-through';
        }
    });
});


