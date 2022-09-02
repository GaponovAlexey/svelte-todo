<script>
  import Todo from './components/AddTodo.svelte'
    export let name, age

  let title = 'Select:'
</script>

<h1>Hello {name} {age}!</h1>
<label for="todo">Some Text</label>
<Todo {title} />


<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
