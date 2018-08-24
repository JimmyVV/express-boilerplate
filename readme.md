# express-boilerplate

通过 app.use 可直接添加 express 的自服务，达到子应用层面的划分。

其中，主要利用 dispatch  API 实现拓展子 API 的开发实践。

app.use("/passport", subExpress_app); 可以监听 /passport 下的所有自路径。

 * /passport/test
 * /passport/index.html