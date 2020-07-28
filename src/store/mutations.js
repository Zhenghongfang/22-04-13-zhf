export default {
  // 改变展开收起状态
  changeCollapse(state) {
    state.collapsed = !state.collapsed
  },

  // 根据屏幕宽度菜单状态自适应
  collapseAdaptive(state, width) {
    state.collapsed = !(width >= 1200)
  },

  // 新增顶部tag标签
  addTag(state, tagItem) {
    const { tagList } = state
    const isExist = tagList.some(item => item.path === tagItem.path)
    isExist || tagList.push(tagItem)
  },

  // 移除顶部tag标签
  removeTag(state, tagItem) {
    const { tagList } = state
    tagList.forEach((item, index) => {
      if (item.path === tagItem.path) {
        tagList.splice(index, 1)
      }
    })
  },

  // 获取当前路由
  currentRoute(state, currentRoute) {
    state.currentRoute = currentRoute
  },
}
