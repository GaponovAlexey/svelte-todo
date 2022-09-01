<script>
  export let title = 'Enter:'

  let items = []

  const handleAddClick = () => {
    items = [...items, "item"]
  }
  const reset = () => {
    items = []
  }

$: console.log(items)

  
</script>


<section class="main_conteiner">
  <label for="todo-text">{title}</label>
  <input class="todo-input" />
  <button on:click={handleAddClick} class="">Add Todo</button>
  <button on:click={reset} class="">reset</button>
</section>

<style>
  :global(label) {
    color: blue
  }
  .main_conteiner {
    background-color: aqua;
    border-radius: 5px;
    padding: 5px;
    color: red;
  }
  .todo-input {
    color: blueviolet;
  }
</style>
