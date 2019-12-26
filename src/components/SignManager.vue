<template>
  <div class="container">
      <div class="top">
        <el-page-header @back="goBack" content="打卡管理"></el-page-header>
      </div>
    <div @click="show" class="c-button">
      <el-button class="button">打卡设置</el-button>
    </div>
    <div class="c-form">
      <el-table
        :data="tableData"
        style="width: 100%"
        :header-cell-style="{color: 'white', backgroundColor: '#267fc2', textAlign: 'center'}"
        :cell-style="{textAlign: 'center'}"
      >
        <el-table-column prop="cell" label="单位" width="220"></el-table-column>
        <el-table-column prop="name" label="当前值班人员" width="220"></el-table-column>
        <el-table-column prop="num" label="当前值班人员电话" width="220"></el-table-column>
        <el-table-column prop="times" label="24小时内离线次数" width="220"></el-table-column>
        <el-table-column prop="time" label="最近打卡时间" width="220"></el-table-column>
        <el-table-column prop="address" width="220" label="状态">
          <div class="status">在线</div>
        </el-table-column>
      </el-table>
      <div class="c-page">
        <el-pagination background layout="prev, pager, next" :total="50"></el-pagination>
      </div>
    </div>
    <div v-if="isShow" class="card-setting">
      <el-card class="box-card" :body-style="{padding: '20px 30px'}">
        <div slot="header" class="clearfix">
          <span>打卡设置</span>
        </div>
        <div class="select">
          <div class="start">
            值班开始时间：
            <el-time-select
              v-model="value"
              :picker-options="{start: '08:30',step: '00:15',end: '18:30'}"
              placeholder="选择时间"
            ></el-time-select>
          </div>
          <div class="end">
            值班结束时间：
            <el-time-select
              v-model="value"
              :picker-options="{start: '08:30',step: '00:15',end: '18:30'}"
              placeholder="选择时间"
            ></el-time-select>
          </div>
        </div>
        <div class="sign-jg">
          <el-radio v-model="radio" label="1">间隔打卡</el-radio>
          <div class="dec">
            每隔
            <el-input class="time" size="mini" v-model="input"></el-input>分钟，打一次卡
          </div>
        </div>
        <div class="sign-ds">
          <el-radio v-model="radio" label="1">定时打卡</el-radio>
          <div class="dec">
            共打卡
            <el-input class="time" size="mini" v-model="input"></el-input>次
          </div>
        </div>
        <div class="select-time">
          <el-time-select
            v-model="value"
            :style="{width: '100px'}"
            :picker-options="{start: '08:30',step: '00:15',end: '18:30'}"
            placeholder="选择时间"
          ></el-time-select>
          <el-time-select
            v-model="value"
            :style="{width: '100px'}"
            :picker-options="{start: '08:30',step: '00:15',end: '18:30'}"
            placeholder="选择时间"
          ></el-time-select>
          <el-time-select
            v-model="value"
            :style="{width: '100px'}"
            :picker-options="{start: '08:30',step: '00:15',end: '18:30'}"
            placeholder="选择时间"
          ></el-time-select>
        </div>
        <div class="operation">
          <el-button size="small">确定</el-button>
          <el-button @click="show" size="small">取消</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<style lang="less" scoped>
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
.status {
  margin-left: 25px;
  width: 86px;
  height: 24px;
  background: rgba(35, 131, 240, 1);
  border-radius: 10px;
  color: white;
}
// 卡片
.card-setting {
  position: absolute;
  z-index: 100;
  left: 50%;
  transform: translateX(-50%);
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix {
  text-align: center;
  background-color: #267fc2;
  padding: 0;
  color: white;
  font-size: 24px;
  padding: 20px 0;
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}

.start {
  margin-bottom: 20px;
  margin-top: 25px;
}
.sign-jg {
  margin-bottom: 10px;
}
.time {
  width: 70px;
}
.dec {
  margin-top: 15px;
  margin-left: 20px;
}
.select-time {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
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
</style>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          cell: "c1",
          name: "李忠义",
          num: 18284825758,
          times: 3,
          time: "2019年12月19日 14:10:04"
        },
        {
          cell: "c1",
          name: "李忠义",
          num: 18284825758,
          times: 3,
          time: "2019年12月19日 14:10:04"
        },
        {
          cell: "c1",
          name: "李忠义",
          num: 18284825758,
          times: 3,
          time: "2019年12月19日 14:10:04"
        },
        {
          cell: "c1",
          name: "李忠义",
          num: 18284825758,
          times: 3,
          time: "2019年12月19日 14:10:04"
        },
        {
          cell: "c1",
          name: "李忠义",
          num: 18284825758,
          times: 3,
          time: "2019年12月19日 14:10:04"
        },
        {
          cell: "c1",
          name: "李忠义",
          num: 18284825758,
          times: 3,
          time: "2019年12月19日 14:10:04"
        }
      ],
      isShow: false,
      radio: "1",
      input: "60",
      value: "10:30"
    };
  },
  methods: {
    show() {
      this.isShow = !this.isShow;
    },
    goBack(){
      console.log('haha')
    }
  }
};
</script>