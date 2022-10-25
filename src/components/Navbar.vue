<template>
  <nav v-if="user" class="nav-bar">
    <div>
      <h1>Hey there... {{user.displayName}}</h1>
      <p class="email">Currently logged in as... {{user.email}}</p>
    </div>
    <button @click="handleLogout">Logout</button>
  </nav>
</template>

<script>
import { useLogout } from '@/composables/Logout';
import { getUser } from '@/composables/getUser';

export default {
  setup(props, context){
    const {error, logout} = useLogout();
    const {user} = getUser();

    async function handleLogout(){
      await logout();
      if (!error.value){
        context.emit("logout");
      }
    }

    return {error, handleLogout, user}

  }
};
</script>

<style>
    .nav-bar{
        padding: 20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav-bar h1{
        color: #5ae4ca;
    }
    .nav-bar p{
        margin: 2px auto;
        font-size: 16px;
        color: #444;
    }
    .nav-bar p.email{
        font-size: 14px;
        color: #999;
    }
    .nav-bar button{
        padding: 15px 30px;
    }
</style>
