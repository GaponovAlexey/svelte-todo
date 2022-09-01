<script>
  import Addtodo from './components/AddTodo.svelte'
  export let name, age
</script>

<main>
  <h1>Hello {name} {age}!</h1>
  <Addtodo />
</main>

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
