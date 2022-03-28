let Mock = require('mockjs')

let data = Mock.mock({
   "list|10": [{
      "image": "@image('423x319', '@color', '@character')",
      "title": "@ctitle",
      "name": "@cword(3, 5)",
      "num1": "@natural(800, 3000)",
      "num2": "@natural(20, 300)"
   }]
})

Mock.mock('/api/home', 'get', (config) => {
   return data
})