<template>
  <div class="welcome container">
    <div v-if="showLogin">
      <h1>Login</h1>
      <LoginFormVue @login="enterChat" />
      <p>Not registered yet? <span @click="showLogin = false">Signup</span></p>
    </div>
    <div v-else>
        <h1>Register</h1>
      <SignupFormVue @signup="enterLogin" />
      <p>Already registered? <span @click="showLogin = true">Login</span></p>
    </div>
  </div>
</template>

<script>
import SignupFormVue from "@/components/SignupForm.vue";
import LoginFormVue from "@/components/LoginForm.vue";
import { ref } from "vue";
import { useRouter } from 'vue-router';

export default {
  components: {
    SignupFormVue,
    LoginFormVue,
  },
  setup() {
    const showLogin = ref(true);
    const router = useRouter();

    function enterChat(){
      router.push({name: 'Chatroom'})
    }

    function enterLogin(){
      showLogin.value = true;
    }

    return { showLogin, enterChat, enterLogin };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 15px 10px;
  border-radius: 5px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span{
    font-weight: bold;
    cursor: pointer;
    color: #5ae4ca;
}
.welcome span:hover{
    color: #4ec7b1;
}
.welcome button{
    margin: 20px auto;
    width: 100%;
}
</style>
