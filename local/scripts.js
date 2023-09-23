document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('user') || 'default';
    
    loadTasks();
    
    document.getElementById("addButton").addEventListener("click", addTask);
    
    document.getElementById("inputTask").addEventListener("keydown", function(event) {
        if(event.key === "Enter") {
            event.preventDefault();
            addTask();
        }
    });
    
    function addTask() {
        let ul = document.getElementById("taskList");
        let inputTask = document.getElementById("inputTask");
        
        if(inputTask.value === "") return alert("请填写任务内容！");
        
        createTask(inputTask.value, ul);
        saveTaskInLocalStorage(inputTask.value);
        inputTask.value = "";
    }

    function loadTasks() {
        let ul = document.getElementById("taskList");
        ul.innerHTML = '';
        
        let tasks = JSON.parse(localStorage.getItem('tasks_' + userId)) || [];
        tasks.forEach(task => createTask(task, ul));
    }

    function createTask(task, ul) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(task));
        ul.appendChild(li);
        
        li.onclick = function() {
            li.classList.toggle('done');
            ul.appendChild(li);
            updateLocalStorage();
        }
        
        li.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            if(window.confirm('您确定要删除这个任务吗？')) {
                ul.removeChild(li);
                updateLocalStorage();
            }
        });
    }

    function saveTaskInLocalStorage(task) {
        let tasks = JSON.parse(localStorage.getItem('tasks_' + userId)) || [];
        tasks.push(task);
        localStorage.setItem('tasks_' + userId, JSON.stringify(tasks));
    }

    function updateLocalStorage() {
        let ul = document.getElementById("taskList");
        let tasks = Array.from(ul.children).map(li => li.textContent);
        localStorage.setItem('tasks_' + userId, JSON.stringify(tasks));
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let params = new URLSearchParams(window.location.search);
    let userId = params.get('user') || '未知'; // 如果URL中没有user参数，那么将显示“未知”
    document.getElementById('userId').textContent = userId;

    // ... 其他的JavaScript代码
});

