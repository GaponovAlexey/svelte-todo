<script>
  import { todoItems } from "./store/store.js";
  import { onDestroy, onMount } from "svelte";
  import { v4 as uuid } from "uuid";
  import TodoItem from "./components/TodoItem.svelte";
  import AddTodo from "./components/AddTodo.svelte";

  let items = [];

  const unsubscribe = todoItems.subscribe((value) => {
    items = value;
  });
  
  // onMount(() => {
  //   const get = async () => {
  //     const data = await getTodos();
  //     items = data;
  //   };
  //   get();
  // });

  const handleAddClick = (event) => {
    todoItems.update((items) => {
      return [...items, { id: uuid(), text: event.detail, done: false }];
    });

    const handleDoneChange = (id, done) => {
      todoItems.update(items => {
        return items.map(item => {
          if(item.id === id) {
            return {
              ...item,
              done
            } 
          } else {
              return item
            }
        })
    });
    
  };
  onDestroy(() => {
    unsubscribe();
  });
</script>

<AddTodo on:add={handleAddClick} />
{items.filter((i) => i.done).length}/{items.length}
{#await items then items}
  {#each items as { text, done, id }, id}
    <div class="todo-item-container">
      <TodoItem
        on:doneChange={(e) => handleDoneChange(id, e.detail)}
        {text}
        {done}
      />
    </div>
  {:else}nothing{/each}
{/await}
