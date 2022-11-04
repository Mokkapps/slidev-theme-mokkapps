<template>
  <div class="slidev-layout cover">
    <div class="absolute inset-0 z-1">
      <img src="../assets/bg-cover.svg" alt="" />
    </div>
    <div
      class="my-auto mx-auto flex flex-col items-center justify-center w-full z-2"
    >
      <slot />
    </div>
  </div>
</template>
