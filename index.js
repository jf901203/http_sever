// http创建一个服务器
const http=require('http')
// request请求
// response 发送回浏览器
let server=http.createServer(function(request,response){
  // 发送给浏览器的请求头 在浏览器的network中可以看到 Content-Type 告诉浏览器按照text/html格式解析
    setTimeout(function () {  
    response.setHeader('Content-Type','text/html; charset=utf-8')
    // 告诉浏览器响应的状态码
    response.writeHead(404,'haha')
    response.write('<html><head><meta charset="utf-8" /></head>')
    response.write('<body>')
    response.write('<h1>你好</h1>')
    response.write('</body>')
    response.write('</html>')
    // 响应结束
    response.end()



    },2000)

})
console.log('8080')
// http://localhost:8080/ 浏览器发送请求 服务器监听到请求 就调用回调函数
server.listen(8080)