<template>
  <div class="main">
    <el-input
    placeholder="单位人 / 回复"
    v-model="search_con"
    style="width:302px;margin-bottom:20px">
    <i slot="suffix" class="el-input__icon el-icon-search"></i>
  </el-input>


  <!-- 下面是表格 -->
   <el-table
      :data="tableData"
      style="width: 100%"
      :header-cell-style="{background:'rgba(0,104,183,1)',color:'rgba(255,255,255,1)'}"
      >
      <el-table-column
        prop="date"
        label="单位"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="是否回复"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="最新回复人">
      </el-table-column>
         <el-table-column
        prop="address"
        label="最新回复时间">
      </el-table-column>
         <el-table-column
        label="操作">
      <div style="font-size:30px">
        <i class="el-icon-edit" style="margin-right:10px;cursor:pointer" @click="jump"></i>
         <i class="el-icon-share"  style="cursor:pointer" @click="dialogVisible = true"></i>
      </div>
      </el-table-column>
    </el-table>
    <div style="text-align:center;margin-top:25px">
      <div class="block">
  <el-pagination
    layout="prev, pager, next"
    :total="1000">
  </el-pagination>
</div>
    </div>


    <!-- 删除提醒 -->
    <el-dialog
  title="删除提示"
  :visible.sync="dialogVisible"
  width="30%">
  <span>确认删除吗？</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search_con:'',
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
          dialogVisible:false,
    }
  },
  methods: {
    jump(){
     this.$router.push('/talk');
    }
  },
};
</script>


<style scoped>
.main{
  min-height: 260px;
  width: 1280px;
 margin: 20px auto 0;
}

</style>