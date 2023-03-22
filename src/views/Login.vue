<template>
      <div>
            <header>
                  <h1>登录</h1>
                  <!-- <form>

                  </form> -->
                  <input type="text" v-model="username" placeholder="用户名" />
                        <input type="password" v-model="password" placeholder="密码" />
                        <button type="submit" @click="onSubmit">登录</button>
            </header>
      </div>
</template>

<script>
import { loginAPI } from '@/api/index'
// import { Encrypt } from '@/utils/cryptojs'
import JSEncrypt from 'jsencrypt/bin/jsencrypt'
import { publicKey } from '@/utils/publicKey'
export default {
  name: 'SystemLogin',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit () {
      const encryptor = new JSEncrypt()
      encryptor.setPublicKey(publicKey)
      const encryptedPassword = encryptor.encrypt(this.password)
      // const encryptedPassword = Encrypt(this.password, 'liaobingli No1.')
      console.log(encryptedPassword)
      const res = await loginAPI(this.username, encryptedPassword)
      console.log(res)
    }
  }

}
</script>

<style lang="less" scoped></style>
