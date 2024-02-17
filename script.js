// let add_button = document.querySelector('.add button');
// let checkbox = document.querySelector('.c-custom-checkbox input[type="checkbox"]');
// add_button.onclick = createTask;
// let task_number = 0;

// function createTask() {
//     let description = prompt("Enter new task");
//     let task_container = document.querySelector('.tasks_container');
//     let new_task = document.createElement('div');

//     new_task.classList.add('task');

//     let label = document.createElement('label');
//     label.setAttribute('for', 'done');
//     label.classList.add('c-custom-checkbox');


//     let input = document.createElement('input');
//     input.setAttribute('type', 'checkbox');
//     input.setAttribute('name', 'done');

//     console.log(input);
//     let svg = document.createElementNS("http://www.w3.org/2000/svg",'svg');
//     svg.setAttribute("viewBox", "0 0 60 40");
//     svg.setAttribute("aria-hidden", "true");
//     svg.setAttribute("focusable", "false");


//     let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//     path.setAttribute('d', 'M21,2 C13.4580219,4.16027394 1.62349378,18.3117469 3,19 C9.03653312,22.0182666 25.2482171,10.3758914 30,8 C32.9363621,6.53181896 41.321398,1.67860195 39,4 C36.1186011,6.8813989 3.11316157,27.1131616 5,29 C10.3223659,34.3223659 30.6434647,19.7426141 35,18 C41.2281047,15.5087581 46.3445303,13.6554697 46,14 C42.8258073,17.1741927 36.9154967,19.650702 33,22 C30.3136243,23.6118254 17,31.162498 17,34 C17,40.4724865 54,12.4064021 54,17 C54,23.7416728 34,27.2286213 34,37');
//     path.setAttribute('stroke-width', '4');
//     path.setAttribute('fill', 'none');
//     path.setAttribute('stroke-dasharray', '270');
//     path.setAttribute('stroke-dashoffset', '270');


//     svg.appendChild(path)
//     label.appendChild(input);
//     label.appendChild(svg);

//     let task_content = document.createElement('p');
//     task_content.classList.add('description');
//     task_content.innerText = description;

//     new_task.appendChild(label);
//     new_task.appendChild(task_content);
//     if (description != null && description != undefined){
//         task_number++;
//         let task_id = description.substring(0,2) + task_number;
//         new_task.setAttribute('id', task_id);
//         if (task_container.childElementCount !=  0){
//             task_container.prepend(new_task);
//         }
//         else {
//             task_container.append(new_task);
//         }
//     }
// }

let checkbox = document.querySelectorAll('.task input');
let text = document.querySelector('.description');
checkbox.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
            text.classList.toggle('strike')
    })
})