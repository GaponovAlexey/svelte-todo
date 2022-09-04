<script>
import { createEventDispatcher } from "svelte";


  const dispatch  = createEventDispatcher()
  export let text 
  export let done

  const handleDoneChange = (e) => {
    dispatch('doneChange', e.target.chacked)
  }

</script>

<style>
  .main_conteiner {
    justify-content: space-between;
    display: flex;
    height: 50px;
    border-radius: 5px;
    align-items: center;
    background-color: darkgreen;
    padding: 0 15px;
  }
  .main_input {
    display: flex;
    justify-content: start;
  }
  input {
    margin: 0;
    margin-right: 20px;
  }
  p {
    margin: 0;
  }
  .remove_button {
    color: brown;
    font-weight: bold;
    cursor: pointer;
  }

</style>

<div class="main_conteiner">
  <div class="main_input">
    <input chacked={done} on:input={handleDoneChange} type="checkbox" />
    <p>{text}</p>
  </div>
  <button  class="remove_button">remove</button>
</div>
