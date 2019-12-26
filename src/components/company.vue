<template>
  <div class="main">
    <el-button type="primary" style="margin-right:25px" @click="dialogVisible2 = true">新增单位</el-button>
    <el-input placeholder="单位人 / 回复" v-model="search_con" style="width:302px;margin-bottom:20px">
      <i slot="suffix" class="el-input__icon el-icon-search"></i>
    </el-input>

    <!-- 下面是表格 -->
    <el-table
      :data="tableData"
      style="width: 100%"
      :header-cell-style="{background:'rgba(0,104,183,1)',color:'rgba(255,255,255,1)'}"
    >
      <el-table-column prop="date" label="单位" width="180"></el-table-column>
      <el-table-column prop="name" label="当前值班人" width="180"></el-table-column>
      <el-table-column prop="address" label="当前值班人员电话"></el-table-column>
      <el-table-column label="状态">
        <span class="sp">
          <i slot="suffix" class="el-input__icon el-icon-loading"></i>
          <span>离线</span>
        </span>
      </el-table-column>
      <el-table-column label="操作">
        <div style="font-size:30px">
          <i
            class="el-icon-edit"
            style="margin-right:10px;cursor:pointer"
            @click="dialogVisible3 = true"
          ></i>
          <i class="el-icon-share" style="cursor:pointer" @click="dialogVisible = true"></i>
        </div>
      </el-table-column>
    </el-table>
    <div style="text-align:center;margin-top:25px">
      <div class="block">
        <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </div>

    <!-- 删除提醒 -->
    <el-dialog
      title="修改单位"
      :visible.sync="dialogVisible"
      width="1280px"
      :el-dialog__header="{background:'rgba(0,104,183,1)',color:'rgba(255,255,255,1)'}"
    >
      <el-form ref="form" label-width="80px" style="margin-left:400px">
        <el-form-item label="单位名：">
          <el-input style="width:300px" placeholder="请输入单位名"></el-input>
        </el-form-item>
        <el-form-item label="用户名：">
          <el-input style="width:300px" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input style="width:300px" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <div style="text-align:center">注:用户名不可修改，密码输入则修改，不输入则不修改</div>
      <span slot="footer" class="dialog-footer">
        <div style="text-align:center">
          <el-button @click="dialogVisible = false">确 认</el-button>
          <el-button type="primary" @click="dialogVisible = false">重 置</el-button>
        </div>
      </span>
    </el-dialog>

    <!-- 新增单位的弹出框 -->
    <el-dialog
      title="新增单位"
      :visible.sync="dialogVisible2"
      width="1280px"
      :el-dialog__header="{background:'rgba(0,104,183,1)',color:'rgba(255,255,255,1)'}"
    >
      <el-form ref="form" label-width="80px" style="margin-left:400px">
        <el-form-item label="单位名：">
          <el-input style="width:300px" placeholder="请输入单位名"></el-input>
        </el-form-item>
        <el-form-item label="用户名：">
          <el-input style="width:300px" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input style="width:300px" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <div style="text-align:center;height:30px"></div>
      <span slot="footer" class="dialog-footer">
        <div style="text-align:center">
          <el-button @click="dialogVisible2 = false">确 认</el-button>
          <el-button type="primary" @click="dialogVisible2 = false">重 置</el-button>
        </div>
      </span>
    </el-dialog>

    <!-- 新增通知 -->
    <el-dialog
      title="新增单位"
      :visible.sync="dialogVisible3"
      width="1280px"
      :el-dialog__header="{background:'rgba(0,104,183,1)',color:'rgba(255,255,255,1)'}"
    >
      <el-form ref="form" label-width="100px" style="margin-left:300px">
        <el-form-item label="单位名：">
          <span>项目组</span>
        </el-form-item>
        <el-form-item label="通知标题：">
          <el-input style="width:300px" placeholder="请输入本次通知的标题"></el-input>
        </el-form-item>
        <el-form-item label="通知内容：">
          <el-input type="textarea" style="width:500px;"></el-input>
        </el-form-item>
      </el-form>
      <div style="text-align:center;height:30px"></div>
      <span slot="footer" class="dialog-footer">
        <div style="text-align:center">
          <el-button @click="dialogVisible = false">保存</el-button>
          <el-button type="primary" @click="dialogVisible3 = false">清空</el-button>
        </div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search_con: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      dialogVisible: false,
      dialogVisible2: false,
      dialogVisible3: false
    };
  },
  methods: {}
};
</script>


<style scoped>
.main {
  min-height: 260px;
  width: 1280px;
  margin: 20px auto 0;
}
.sp {
  font-size: 16px;
  background-color: #ccc;
  padding: 5px 14px;
  border-radius: 10px;
}
</style>