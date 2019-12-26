<template>
  <div>
    <el-container>
      <el-header height="90px" width="100%;">
        <div class="home-aside">
          <img src="../assets/img/logo.png" alt />
          <span>个人中心</span>
        </div>
        <div class="img-user">
          <div class="title">
            <div>当前在线人数22</div>
            <div>2019年12月12日 14:14:14</div>
          </div>
          <el-dropdown @command="handleCommand" class="img">
            <img style="cursor:pointer" src="../assets/img/小黄鸡.png" alt />
            <el-dropdown-menu slot="dropdown" :split-button="true">
              <el-dropdown-item command="个人中心">个人中心</el-dropdown-item>
              <el-dropdown-item command="退出登录">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
    </el-container>
    <div class="con">
      <div class="con-top">个人中心</div>
      <div class="con-bottom">
        <el-form ref="form" label-width="80px">
          <el-form-item label="用户名">
            <el-input style="width:269px;margin-bottom:30px;" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input style="width:269px" placeholder="请输入密码"></el-input>
          </el-form-item>
        </el-form>
        <div class="btn-group">
          <el-button type="primary" @click="dialogVisible = true">保存</el-button>
          <el-button type="primary">返回</el-button>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="456px">
      <div
        style="text-align:center;font-size:24px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(0,0,0,1);
margin-bottom:60px"
      >保存成功</div>
      <span slot="footer" class="dialog-footer">
        <div style="text-align:center">
          <el-button @click="dialogVisible = false" type="primary" style="margin-bottom:30px">返 回</el-button>
        </div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: "1",
      dialogVisible: false
    };
  },
  created() {},
  methods: {
    handleCommand(command) {
      // 清空token 跳转修页面
      window.sessionStorage.clear();
      if (command === "个人中心") {
        this.$router.push("/personalcenter");
      } else this.$router.push("/login");
    },
    return1() {
      this.$router.push("/index");
    },
    numTimes() {
      console.log(111);
    }
  }
};
</script>

<style lang='less' scoped>
.btn-group {
  margin-left: 130px;
  margin-top: 80px;
}
.con-bottom {
  padding-top: 100px;
  padding-left: 100px;
}
.con-top {
  width: 590px;
  height: 76px;
  background: rgba(38, 127, 194, 1);
  border-radius: 10px 10px 0px 0px;
  text-align: center;
  line-height: 76px;
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
.con {
  width: 590px;
  height: 506px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 11px 16px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 120px auto 0;
}
.img {
  position: relative;
  bottom: 70px;
}
.el-header {
  background: #fff;
  z-index: 100;
  box-shadow: 0 5px 7px 0px rgba(0, 0, 0, 0.1);
}

.home-aside {
  border-bottom: 3px solid rgba(35, 131, 240, 0.66);
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
  position: relative;
  right: 50px;
  bottom: 20px;
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
  background: #fff;
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
  .title {
    width: 200px;
    font-size: 14px;
    float: right;
    margin-top: 20px;
    text-align: center;
    line-height: 26px;
  }
}
</style>