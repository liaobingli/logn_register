<template>
      <div>
            <header>
                  <h1>注册</h1>
                  <input type="text" v-model="username" placeholder="用户名" />
                        <input type="password" v-model="password" placeholder="密码" />
                        <button type="submit" @click="onSubmit">注册</button>
                  <!-- <form >

                  </form> -->
            </header>
      </div>
</template>

<script>
// import CryptoJS from 'crypto-js'
import JSEncrypt from 'jsencrypt/bin/jsencrypt'
import { publicKey } from '@/utils/publicKey'
import { registerAPI } from '@/api/index'
// import { Encrypt } from '@/utils/cryptojs'
export default {
  name: 'system-register',
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
      // console.log(encryptedPassword)
      const res = await registerAPI(this.username, encryptedPassword)
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped></style>
