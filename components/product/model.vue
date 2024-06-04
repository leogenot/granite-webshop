<template>
  <div
    class="flex h-[100%] w-[100%] flex-row items-center justify-center gap-4"
  >
    <NuxtLink
      :to="`/products/${modelValue.handle}`"
      class="flex h-[50%] w-[50%] items-center justify-center"
    >
      <img
        loading="lazy"
        width="360"
        height="360"
        class="aspect-square"
        :alt="modelValue.featuredImage.altText ?? modelValue.title"
        :src="modelValue.featuredImage.url + '&width=360'"
      />
    </NuxtLink>

    <div
      class="flex h-[50%] w-[50%] flex-col items-center justify-center font-text uppercase tracking-[0.025em]"
    >
      <UiLink class="text-xs font-bold" :to="`/products/${modelValue.handle}`">
        {{ modelValue.title }}
      </UiLink>

      <div class="text-xs">
        <UiPrice
          :model-value="modelValue.priceRange.minVariantPrice"
          class="text-xs"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductModel } from "~/types/shopify";

defineProps<{
  modelValue: ProductModel;
}>();
</script>
