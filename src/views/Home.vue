<template>
      <div>
            <nav>
                  <ul>
                        <li><router-link to="/">首页</router-link></li>
                        <li><router-link to="/login">登录</router-link></li>
                        <li><router-link to="/register">注册</router-link></li>
                  </ul>
            </nav>
            <router-view></router-view>
      </div>
</template>

<script>
// import Login from './Login.vue'
export default {
  name: 'AuthView',
  components: {
    //     Login
  }
}
</script>

<style lang="less" scoped></style>
