<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="email" type="email" placeholder="Email" required />
    <input v-model="password" type="password" placeholder="Password" required />
    <div class="error">
        {{error}}
    </div>
    <button>Login</button>
  </form>  
</template>

<script>
import { ref } from 'vue';
import { useLogin } from '@/composables/Login';

export default {
    setup(props, context){

        const {error, login} = useLogin();

        const email = ref("");
        const password = ref("");

        const handleSubmit = async () => {
           console.log(await login(email.value, password.value));
           if (!error.value){
            context.emit("login")
           }
        }

        return {email, password, handleSubmit, error}
    }
}
</script>

<style>

</style>