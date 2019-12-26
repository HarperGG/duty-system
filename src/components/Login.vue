<template>
  <div class="main">
    <div class="main-content">
      <div class="main-login">
        <div class="main-login-tile">
          <img src="../assets/img/logo.png" alt="">
          <span>值班系统</span>
        </div>
        <div class="main-login-input">
          <el-form label-width="80px">
            <el-form-item label="姓名：">
              <el-input  placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="名称：">
              <el-input placeholder="请输入名称"></el-input>
            </el-form-item>
            <el-form-item style="text-align:center">
              <el-button  type="primary" @click="onSubmit">确定</el-button>
              <el-button style="margin-left:80px;">重置</el-button>
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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 530px;
    height: 530px;
    background: rgba(255, 255, 255, 1);
    border: 3px solid rgba(255, 255, 255, 1);
    border-radius: 50%;

    .main-login-tile {
      display: flex;
      margin: 0 auto;
      justify-content: center;
      align-items: center;
      margin-top: 40px;
      height: 20%;
      width: 80%;
      border-bottom: 3px solid rgba(0, 0, 0, 0.1);

      img {
        width: 54px;
        height: 54px;
        display: inline-block;
        vertical-align: middle;
      }

      span {
        margin-left: 20px;
        vertical-align: middle;
        font-size: 20px;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.82);
      }
    }

    .main-login-input {
      display: block;
      height: 70%;
      width: 80%;
      margin: 0 auto;
      padding: 60px 0 0 40px;

      .el-form {
        width: 80%;
      }
    }

    .el-form-item{
      margin-bottom: 50px;
    }

  }
</style>