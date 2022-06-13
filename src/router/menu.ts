const menu = [
  {
    label: '一级菜单',
    key: '/company'
  },
  {
    label: '二级菜单',
    key: '/test',
    children: [
      {
        label: '三级菜单',
        key: '/test/data'
      }
    ]
  }
]

export default menu;