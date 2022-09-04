<script>
  let reply = 0
  const qustionReplies = [
    {
      id: 1,
      text: "first",
    },
    {
      id: 2,
      text: "second",
    },
    {
      id: 3,
      text: "third",
    },
  ];
</script>

<p>Choose correct one:</p>


{#each qustionReplies as {id, text}, id}
  <label>
    <input type='radio' bind:group={reply} value={id} />
    {text}
  </label>
{/each}
{reply}