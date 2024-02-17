/*
@TODO: ADD DATE FUNCTIONALITY AND SYNC WITH GOOGLE API
*/

let add_button = document.querySelector('.add button');
let task_number = 0;
let add_btn = document.querySelector('.add_btn');
let new_task_input = document.querySelector('.add_task input');
let edit_target = "";
let edit_text = false;
new_task_input.addEventListener('keydown', (event) => {
    if (event.code == "Enter")
    {
        if (event.target.value.length !== 0 ){
            if(!edit_text)
            {
                createTask(new_task_input.value);
                new_task_input.value = "";
                console.log(`crate task edit ${edit_text}`);
            }
        }

    }
})


document.addEventListener('click', (event)=>{
    if (event.target && event.target.classList.contains('delete')){
        event.target.closest('.task').remove();
        console.log(event.target.parentElement)
    }
})

document.addEventListener('change', (event) => {
    if (event.target && event.target.type === 'checkbox' && event.target.name == 'done'){
        let text = event.target.parentElement.nextElementSibling;
        text.classList.toggle('strike');
    }
})

document.addEventListener('click', (event)=>{
    console.log(event.target);
    if(event.target && event.target != document.body && event.target.parentElement.classList.contains('edit')){
        input_hide()
        task_text = event.target.parentElement.closest('.task').querySelector('.description').innerText;
        new_task_input.value = task_text;
        edit_target = event.target.parentElement.closest('.task').querySelector('.description');
        edit_text = true;
        new_task_input.addEventListener('keydown', (event) => {
            if (event.code == "Enter")
            {
                if (edit_text){
                    edit_target.innerText = event.target.value;
                    event.target.value = "";
                    edit_text = false;
                }
            }
        })
        
    }
})


function createTask(task_text) {
        task_number++;
        //create task id = task + task_number
        const task_id = "task" + task_number;
        // Create the label element
        const task_container = document.querySelector('.tasks_container ul');
        const label = document.createElement('label');
        label.setAttribute('for', task_id);
        label.classList.add('c-custom-checkbox');
        let task = document.createElement("li");

        task.setAttribute("class","task row");
        // Create the input element
        const input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('name', 'done');
        input.setAttribute('id', task_id);

        // Create the svg element
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '32');
        svg.setAttribute('height', '25');
        svg.setAttribute('viewBox', '0 0 72 72');
        svg.setAttribute('id', 'emoji');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

        // Create the g elements inside svg
        const gColor = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        gColor.setAttribute('id', 'color');
        const gLine = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        gLine.setAttribute('id', 'line');

        // Create the path elements inside gColor
        const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path1.setAttribute('fill', '#B1CC33');
        path1.setAttribute('stroke', 'none');
        path1.setAttribute('d', 'M53.1887,52.843H20.5794c-0.3752,0-0.6794-0.2955-0.6794-0.66v-31.68c0-0.3645,0.3042-0.66,0.6794-0.66 h21.5062h1.2918h2.0097h6.6745h1.1271c0.3752,0,0.6794,0.2955,0.6794,0.66v31.68C53.8681,52.5475,53.5639,52.843,53.1887,52.843z');
        const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path2.setAttribute('fill', '#FFFFFF');
        path2.setAttribute('stroke', 'none');
        path2.setAttribute('stroke-linecap', 'round');
        path2.setAttribute('stroke-linejoin', 'round');
        path2.setAttribute('stroke-miterlimit', '10');
        path2.setAttribute('stroke-width', '2');
        path2.setAttribute('d', 'M30.66,30.538c-1.85-2.61-6.18-0.11-4.32,2.52c3.19,4.51,5.87,9.25,7.91,14.38c0.84,2.09,4.23,2.65,4.83,0 c2.83-12.6,8.21-27.17,20.68-33c2.91-1.36,0.38-5.67-2.52-4.32c-11.43,5.35-17.68,17.36-21.23,29.25 C34.45,36.318,32.68,33.378,30.66,30.538z');
        const path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path3.setAttribute('fill', 'none');
        path3.setAttribute('stroke', '#d22f27');
        path3.setAttribute('stroke-linecap', 'round');
        path3.setAttribute('stroke-linejoin', 'round');
        path3.setAttribute('stroke-miterlimit', '10');
        path3.setAttribute('stroke-width', '2');
        path3.setAttribute('d', 'M47.6549,25.4633');

        // Append path elements to gColor
        gColor.appendChild(path1);
        gColor.appendChild(path2);
        gColor.appendChild(path3);

        // Append gColor and gLine to svg
        svg.appendChild(gColor);
        svg.appendChild(gLine);

        // Append input and svg to label
        label.appendChild(input);
        label.appendChild(svg);

        const description = document.createElement('p');
        description.setAttribute("class", "description");
        description.innerText = task_text;

        const modify = document.createElement("div");
        modify.setAttribute("class", "modify row");
        edit = document.createElement("button");
        edit.setAttribute("class", "edit");
        edit_span  = document.createElement("span");
        edit_span.setAttribute("class", "material-symbols-outlined");
        edit_span.innerText = "edit"
        edit.appendChild(edit_span);

        del = document.createElement("button");
        del.setAttribute("class", "delete");
        del.innerHTML = "&times";


        modify.append(edit);
        modify.append(del);

        task.appendChild(label);
        task.appendChild(description);
        task.appendChild(modify);


        task_container.appendChild(task);
}

function input_hide(){
    add_btn.classList.toggle('center');
    new_task_input.classList.toggle('hide');
}
add_btn.addEventListener('click', ()=>
{
    add_btn.classList.toggle('center');
    new_task_input.classList.toggle('hide');
    new_task_input.value = "";
})