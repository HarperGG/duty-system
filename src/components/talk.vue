<template>
  <div>
    <div style>
      <i class="el-icon-s-fold" style="float:left"></i>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/msg' }">消息管理</el-breadcrumb-item>
        <el-breadcrumb-item>回复消息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="con">
      <div class="con-top">
        <div class="name">张傲</div>
        <div class="dialog-left">
          <img src="../assets/img/小黄鸡.png" style="width:48px;height:54px;margin-right:15px" />
          <span class="talk-con po">今天为啥没来上班啊？</span>
          <span class="po">12/18 12:21:07</span>
        </div>
        <div class="dialog-right">
          <span class="po">12/18 12:21:07</span>
          <span class="talk-con po" style="margin-left:5px">刚才去打印资料了，怎么了？</span>
          <img src="../assets/img/小黄鸡.png" style="width:48px;height:54px;margin-left:15px" />
        </div>
        <div class="dialog-left">
          <img src="../assets/img/小黄鸡.png" style="width:48px;height:54px;margin-right:15px" />
          <span class="talk-con po">把今天的资料发给我。</span>
          <span class="po">12/18 12:21:07</span>
        </div>
        <div class="dialog-right">
          <span class="po">12/18 12:21:07</span>
          <span class="talk-con po" style="margin-left:5px">行吧。</span>
          <img src="../assets/img/小黄鸡.png" style="width:48px;height:54px;margin-left:15px" />
        </div>
        <div class="error">文件发送失败！是否重新发送？</div>
        <div class="dialog-right">
          <span class="po">12/18 12:21:07</span>
          <span class="talk-con po" style="margin-left:5px">等哈我再发一次。</span>
          <img src="../assets/img/小黄鸡.png" style="width:48px;height:54px;margin-left:15px" />
        </div>
        <div class="dialog-left">
          <img src="../assets/img/小黄鸡.png" style="width:48px;height:54px;margin-right:15px" />
          <span class="talk-con po">⑤问题。</span>
          <span class="po">12/18 12:21:07</span>
        </div>
               <div class="dialog-right">
          <span class="po">12/18 12:21:07</span>
          <span class="talk-con po" style="margin-left:5px">
              <img src="../assets/img/小黄鸡.png"/>
          </span>
          <img src="../assets/img/小黄鸡.png" style="width:48px;height:54px;margin-left:15px" />
        </div>
      </div>
      <div class="con-bottom" >
          <label for="a" style="cursor:pointer;" title="点击发送文件嗷"><img src="../assets/img/小黄鸡.png" /></label>
          <input type="file" style="display:none" id="a">
           <el-button type="primary" class="btn">发送</el-button>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style  scoped>
.con {
  width: 1296px;
  height: 725px;
  background: rgba(255, 255, 255, 1);
  border-radius: 5px;
  margin: 20px auto 0;
  padding-left: 20px;
  padding-right: 20px;
}
.con-top {
  height: 425px;
  border-bottom: 1px solid black;
  overflow: auto;
}
.name {
  text-align: center;
  padding: 10px;
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
  margin-bottom: 10px;
}

/* 聊天内容 */
.talk-con {
  border: 2px solid rgba(0, 0, 0, 0.5);
  opacity: 0.8;
  border-radius: 10px;
  padding: 10px 5px;
  margin-right: 5px;
}
/* 左内容 */
.po {
  position: relative;
  top: -16px;
}
.dialog-left {
  text-align: left;
  margin-bottom: 15px;
}
.dialog-right {
  text-align: right;
  margin-bottom: 15px;
}
/* 失败的发送 */
.error {
  margin-bottom: 15px;
  text-align: center;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  cursor: pointer;
}


/* 底部内容 */
.con-bottom{
    height: 300px;
    padding-top: 15px;
    position: relative;
}
.btn{
    position: absolute;
    bottom: 30px;
    right: 0;
}
</style>