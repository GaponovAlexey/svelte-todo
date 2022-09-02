<script>
  import { onMount } from 'svelte'
  import { v4 as uuid } from 'uuid'
  import { getTodos } from '../utils/getTodos'
  import TodoItem from './TodoItem.svelte'

  export let title = 'Enter:'
  let items = []
  let text = ''

  onMount(() => {
    const get = async () => {
      const data = await getTodos()
      items = data
    }
    get()
  })

  //click
  const handleAddClick = () => {
    items = [...items, { id: uuid(), text }]
  }
  const reset = () => {
    items = []
  }

  const handleTextChange = (e) => {
    text = e.target.value
  }
</script>

<section class="main_conteiner">
  <div class="select">
    <label for="todo-text">{title}</label>
  </div>
  <input value={text} on:input={handleTextChange} class="todo-input" />
  <button on:click={handleAddClick} class="">Add Todo</button>
  <button on:click={reset} class="">reset</button>
</section>
<section>
  <div>
      {#each items as { text, id } (id)}
      <TodoItem title={text} />
      {:else}
        nothing
      {/each}
  </div>
</section>

<style>
  .select {
    display: block;
  }
  :global(label) {
    color: blue;
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
