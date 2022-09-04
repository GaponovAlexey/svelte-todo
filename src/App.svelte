<script>
  import { onMount } from "svelte";
  import { getTodos } from "./utils/getTodos";
  import { v4 as uuid } from "uuid";
  import TodoItem from "./components/TodoItem.svelte";
  import AddTodo from "./components/AddTodo.svelte";

  let items = [];

  onMount(() => {
    const get = async () => {
      const data = await getTodos();
      items = data;
    };
    get();
  });

  const handleAddClick = (event) => {    items = [...items, { id: uuid(), text: event.detail }];
  };
</script>

<AddTodo on:add={handleAddClick} />

{#await items then items}
  {#each items as { text }}
    <div class="todo-item-container">
      <TodoItem {text} />
    </div>
  {:else}nothing{/each}
{/await}
