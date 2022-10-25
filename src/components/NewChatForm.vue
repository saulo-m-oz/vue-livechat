<template>
  <form @submit.prevent="handleSubmit">
    <textarea
      @keypress.enter.prevent="handleSubmit"
      placeholder="Insert message"
      v-model="message"
    ></textarea>
    <div class="error">
        {{error}}
    </div>
    <button>Send</button>
  </form>
</template>

<script>
import { getUser } from "@/composables/getUser";
import { ref } from "vue";
import { timestamp } from "@/firebase/config";
import { useCollection } from "@/composables/Collection";

export default {
  setup() {
    const { error, addDoc } = useCollection("messages");
    const { user } = getUser();
    const message = ref("");

    async function handleSubmit() {
      const chat = {
        message: message.value,
        user: user.value.displayName,
        createdAt: timestamp(),
      };

      await addDoc(chat);
      if (!error.value) message.value = "";
    }
    return { message, handleSubmit, error, addDoc };
  },
};
</script>

<style scoped>
form {
  display: flex;
  align-items: center;
  margin: 10px auto;
  width: 100%;
  padding: 3px;
  max-width: 720px;
}
textarea {
  margin: 0 auto;
  width: calc((100% - 46px) - 10px);
  padding: 2px;
  border: none;
  border-radius: 10px;
  font-family: inherit;
  resize: none;
  outline: 0;
}
button{
    padding: 20px 40px;
}
</style>
