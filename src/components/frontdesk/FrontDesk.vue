<template>
  <div>

    <el-container>
      <el-header height="90px" width="100%;">
        <div class="home-aside">
          <img src="../../assets/img/logo.png" alt="">
          <span>值班系统</span>
        </div>
        <div class="img-user">

          <el-dropdown @command="handleCommand" trigger="click">
            <img style="cursor:pointer" src="../../assets/img/小黄鸡.png" alt="">
            <el-dropdown-menu slot="dropdown" :split-button="true">
              <el-dropdown-item  command="个人中心">个人中心</el-dropdown-item>
              <el-dropdown-item  command="退出登录">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-main>
        <div class="index-content">
          <el-row style="height:100%;">
            <el-col class="elcol-span1" :span="6">
              <el-tooltip class="item" effect="dark" content=" " placement="right">
              <div style="font-size:16px;" slot="content">通知内容通知内容通知内容容容<br/> 通知内容通知内容通知内容容容 <br/>通知内容通知内容通知内容容容 <br/>通知内容通知内容通知内容容容</div>
                <el-card shadow="hover">
                  <div slot="header" class="clearfix">
                    <span>通知1：</span>
                    <span style="float: right; padding: 3px 0">2010/10/10</span>
                  </div>
                  <div class="">
                    通知内容通知内容通知内容容容。。。
                  </div>
                </el-card>
              </el-tooltip>
              <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
                <div style="font-size:16px;" slot="content">通知内容通知内容通知内容容容<br/> 通知内容通知内容通知内容容容 <br/>通知内容通知内容通知内容容容 <br/>通知内容通知内容通知内容容容</div>
                <el-card shadow="hover">
                  <div slot="header" class="clearfix">
                    <span>通知1：</span>
                    <span style="float: right; padding: 3px 0">2010/10/10</span>
                  </div>
                  <div class="">
                    通知内容通知内容通知内容容容。。。
                  </div>
                </el-card>
              </el-tooltip>
              <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
                <div style="font-size:16px;" slot="content">通知内容通知内容通知内容容容<br/> 通知内容通知内容通知内容容容 <br/>通知内容通知内容通知内容容容 <br/>通知内容通知内容通知内容容容</div>
                <el-card shadow="hover">
                  <div slot="header" class="clearfix">
                    <span>通知1：</span>
                    <span style="float: right; padding: 3px 0">2010/10/10</span>
                  </div>
                  <div class="">
                    通知内容通知内容通知内容容容。。。
                  </div>
                </el-card>
              </el-tooltip>

            </el-col>
            <el-col class="elcol-span2" :span="18">
              <div class="chat-box">
                <div class="chat-box-contentleft">

                  <div class="chat-box-contentleftimg">
                    <img src="../../assets/img/小黄鸡.png" alt="">
                  </div>
                  <span>你为什么这么可爱</span>
                  <span>12/18 12:12:07</span>

                </div>
                <div class="chat-box-contentleft">

                  <div class="chat-box-contentleftimg">
                    <img src="../../assets/img/小黄鸡.png" alt="">
                  </div>
                  <span>你为什么这么可爱</span>
                  <span>12/18 12:12:07</span>

                </div>

                <div class="chat-box-contentleft">

                  <div class="chat-box-contentleftimg">
                    <img src="../../assets/img/小黄鸡.png" alt="">
                  </div>
                  <span>你为什么这么可爱</span>
                  <span>12/18 12:12:07</span>

                </div>
                <div class="chat-box-contentleft">

                  <div class="chat-box-contentleftimg">
                    <img src="../../assets/img/小黄鸡.png" alt="">
                  </div>
                  <span>你为什么这么可爱</span>
                  <span>12/18 12:12:07</span>

                </div>
                <div class="chat-box-contentright">

                  <span>12/18 12:12:07</span>
                  <span>你为什么这么可爱</span>
                  <div class="chat-box-contentrightimg">
                    <img src="../../assets/img/小黄鸡.png" alt="">
                  </div>

                </div>
                <div class="chat-box-contentright">

                  <span>12/18 12:12:07</span>
                  <span>你为什么这么可爱</span>
                  <div class="chat-box-contentrightimg">
                    <img src="../../assets/img/小黄鸡.png" alt="">
                  </div>

                </div>
                <div class="chat-box-contentright">

                  <span>12/18 12:12:07</span>
                  <span>你为什么这么可爱</span>
                  <div class="chat-box-contentrightimg">
                    <img src="../../assets/img/小黄鸡.png" alt="">
                  </div>

                </div>
                <div class="chat-box-contentright">

                  <span>12/18 12:12:07</span>
                  <span>
                    你为什么这么可爱
                    <el-progress v-if="percentage == 100 ? false:true" :percentage="percentage" >
                    </el-progress>
                  </span>
                  <div class="chat-box-contentrightimg">
                    <img src="../../assets/img/小黄鸡.png" alt="">
                  </div>

                </div>

              </div>
              <div class="input-box">
                <div class="input-box-content" contentEditable="true">

                </div>
                <div class="input-box-option">
                  <el-button style="float:right" @click="open" size="small" icon="el-icon-folder-opened">上传文件</el-button>
                  <el-button style="float:right; margin-right:20px;"  @click="centerDialogVisible = true" type="primary" size="small"
                    icon="el-icon-s-promotion">发送</el-button>

                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-main>

    </el-container>
    <el-dialog
  title="打卡时间到！"
  :visible.sync="centerDialogVisible"
  width="30%"
  center>
  <div style=" text-align:center; font-size:18px;">17：17：23</div>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="centerDialogVisible = false">打 卡</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        percentage: 0,
        centerDialogVisible:false
      }
    },
    created() {
      setInterval(() => {
        if (this.percentage < 100) this.percentage += 10;

      }, 1000);
    },
    methods: {
      // 点击下拉菜单事件
      handleCommand(command) {
        // 清空token 跳转修页面
        window.sessionStorage.clear()
        if (command === '个人中心') {
          this.$router.push('/personalcenter')
        } else this.$router.push('/login')
      },
      open() {
        this.$confirm('文件上传失败！是否继续上传', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '上传成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '上传失败！'
          });
        });
      }
    },
  }
