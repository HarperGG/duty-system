<template>

  <el-container>
    <el-aside width="245px">
      <div class="home-aside">
        <img src="../assets/img/logo.png" alt="">
        <span>值班后台</span>
      </div>
      <el-row class="home-menu">
        <el-col :span="12">
          <el-menu router default-active="1" class="el-menu-vertical-demo" width='245px;'>
            <el-menu-item index="/sign">
              <i class="el-icon-menu"></i>
              <span slot="title">打卡管理</span>
            </el-menu-item>
            <el-menu-item index="/msg">
              <i class="el-icon-document"></i>
              <span slot="title">消息通知</span>
            </el-menu-item>
            <el-menu-item index="/company">
              <i class="el-icon-setting"></i>
              <span slot="title">单位管理</span>
            </el-menu-item>
            <el-menu-item index="/message">
              <i class="el-icon-setting"></i>
              <span slot="title">通知公告</span>
            </el-menu-item>
            <el-menu-item index="/dataTotal">
              <i class="el-icon-setting"></i>
              <span slot="title">数据统计</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <el-container>
      <el-header height="90px">
         <div class="img-user">
          <el-dropdown @command="gowhere">
            <span class="el-dropdown-link">
              <img src="../assets/img/小黄鸡.png" alt style="cursor:pointer" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">退出</el-dropdown-item>
              <el-dropdown-item command="b">个人中心</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="title">
          <div>当前在线人数22</div>
          <div>2019年12月12日 14:14:14</div>
        </div>

      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>
<script>
  export default {
    // 组件私有数据
    data() {
      return {

      }
    },
    // 生命周期函数
    created() {

    },
    methods: {
 gowhere(com) {
      if (com == "b") {
       this.$router.push('/person');
      }
    }
    }
  }
</script>
<style lang="less" scoped>
  .el-main {
    background: rgba(238, 238, 238, 1);
  }

  .el-header,
  .el-aside {
    background: #fff;
  }
 .el-header{
   z-index: 100;
   box-shadow: 0 5px 7px 0px rgba(0, 0, 0, 0.1);
 }

.el-aside {
  box-shadow: 5px 0 7px 0px rgba(0, 0, 0, 0.1);
  z-index: 100;
  height: 937px;
}
  .home-aside {
    border-bottom: 3px solid rgba(35, 131, 240, .66);
    margin: 20px 20px 0 20px;
    padding: 0 0 10px 0;
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
    margin-top: 20px;
    width: 62px;
    height: 62px;
    padding: 8px 13px;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
    border-radius: 50%;

  }

  .el-col {
    width: 100%;
    text-align: center;
    margin-top: 40px;
  }

  .el-menu {

    font-size: 18px !important;
    font-weight: 400;
    line-height: 64px;
    border: 0;

    .el-menu-item {
      font-size: 18px !important;
      font-weight: 400;
    }
  }
</style>