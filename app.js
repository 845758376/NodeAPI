const express = require('express')
var app = express();
// CORS模块，处理web端跨域问题
const cors = require('cors')
app.use(cors())
//body-parser 解析表单
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.json())
var router = require('./router.js')
router(app);



//启动服务，端口3000
app.listen(3000, () => {
	console.log('服务启动成功:' + `http://localhost:3000/`)
})
