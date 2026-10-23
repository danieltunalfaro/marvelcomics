<script setup lang="ts">
interface Props {
  message: string
  itsMine: boolean
  image?: string
}

defineProps<Props>()
</script>

<template>
  <!-- Mensaje propio -->
  <div v-if="itsMine" class="flex justify-end px-2 py-1">
    <div
      class="max-w-[85%] min-w-[100px] rounded-2xl rounded-br-sm
             bg-red-600 px-6 py-4 text-base leading-7
             text-white shadow-md"
    >
      <p class="whitespace-pre-wrap break-words">
        {{ message }}
      </p>

      <img
        v-if="image"
        :src="image"
        alt="Imagen del mensaje"
        class="mt-4 h-auto max-w-full rounded-lg"
      />
    </div>
  </div>

  <!-- Mensaje recibido -->
  <div v-else class="flex justify-start px-2 py-1">
    <div
      class="max-w-[85%] min-w-[100px] rounded-2xl rounded-bl-sm
             border border-neutral-700 bg-neutral-800
             px-6 py-4 text-base leading-7
             text-neutral-100 shadow-md"
    >
      <p class="whitespace-pre-wrap break-words">
        {{ message }}
      </p>

      <img
        v-if="image"
        :src="image"
        alt="Imagen del mensaje"
        class="mt-4 h-auto max-w-full rounded-lg"
      />
    </div>
  </div>
</template>
