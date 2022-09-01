<script>
  import Addtodo from './components/AddTodo.svelte'
    export let name, age

  let title = 'Select:'
</script>

<main>
  <h1>Hello {name} {age}!</h1>
</main>
<label for="todo">Some Text</label>
<Addtodo {title} />


<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
