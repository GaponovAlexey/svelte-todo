import { v4 as uuid } from 'uuid'

export const getTodos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: uuid(),
          text: 'todo item 1 from server',
          done: false,
        },
        {
          id: uuid(),
          text: 'todo item 2 from server',
          done: true,
        },
        {
          id: uuid(),
          text: 'todo item 3 from server',
          done: false,
        },
      ])
    }, 500)
  })
}
