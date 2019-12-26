<template>
  <div>

    <el-container>
      <el-header height="90px" width="100%;">
        <div class="home-aside">
          <img src="../../assets/img/logo.png" alt="">
          <span>个人中心</span>
        </div>
        <div class="img-user">

          <el-dropdown @command="handleCommand">
            <img style="cursor:pointer" src="../../assets/img/小黄鸡.png" alt="">
            <el-dropdown-menu slot="dropdown" :split-button="true">
              <el-dropdown-item command="个人中心">个人中心</el-dropdown-item>
              <el-dropdown-item command="退出登录">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-main>
        <div class="index-content">
          <div class="index-content-title">
            <span>个人中心</span>
          </div>
          <el-form label-width="150px">
            <el-form-item label="用户名">
              <el-input placeholder="username" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="单位">
              <el-input placeholder="username" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="本次值班人员">
              <el-input :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="本次值班人员电话">
              <el-input :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="离岗次数:" style="cursor:pointer;" >
              <el-popover  placement="bottom" title="离岗次数" width="300" trigger="click"
                content="2018/50/19：未打卡一次">
                <el-button style="width:339px;" slot="reference">1次</el-button>
              </el-popover>
            </el-form-item>
            <el-form-item style="margin-left:100px">
              <el-button @click="return1" type="primary">返回</el-button>
            </el-form-item>

          </el-form>
        </div>
      </el-main>

    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        num: '1'
      }
    },
    created() {

    },
    methods: {
      handleCommand(command) {
        // 清空token 跳转修页面
        window.sessionStorage.clear()
        if (command === '个人中心') {
          this.$router.push('/personalcenter')
        } else this.$router.push('/login')
      },
      return1() {
        this.$router.push('/index')
      },
      numTimes() {
        console.log(111);
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
    min-height: 847px;
    position: relative;
  }

  .index-content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 590px;
    height: 678px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 11px 16px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    .index-content-title {
      width: 590px;
      height: 52px;
      background: rgba(38, 127, 194, 1);
      border-radius: 10px 10px 0px 0px;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        font-size: 24px;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);

      }
    }

    .el-form {
      width: 100%;
      height: 90%;
      margin-top: 40px;
      box-sizing: border-box;
      padding: 0 60px 0 40px;

      .el-form-item {

        margin-bottom: 40px;
      }

    }
  }
</style>