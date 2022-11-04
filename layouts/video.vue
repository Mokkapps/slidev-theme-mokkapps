<script setup lang="ts">
defineProps<{ video: string }>();
</script>

<template>
  <div class="slidev-layout video">
    <div class="my-auto mx-auto w-full">
      <div class="w-full h-[440px]">
        <slot />
        <iframe
          v-if="video.startsWith('http')"
          :src="`${video}?rel=0`"
          class="w-full h-[420px]"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
        <video v-else class="w-full min-h-[420px]">
          <source :src="video" />
        </video>
      </div>
    </div>
  </div>
</template>
