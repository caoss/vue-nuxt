import {
  getList,
} from '../api/list.js'

export const state = () => ({
  list: []
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text: text,
      done: false
    })
  },
  remove(state, {
    todo
  }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  },
  getList(state, todo) {
    return new Promise((resolve, reject) => {
      getList({
        pageNo: '1',
        pageSize: '10'
      }).then(resp => {
        console.log('resp', resp);
        return resolve()
      }).catch(err => {
        return reject(err)
      })
    })

  }
}
