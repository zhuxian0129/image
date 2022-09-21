export default [
  { name: '系统管理', label: '1' },
  { name: '权限管理', path: '/permission' },
  { name: '财务科目管理', path: '/finance' },
  { name: '部门管理', path: '/department' },
  { name: '人员管理', path: '/people' },
  {
    name: '业务收支名目',
    submenu: [
      { name: '业务收入名目', path: '/business/income' },
      { name: '业务支出名目', path: '/business/expenditure' }
    ]
  },
  { name: '产品线管理', path: '/productLine' },
  { name: '客户管理', path: '/client' },
  { name: '供应商管理', path: '/supply' },
  { name: '数据管理', label: '1' },
  { name: '费用管理', path: '/data/marg' },
  { name: '产品线收支管理', path: '/data/pred' },
  { name: '报表统计', label: '1' },
  {
    name: '费用统计',
    submenu: [
      { name: '统计', path: '/statement/cost' },
      { name: '按科目', path: '/statement/cost/dept' },
      { name: '按部门', path: '/statement/cost/finance' },
      { name: '按供应商', path: '/statement/cost/supply' }
    ]
  },
  {
    name: '业务统计',
    submenu: [
      { name: '统计', path: '/statement/business' },
      { name: '按产品线', path: '/statement/business/productLine' },
      { name: '按部门', path: '/statement/business/dept' },
      { name: '按供应商', path: '/statement/business/supply' },
      { name: '按客户', path: '/statement/business/client' }
    ]
  },
  { name: '平衡毛利率', path: '/statement/balance' },
  { name: '事务管理', label: '4' },
  { name: '项目管理', path: '/projects' },
  {
    name: '绩效管理',
    submenu: [
      { name: '指标维度', path: '/achievements/dimension' },
      { name: '指标下达', path: '/achievements/release' },
      { name: '绩效挂钩', path: '/achievements/ahook' }
    ]
  },
  { name: '内务管理', path: '/internal' },
  {
    name: '文件上传',
    submenu: [
      { name: '查阅', path: '/upload' },
      { name: '历史上传', path: '/upload/history' }
    ]
  },
  { name: 'SKU设置', label: '5' },
  { name: '已有SKU列表', path: '/sku' },
  { name: '添加SKU', path: '/addSKU' },
  { name: '商品设置', label: '6' },
  { name: '已有商品列表', path: '/product' },
  { name: '添加商品', path: '/addProduct' }
]
