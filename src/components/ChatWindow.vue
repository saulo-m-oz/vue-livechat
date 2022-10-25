<template>
  <div class="chat-window">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="documents" class="messages" ref="messages">
      <div v-for="doc in formattedMessages" :key="doc.id" class="single">
        <span class="created-at">{{ doc.createdAt }} ago</span>
        <span class="name">{{ doc.user }}:</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getCollection } from "@/composables/getCollection";
import { computed, onUpdated, ref } from "vue";
import { formatDistanceToNow } from "date-fns";

export default {
  setup() {
    const { error, documents } = getCollection("messages");
    const messages = ref(null);

    const formattedMessages = computed(() => {
        if (documents.value){
            return documents.value.map(message => {
                let time = formatDistanceToNow(message.createdAt.toDate());
                return {...message, createdAt: time}
            })
        }
    })

    onUpdated(() =>{
        messages.value.scrollTop = messages.value.scrollHeight;
    })

    return { error, documents, formattedMessages, messages };
  },
};
</script>

<style>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>
