const express=require('express');
const app=express();
app.use((req,res,next)=>{
    //获取请求参数

})
app.listen(3000,err=>{
    if (!err) console.log('服务器启动成功');
    else console.log(err)
})