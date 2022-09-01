<script>
  export let title = 'Enter:'

  let items = []

  const handleAddClick = () => {
    
    items = [...items, "item"]
  }

$: console.log(items)

  
</script>

//V
<section class="main_conteiner">
  <label for="todo-text">{title}</label>
  <input class="todo-input" />
  <button on:click={handleAddClick} class="">Add Todo</button>
</section>

<style>
  
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
