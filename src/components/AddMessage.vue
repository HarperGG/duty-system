<template>
  <div class="container">
    <div class="c-title">新增通知</div>
    <div class="c-content">
      <el-form
        ref="form"
        :label-position="labelPosition"
        label-width="50px"
        :model="formLabelAlign"
      >
        <el-form-item label="标题">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="对象">
          <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input type="textarea" v-model="formLabelAlign.desc"></el-input>
        </el-form-item>
      </el-form>
      <div class="operation">
        <el-button @click="goback" size="small">发送</el-button>
        <el-button @click="show" size="small">取消</el-button>
      </div>
    </div>

    <div v-if="isShow" class="c-send">
      <div class="row">
        <h4 class="title">请选择单位</h4>
        <el-checkbox v-model="checked1" label="全选" border></el-checkbox>
        <el-checkbox v-model="checked2" label="甲" border></el-checkbox>
        <el-checkbox v-model="checked2" label="乙" border></el-checkbox>
        <el-checkbox v-model="checked2" label="丙" border></el-checkbox>
      </div>
      <div class="row">
        <h4 class="title">已选择</h4>
        <el-checkbox v-model="checked1" label="乙" border></el-checkbox>
      </div>
      <div class="operation">
        <el-button>确定</el-button>
        <el-button @click="goback">取消</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  width: 900px;
  height: 430px;
  background: rgba(255, 255, 255, 1);
  border-radius: 5px;
  margin-top: 100px;
  margin-left: 200px;
  position: relative;
}
.c-title {
  background-color: #0068b7;
  height: 30px;
  color: white;
  padding: 5px 10px;
}
.operation {
  margin-top: 15px;
  display: flex;
  justify-content: center;
}
.operation .el-button {
  background-color: #267fc2;
  color: white;
}
.el-form {
  width: 50%;
  margin-top: 80px;
  margin-left: 200px;
}
.c-send {
  width: 400px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 11px 16px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 30px;
  position: relative;
  top: -200px;
  left: 180px;
  z-index: 100;
}
.c-send .row {
  width: 350px;
  padding-left: 10px;
}
.el-checkbox {
  margin-bottom: 13px;
}
</style>

<script>
export default {
  data() {
    return {
      labelPosition: "left",
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
        desc: "",
      },
        isShow: false

    }
  },
  methods: {
      goback(){
          this.isShow = !this.isShow
      },
      show(){
          this.$router.go(-1)
      }
  }
}
</script>