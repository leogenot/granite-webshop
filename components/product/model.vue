<template>
  <UiLink
    :to="`/products/${modelValue.handle}`"
    class="flex h-[100%] w-[100%] flex-col justify-center md:flex-row"
    :class="{ 'md:flex-row-reverse': index % 2 === 1 }"
  >
    <div class="flex h-[50%] items-center justify-center md:w-[50%]">
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
      class="flex flex-col items-center justify-between p-4 font-text text-xs font-light uppercase md:w-[50%] md:p-10"
    >
      <div class="mb-4 flex flex-col gap-2">
        <div>{{ modelValue.title }}</div>
        <p>{{ modelValue.description }}</p>
        <UiPrice :model-value="modelValue.priceRange.minVariantPrice" />
      </div>

      <UiButton class="w-full" variant="outline"> See product </UiButton>
    </div>
  </UiLink>
</template>

<script setup lang="ts">
import type { ProductModel } from "~/types/shopify";

defineProps<{
  modelValue: ProductModel;
  index: number;
}>();
</script>
