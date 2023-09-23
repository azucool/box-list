document.addEventListener('DOMContentLoaded', function() {
    let addButton = document.getElementById('addButton');
    let inputTask = document.getElementById('inputTask');
    let taskList = document.getElementById('taskList');

    addButton.addEventListener('click', function() {
        let value = inputTask.value.trim();
        if(value.length > 0) {
            let li = document.createElement('li');
            li.textContent = value;
            taskList.appendChild(li);
            inputTask.value = '';

            let userId = document.getElementById('userId').textContent;
            fetch(`add_item.php?user=${userId}&item=${value}`);
        }
    });
});
