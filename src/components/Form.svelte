<script>
  import { createEventDispatcher } from "svelte";

  export let title = "Enter:";
  const dispatch = createEventDispatcher();

  let text = "";
  const handleAddClick = () => {
    dispatch("add", text);
  };
  const handleTextChange = (e) => {
    text = e.target.value;
  };
</script>

<section class="main_conteiner">
  <label for="todo-text">{title}</label>
  <input bind:value={text} class="todo-input" />
  <button on:click={handleAddClick} class="">Add Todo</button>
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
