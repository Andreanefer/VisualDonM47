fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(post => post.json())
  .then(user => user.json())
  .then(json => console.log(json))