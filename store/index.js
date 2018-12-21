export const state = () => ({
  menuOpenClose: false
})
export const mutations = {
  toggle(state) {
    state.menuOpenClose = !state.menuOpenClose
  }
}
