<template>
  <div class="main">
    <div class="main-content">
      <div class="main-login">
        <div class="main-login-left">
          <img src="../assets/img/endlogin.png" alt="">
        </div>
        <div class="main-login-right">
          <div class="main-login-right-title">
            <img src="../assets/img/logo.png" alt="">
            <span>
              值班系统后台管理
            </span>
          </div>
          <el-form label-width="80px">
            <el-form-item label="用户名：">
              <el-input placeholder="输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码：">
              <el-input placeholder="输入密码"></el-input>
            </el-form-item>
             <el-form-item style="text-align:center">
            <el-button type="primary">登录</el-button>
            <el-button style="margin-left:40px;">重置</el-button>
          </el-form-item>
          </el-form>
         
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang='less' scoped>
  .mian {
    width: 100%;
    height: 100%;
    min-height: 1080px;
    position: relative;
  }

  .main-content {
    width: 100%;
    height: 937px;

    background: url('../assets/img/bg1.png') no-repeat;
    background-size: cover;
    background-position: center;
  }

  .main-login {
    display: flex;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 948px;
    height: 438px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 11px 16px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    .main-login-left {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 522px;
      height: 438px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 11px 16px 4px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
    }

    .main-login-right {
      flex-wrap: wrap;
      display: flex;
      width: 428px;
      height: 438px;
      justify-content: center;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 11px 16px 4px rgba(0, 0, 0, 0.25);
      border-radius: 0px 8px 8px 0px;
      box-sizing: border-box;
      padding: 40px;

      .main-login-right-title {
        display: flex;
        margin: 0;
        justify-content: center;
        width: 80%;
        height: 20%;

        img {
          height: 54px;
          width: 54px;
          margin-right: 20px;
          vertical-align: middle;
        }

        span {
          line-height: 50px;
        }
      }

      .el-form {
        .el-form-item {
          margin-bottom: 40px;
        }

        
      }
    }
  }
</style>