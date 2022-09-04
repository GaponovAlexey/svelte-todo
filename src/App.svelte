<script>
  import TodoItem from './components/TodoItem.svelte'
  import { v4 as uuid } from 'uuid'
  export let name, age
  export let items = [...items]

  let title = 'Select:'
  let text = ''

  $: console.log(items)

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

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
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

<section class="main_conteiner">
  <h1>Hello {name} {age}!</h1>
  <div class="select">
    <label for="todo-text">{title}</label>
  </div>
  <input value={text} on:input={handleTextChange} class="todo-input" />
  <button on:click={handleAddClick} class="">Add Todo</button>
  <button on:click={reset} class="">reset</button>
</section>
<label for="todo">Some Text</label>
<div>
  {#await items then items}
    {#each items as { text }}
      <TodoItem {text} />
    {:else}nothing{/each}
  {/await}
</div>
