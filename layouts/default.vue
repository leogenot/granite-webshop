<template>
  <header
    class="fixed left-0 right-0 top-0 z-10 flex w-full flex-row content-center items-center justify-between gap-4 p-4 align-middle backdrop-blur-lg md:pl-10 md:pr-10"
  >
    <div class="flex items-center gap-4">
      <a
        href="#"
        class="text-l font-display tracking-[0.15em] mix-blend-difference"
        >GRANITE.</a
      >
    </div>

    <NuxtLink
      class="flex flex-row gap-4 font-text text-xs font-light uppercase mix-blend-difference"
      aria-label="Shopping Cart"
      to="/cart"
    >
      <span> Cart </span>
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
        class="flex flex-row gap-4 font-text text-xs font-light uppercase text-black"
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
