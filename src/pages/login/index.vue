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
      <el-button type="primary" class="btn" @click="login">登录</el-button>
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
    login() {
      if (!this.username.trim() || !this.password.trim())
        return this.$message({
          showClose: true,
          message: "请输入用户名和密码",
          type: "warning"
        });
      this.$axios
        .post("/users/login", {
          username: this.username,
          password: this.password
        })
        .then(result => {
          // console.log(result);
          localStorage.setItem("token", result.data.data.token);
          this.$message({
            showClose: true,
            message: result.data.succMsg,
            type: "success"
          });
          this.$router.push("/home");
        })
        .catch(err => {
          this.$message({
            showClose: true,
            message: err.response.data.errMsg,
            type: "error"
          });
        });
    }
  }
};
</script>

<style lang="less" scoped>
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
  .btn {
    display: block;
    margin: 0 auto;
  }
}
</style>
