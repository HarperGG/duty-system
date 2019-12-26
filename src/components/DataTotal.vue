<template>
  <div class="container">
    <div class="top">
      <el-page-header @back="goBack" content="数据统计"></el-page-header>
    </div>
    <div class="c-button">
      <el-button @click="add" class="button">导出数据</el-button>
      <el-input
        :style="{width: '200px',marginLeft: '10px'}"
        placeholder="请输入内容"
        suffix-icon="el-icon-zoom-in"
        v-model="input1"
      ></el-input>
    </div>
    <div class="c-form">
      <el-table
        :data="tableData"
        style="width: 100%"
        :header-cell-style="{color: 'white', backgroundColor: '#267fc2', textAlign: 'center'}"
        :cell-style="{textAlign: 'center'}"
      >
        <el-table-column prop="num" label="序号" width="200"></el-table-column>
        <el-table-column prop="cell" label="单位" width="220"></el-table-column>
        <el-table-column prop="phone" label="当前值班人员电话" width="220"></el-table-column>
        <el-table-column prop="total_times" label="总打卡次数" width="220"></el-table-column>
        <el-table-column prop="leave_time" label="离岗次数" width="220"></el-table-column>
        <el-table-column prop="rate" label="出勤率" width="220"></el-table-column>
      </el-table>
      <div class="c-page">
        <el-pagination background layout="prev, pager, next" :total="50"></el-pagination>
      </div>
    </div>
  </div>
</template>

<style lang="less" scope>
.container {
  position: relative;
  height: 100%;
}
.c-button {
  position: absolute;
  top: 50px;
  left: 150px;
}
.button {
  background-color: #267fc2;
  color: white;
}
.c-form {
  position: absolute;
  top: 120px;
  left: 150px;
}
.c-page {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>

<script>
export default {
  data() {
    return {
      input1: "",
      tableData: [
        {
          num: "1",
          cell: "项目组",
          phone: "18284825758",
          total_times: 3,
          leave_time: 1,
          rate: "100%"
        },
        {
          num: "1",
          cell: "项目组",
          phone: "18284825758",
          total_times: 3,
          leave_time: 1,
          rate: "100%"
        },
        {
          num: "1",
          cell: "项目组",
          phone: "18284825758",
          total_times: 3,
          leave_time: 1,
          rate: "100%"
        },
        {
          num: "1",
          cell: "项目组",
          phone: "18284825758",
          total_times: 3,
          leave_time: 1,
          rate: "100%"
        },
        {
          num: "1",
          cell: "项目组",
          phone: "18284825758",
          total_times: 3,
          leave_time: 1,
          rate: "100%"
        },
        {
          num: "1",
          cell: "项目组",
          phone: "18284825758",
          total_times: 3,
          leave_time: 1,
          rate: "100%"
        }
      ]
    };
  },
  methods: {
    add() {
      this.$router.push({ name: "addMessage" });
    },
    goBack(){
      console.log('ha')
    }
  }
};
</script>