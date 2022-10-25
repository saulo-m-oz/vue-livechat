<template>
  <form @submit.prevent="handleSubmit">
    <input
      v-model="displayName"
      type="text"
      placeholder="Display Name"
      required
    />
    <input v-model="email" type="email" placeholder="Email" required />
    <input v-model="password" type="password" placeholder="Password" required />
    <div class="error">
      {{ error }}
    </div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useSignup } from "@/composables/Signup";

export default {
  setup(props, context) {
    const { error, signup } = useSignup();

    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value);
      if (!error.value) {
        context.emit("signup");
      }
    };

    return { displayName, error, email, password, handleSubmit };
  },
};
</script>

<style></style>
