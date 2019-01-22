<template>
  <div class="home-container">
    <el-row class="tac">
      <el-col :span="4">
        <el-menu default-active="1-1" class="el-menu-vertical-demo">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">所有收货人信息</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20" class="info">
        <el-table :data="receiverInfo" style="width: 100%">
          <el-table-column label="配送信息">
            <el-table-column prop="receiver_name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="mobile" label="手机" width="120"></el-table-column>
            <el-table-column label="地址">
              <el-table-column prop="province" label="省份" width="120"></el-table-column>
              <el-table-column prop="city" label="市区" width="120"></el-table-column>
              <el-table-column prop="area" label="区/镇" width="120"></el-table-column>
              <el-table-column prop="detailed_address" label="详细地址" width="300"></el-table-column>
              <el-table-column prop="postcode" label="邮编" width="120"></el-table-column>
            </el-table-column>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      receiverInfo: []
    };
  },
  created() {
    this.getReceiverAddress();
  },
  methods: {
    getReceiverAddress() {
      let token = localStorage.getItem("token");
      this.$axios
        .get("users/getReceiverAddress", {
          headers: { Authorization: token }
        })
        .then(result => {
          // console.log(result.data);
          this.receiverInfo = result.data.data;
        })
        .catch(err => {
          console.dir(err);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.home-container {
  .el-menu {
    border: 0;
  }
  .info {
    padding: 60px;
  }
}
</style>
