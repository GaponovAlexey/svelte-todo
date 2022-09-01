<script>
  import { onDestroy, onMount } from 'svelte'
  import {getTodos } from '../utils/getTodos'

  export let title = 'Enter:'
  let items = []
  let counter = 0

  onMount(() => {
    getTodos().then((value) => {
      items = value
    })
  })

//click  
  const handleAddClick = () => {
    items = [...items, 'item']
  }
  const reset = () => {
    items = []
  }

  $: console.log(items)
</script>

<section class="main_conteiner">
  <div class="select">
    <label for="todo-text">{title}</label>
    <label for="todo-text">{counter}</label>
  </div>
  <input class="todo-input" />
  <button on:click={handleAddClick} class="">Add Todo</button>
  <button on:click={reset} class="">reset</button>
</section>
{JSON.stringify(items, null, 2)}

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
