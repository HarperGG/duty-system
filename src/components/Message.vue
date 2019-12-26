<template>
  <div class="container">
    <div class="top">
      <el-page-header @back="goBack" content="通知公告"></el-page-header>
    </div>
    <div class="c-button">
      <el-button @click="add" class="button">新增公告</el-button>
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
        <el-table-column prop="title" label="标题" width="400"></el-table-column>
        <el-table-column prop="content" label="内容" width="500"></el-table-column>
        <el-table-column prop="time" label="时间" width="500"></el-table-column>
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
          title: "c1",
          content: "李忠义",
          time: "2019年12月19日 14:10:04"
        },
        {
          title: "c1",
          content: "李忠义",
          time: "2019年12月19日 14:10:04"
        },
        {
          title: "c1",
          content: "李忠义",
          time: "2019年12月19日 14:10:04"
        },
        {
          title: "c1",
          content: "李忠义",
          time: "2019年12月19日 14:10:04"
        },
        {
          title: "c1",
          content: "李忠义",
          time: "2019年12月19日 14:10:04"
        },
        {
          title: "c1",
          content: "李忠义",
          time: "2019年12月19日 14:10:04"
        }
      ]
    };
  },
  methods: {
    add() {
      this.$router.push({ name: "addMessage" });
    },
    goBack(){
      console.log('hah')
    }
  }
};
</script>