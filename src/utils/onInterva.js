import { onDestroy } from 'svelte'

export const onInterva = (cb, ms) => {
  const interva = setInterval(cb, ms)
  onDestroy(() => {
    clearInterval(interva)
  })
}
