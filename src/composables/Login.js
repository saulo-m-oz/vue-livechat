import { ref } from "vue";
import { projectAuth } from "@/firebase/config";

const error = ref(null);

const login = async (email, password) => {
  error.value = null;
  try {

    const res = await projectAuth.signInWithEmailAndPassword(email, password);

    if (!res) throw new Error("Could not complete signup.");

    error.value = null;

    return res;

  } catch (err) {

    console.error(err.message);
    error.value = "Invalid email/password.";
    
  }

};

export const useLogin = () => {
  return { error, login };
};
