<script>
  import { onDestroy, onMount } from 'svelte'

  export let title = 'Enter:'
  import { onInterva } from '../utils/onInterva'
  let items = []
  let counter = 0

  onInterva(() => {
    counter++
  }, 1000)

  const handleAddClick = () => {
    items = [...items, 'item']
  }
  const reset = () => {
    items = []
  }

  $: console.log(items)
</script>

<section class="main_conteiner">
  <label for="todo-text">{title}</label>
  <label for="todo-text">{counter}</label>
  <input class="todo-input" />
  <button on:click={handleAddClick} class="">Add Todo</button>
  <button on:click={reset} class="">reset</button>
</section>

<style>
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
