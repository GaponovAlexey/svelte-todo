<script>
  export let title = 'title'
</script>

<div class="main_conteiner">
  <div class="main_input">
    <input type="checkbox" />
    <p>{title}</p>
  </div>
  <button class="remove_button">remove</button>
</div>

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
