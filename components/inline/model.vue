<template>
  <UiLink
    :to="`/products/${modelValue.handle}`"
    class="align-center flex h-[100%] w-[100%] flex-col justify-center"
  >
    <div class="flex h-full w-full">
      <img
        loading="lazy"
        width="100%"
        height="100%"
        class="aspect-square"
        :alt="modelValue.featuredImage.altText ?? modelValue.title"
        :src="modelValue.featuredImage.url + '&width=360'"
      />
    </div>

    <div
      class="mt-2 flex flex-row items-center justify-between font-text text-xs font-light uppercase"
    >
      <div>{{ modelValue.title }}</div>
      <UiPrice :model-value="modelValue.priceRange.minVariantPrice" />
    </div>
  </UiLink>
</template>

<script setup lang="ts">
import type { ProductModel } from "~/types/shopify";

defineProps<{
  modelValue: ProductModel;
}>();
</script>
