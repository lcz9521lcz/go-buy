<template>
  <div class="login-container">
    <h1 class="title">登录</h1>
    <el-form :label-position="labelPosition" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="password"></el-input>
      </el-form-item>
      <el-button type="primary" center="true" @click="login">立即创建</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "right",
      username: "",
      password: ""
    };
  },
  methods: {
    login() {}
  }
};
</script>

<style lang="less">
.login-container {
  width: 500px;
  margin: 100px auto;
  border: 1px solid #ccc;
  border-radius: 13px;
  box-shadow: 0 0 11px #ccc;
  padding: 33px;
  .title {
    text-align: center;
    margin: 22px 0;
    font-size: 26px;
    font-weight: 700;
  }
}
</style>
