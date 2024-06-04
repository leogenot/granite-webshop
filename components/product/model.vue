<template>
  <UiLink
    :to="`/products/${modelValue.handle}`"
    class="flex h-[100%] w-[100%] flex-row justify-center"
    :class="{ 'flex-row-reverse': index % 2 === 1 }"
  >
    <div class="flex h-[50%] w-[50%] items-center justify-center">
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
      class="flex w-[50%] flex-col items-center justify-between p-10 font-text text-xs font-light uppercase"
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
