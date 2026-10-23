<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  sendMessage: [text: string]
}>()

const message = ref('')

const sendMessage = () => {
  const text = message.value.trim()

  if (!text) return

  emit('sendMessage', text)
  message.value = ''
}
</script>

<template>
  <div
    class="flex items-center gap-3 border-t border-neutral-800
           bg-neutral-900 p-4"
  >
    <input
      v-model="message"
      type="text"
      placeholder="Escribe un mensaje..."
      class="min-w-0 flex-1 rounded-full border border-neutral-700
             bg-neutral-800 px-5 py-3 text-white outline-none
             placeholder:text-neutral-500
             focus:border-red-600 focus:ring-1 focus:ring-red-600"
      @keydown.enter="sendMessage"
    />

    <button
      type="button"
      aria-label="Enviar mensaje"
      class="flex h-12 w-12 shrink-0 items-center justify-center
             rounded-full bg-red-600 text-white transition
             hover:bg-red-700 active:scale-95"
      @click="sendMessage"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M22 2 11 13"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m22 2-7 20-4-9-9-4 20-7Z"
        />
      </svg>
    </button>
  </div>
</template>