</script>

<style lang='less' scoped>
  .el-header {
    background: #fff;
    z-index: 100;
    box-shadow: 0 5px 7px 0px rgba(0, 0, 0, 0.1);
  }

  .home-aside {
    border-bottom: 3px solid rgba(35, 131, 240, .66);
    margin: 20px 20px 0 20px;
    padding: 0 0 10px 0;
    display: inline-block;
    width: 175px;

    span {
      font-size: 24px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.9);
      line-height: 60px;
      vertical-align: top;
      margin-left: 20px;
    }
  }

  .title {
    width: 200px;
    font-size: 14px;
    float: right;
    margin-top: 20px;
    text-align: center;
    line-height: 26px;
  }

  .img-user {
    float: right;
    margin-top: 10px;
    width: 62px;
    height: 62px;
    padding: 8px 13px;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
  }

  .el-main {
    background: url('../../assets/img/bg1.png') no-repeat;
    background-size: cover;
    background-position: center;
    height: 847px;
    position: relative;
  }

  // 主题内容
  .index-content {
    width: 78%;
    height: 90%;
    background: darkorange;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 1);


    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5)
  }

  .elcol-span1 {
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 25px;
    height: 100%;
  }

  .elcol-span2 {
    height: 100%;
  }

  .el-card {

    background: #f9fafc;
    width: 100%;
    cursor: pointer;
    margin-bottom: 20px;
  }

  .chat-box {
    margin-top: 20px;
    padding: 10px;
    height: 64%;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    overflow: auto;

  }

  .chat-box-contentleft {
    width: 100%;
    margin: 20px 0;

    .chat-box-contentleftimg {
      display: inline-block;
      width: 55px;
      height: 55px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.3);
      border-radius: 50%;
      box-sizing: border-box;
      padding: 5px 9px;
      margin-right: 20px;
      vertical-align: middle;
    }

    span:nth-of-type(1) {
      padding: 10px 20px;
      background: rgba(255, 255, 255, 1);
      border: 2px solid rgba(0, 0, 0, 0.5);
      opacity: 0.8;
      border-radius: 10px;
      max-width: 60%;
      margin-right: 20px;
      vertical-align: middle;
    }
  }

  .chat-box-contentright {
    margin: 20px 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;

    .chat-box-contentrightimg {
      width: 55px;
      height: 55px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.3);
      border-radius: 50%;
      box-sizing: border-box;
      padding: 5px 9px;
      margin-right: 20px;
      vertical-align: middle;
    }

    span:nth-of-type(2) {
      padding: 10px 20px;
      background: rgba(255, 255, 255, 1);
      border: 2px solid rgba(0, 0, 0, 0.5);
      opacity: 0.8;
      border-radius: 10px;
      margin-right: 20px;
      line-height: 30px;
      max-width: 60%;
      vertical-align: middle;
    }

    span:nth-of-type(1) {
      vertical-align: bottom;
      margin: 15px 20px 0 0;
    }
  }

  .input-box {
    height: 30%;
    padding: 20px;
  }

  .input-box-content {
    outline: none;
    font-size: 18px;
    overflow-y: auto;
    height: 65%;
  }
</style>