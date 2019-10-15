<template>
  <div>
    <Person>
      <template slot-scope="scope">
        <div
          :style="{color: scope.row.age > 18 ?'green' : 'red'}"
        >{{scope.row.username}} ---- {{scope.row.age}}</div>
      </template>
    </Person>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper,->"
        :total="400"
      ></el-pagination>
      <span class="pageDi">第{{num1}}/{{num}}页</span>
    </div>
  </div>
</template>

<script>
import Person from "../components/slot/slot1";
export default {
  data() {
    return {
      num1: 1,
      num: 10,
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
        }
      ]
    };
  },
  components: {
    Person
  },
  methods: {
    handleCurrentChange(val) {
      this.num1 = val;
    }
  }
};
</script>

<style scoped>
.block {
  position: relative;
}
/deep/ .el-pagination__total {
  margin-right: 200px;
}
/deep/ .el-pagination__sizes {
  position: absolute;
  left: 500px;
  /* margin-left: -30px; */
}
/* /deep/ .el-pagination__jump {
  position: absolute;
  left: 700px;
} */
/deep/ .el-input__inner {
  border: 0;
}
.pageDi {
  position: absolute;
  top: 7px;
  left: 80px;
  font-size: 13px;
  min-width: 35.5px;
  color: #606266;
}
</style>

<style>
 .el-pagination__jump {
  position: absolute;
  left: 700px;
}
</style>