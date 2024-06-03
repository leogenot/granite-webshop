<template>
  <header
    class="fixed left-0 right-0 top-0 z-10 z-50 flex flex w-full flex-row content-center items-center justify-between justify-between gap-4 p-4 p-4 align-middle backdrop-blur-lg"
  >
    <div class="flex items-center gap-4">
      <a
        href="#"
        class="text-l font-display tracking-[0.15em] mix-blend-difference"
        >GRANITE.</a
      >
    </div>

    <NuxtLink
      class="flex flex-row gap-4 font-text text-xs uppercase tracking-[0.025em] mix-blend-difference"
      aria-label="Shopping Cart"
      to="/cart"
    >
      <!-- <IconShoppingCart width="22" height="22" /> -->
      <span class="hidden md:block"> Cart </span>
    </NuxtLink>
  </header>

  <div class="flex flex-col bg-white text-black">
    <slot />
  </div>

  <footer class="flex flex-col border-t border-gray-800 bg-white">
    <div
      class="mx-auto flex w-full max-w-6xl flex-row justify-between gap-8 p-8 md:flex-row md:gap-12"
    >
      <UiBrand />

      <div
        class="flex flex-row gap-4 font-text text-xs uppercase tracking-[0.025em] text-black"
      >
        <UiLink :to="`/${page.node.handle}`" v-for="page in data?.pages.edges">
          {{ page.node.title }}
        </UiLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { IconBrandGithub, IconShoppingCart } from "@tabler/icons-vue";

const { data } = usePages();
</script>
