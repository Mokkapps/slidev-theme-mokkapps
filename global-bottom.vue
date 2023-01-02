<template>
  <footer class="absolute bottom-0 left-0 right-0 w-full">
    <div class="flex justify-end w-full p-2">
      <div
        class="flex flex-col gap-2 bg-light-background dark:bg-dark-background bg-opacity-60 p-2 rounded-md"
      >
        <span class="text-sm"><logos-twitter class="mr-1" />@mokkapps</span>
        <div class="flex items-center gap-2">
          <img
            src="https://res.cloudinary.com/mokkapps/image/upload/v1655359470/website/icon_dt5qn1.png"
            class="w-3 h-3"
          />
          <span class="text-sm">mokkapps.de</span>
        </div>
      </div>
    </div>
    <!-- <div class="border-bar"></div> -->
  </footer>
</template>

<style>
.border-bar {
  @apply h-0.5 w-full mb-1 bg-accent;
  box-shadow: 0 0 3px 0.5px var(--accent);
}
</style>
