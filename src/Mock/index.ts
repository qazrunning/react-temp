import Mock, { mock, Random } from "mockjs"
// 设定响应时间
Mock.setup({ timeout: 2000 })

mock('/homess', 'get', {
  'list|50-100': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1
  }]
})
// 数据占位符定义
mock('/mock/table', 'get', {
  status: 200,
  'list|50-100': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1000,
    'name': "@cname",
    'city': "@city(true)", //Random.city(true),
    'idCard': "@id",// Random.id(),
    'time': "@date('yyyy-MM-dd hh:mm')",//Random.date('yyyy-MM-dd hh:mm'),
    'img': "@image('200x100', '#58bc58', '#FFF', 'png', 'text')",//Random.image('200x100', '#58bc58', '#FFF', 'png', 'text')

  }]
})