//We worked on this as a group; Gardner.
const taskItem = document.querySelectorAll(".toDoList")
document.getElementById('removeAll').onclick = removeAll;
document.getElementById('removeCompleted').onclick = removeCompleted;

Array.from(taskItem).forEach(function(element) {
  element.addEventListener('click', function(){
    console.log("update click")

    const taskCompleted = this.childNodes[1].innerText
    console.log(taskCompleted)
    fetch('/update', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},

      body: JSON.stringify({
        'task': taskCompleted
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      window.location.reload(true)
    })

  })
})

function removeCompleted(){

    fetch('/removeCompleted', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'completed': "#FF0000"
      })
    }).then(function (response) {
      console.log(response)
      window.location.reload()
    })
  };

function removeAll(){

  fetch('/removeAll', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },

  }).then(function (response) {
    console.log(response)
    window.location.reload()
  })
};
