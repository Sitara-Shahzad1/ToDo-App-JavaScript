let todoList = [{item : "Buy Milk",
                  dueDate : "11/2/23"
                },

                {item : "Buy Ghee",
                  dueDate : "11/2/23"
                }];
displayItems();


function addTodo() {

  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let tododate = dateElement.value;

  console.log(todoItem);
  todoList.push({item :todoItem , dueDate: tododate});
  inputElement.value = '';
  dateElement.value = '';
 
  displayItems();
}


function displayItems(){

  let containerElement = document.querySelector('.todo-container');

  let newHtml = '';
  
  for (let i = 0; i < todoList.length; i++) {

    let {item , dueDate } = todoList[i]; //destructuring

    newHtml += `
 
     <span> ${item}  </span>
     <span> ${dueDate}  </span>
     
    <button class = "btn-delete";
      onclick= "todoList.splice(${i}, 1); 
      displayItems(); " >
                         Delete </button>
     
   
    `;
  }
  containerElement.innerHTML = newHtml;
}
 