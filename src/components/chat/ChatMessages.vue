<script setup lang="ts">
import type { ChatMessage } from '../../interfaces/chat-message.interface'
import ChatBubble from './ChatBubble.vue'

interface Props {
  messages: ChatMessage[]
}

defineProps<Props>()
</script>


<template>
  <div class="min-h-0 flex-1 overflow-y-auto bg-neutral-950 p-4 sm:p-6">
    <div class="flex flex-col gap-4">
      <ChatBubble
        v-for="message in messages"
        :key="message.id"
        v-bind="message"
      />
    </div>
  </div>
</template>


