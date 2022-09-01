<script>
  import { onMount, tick } from 'svelte'
  import { getTodos } from '../utils/getTodos'
  import { v4 as uuid } from 'uuid'

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

  const handleTextChange = async (e) => {
    text = e.target.value
    await tick()
  }
</script>

<section class="main_conteiner">
  <div class="select">
    <label for="todo-text">{title}</label>
    <label for="todo-text">{text}</label>
  </div>
  <input value={text} on:input={handleTextChange} class="todo-input" />
  <button on:click={handleAddClick} class="">Add Todo</button>
  <button on:click={reset} class="">reset</button>
</section>
<section>
  <div>
    {items.map(({id, text}) =>  text ) }
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
