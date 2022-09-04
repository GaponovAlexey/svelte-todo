<script>
  import Form from "./Form.svelte";

  export let title = "Enter:";

</script>

<Form
  {title}
  on:add
/>
