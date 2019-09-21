<template>
  <div>
    <Person>
      <template slot-scope="scope">
        <div
          :style="{color: scope.row.age > 18 ?'green' : 'red'}"
        >{{scope.row.username}} ---- {{scope.row.age}}</div>
      </template>
    </Person>

    <div class="block">
      <span class="demonstration">完整功能</span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper,->"
        :total="400"
      ></el-pagination>
      <span class="pageDi">第1/1页</span>
    </div>
  </div>
</template>

<script>
import Person from "../components/slot/slot1";
export default {
  data() {
    return {};
  },
  components: {
    Person
  }
};
</script>

<style scoped>
    /deep/ .el-pagination__total {
    margin-right: 200px;

    }
   /deep/ .el-pagination__sizes {
       position: absolute;
       left: 500px;
       /* margin-left: -30px; */
    }
    /deep/ .el-pagination__jump {
         position: absolute;
            left: 700px;
        
    }
    /deep/ .el-input__inner {
        border: 0;
    }
    .pageDi {
        position: absolute;
        top: 123px;
        left: 80px;
        font-size: 13px;
        min-width: 35.5px;
        color: #606266;
    }
</style>