<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const cookie = useCartCookie();
const { mutate, onDone } = useCreateCart();

if (!cookie.value) {
  mutate();
}

onDone((response) => (cookie.value = response.data?.cartCreate.cart.id));

const { currentScroll } = useSmoothScroll(true);
</script>

<style>
svg {
  stroke-width: 1.5;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.25s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  /* filter: blur(1rem); */
}
</style>
