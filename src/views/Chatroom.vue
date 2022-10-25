<template>
  <Navbar @logout="handleLogout" />
  <div class="chat-container">
    <p class="room-name">Chatroom</p>
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import router from "@/router";
import NewChatForm from "@/components/NewChatForm.vue";
import ChatWindow from "@/components/ChatWindow.vue";

export default {
  components: {
    Navbar,
    NewChatForm,
    ChatWindow
  },
  setup(){

    function handleLogout(){
      router.push({name: "Welcome"})
    }
    
    return {handleLogout}
  }
};
</script>

<style>
  .room-name{
    padding: 10px;
  }
</style>
