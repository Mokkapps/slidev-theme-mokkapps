<template>
  <div class="slidev-layout quote">
    <div class="my-auto px-12" :class="`text-${position}`">
      <span class="quote-char">’’</span>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ position?: string }>(), { position: "left" });
</script>

<style>
.slidev-layout.quote {
  @apply h-full grid;

  .quote-char {
    font-family: "Domine";

    @apply absolute top-10 left-12 text-10xl text-accent;
  }

  h1 {
    @apply font-normal text-4xl leading-14;
  }

  h1 + p {
    @apply mt-4 text-2xl;
  }
}
</style>
