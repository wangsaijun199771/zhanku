let Mock = require('mockjs')

let saishi = Mock.mock({
   "list|10": [{
      "image": "@image('920x456', '@color', '@character')",
      "title": "@ctitle",
      "date":"@date('yyyy-MM-dd')",
      "num1": "@natural(1800, 3000)",
      "num2": "@natural(20, 300)"
   }]
})

Mock.mock('/api/saishi', 'get', (config) => {
   return saishi
})