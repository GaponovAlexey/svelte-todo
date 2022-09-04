import App from './App.svelte'
import { getTodos } from './utils/getTodos'

let items = getTodos()

const app  = new App({
  target: document.body,
  props: {
    name: 'Ivan',
    age: 22,
    items,
  },
})

export default app
