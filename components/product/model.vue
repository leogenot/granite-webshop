<template>
  <div
    class="flex flex-col items-start gap-4 font-text uppercase tracking-[0.025em]"
  >
    <NuxtLink :to="`/products/${modelValue.handle}`">
      <img
        loading="lazy"
        width="360"
        height="360"
        class="aspect-square"
        :alt="modelValue.featuredImage.altText ?? modelValue.title"
        :src="modelValue.featuredImage.url + '&width=360'"
      />
    </NuxtLink>

    <div class="flex flex-col">
      <UiLink class="text-xs" :to="`/products/${modelValue.handle}`">
        {{ modelValue.title }}
      </UiLink>

      <div class="font-text text-xs uppercase tracking-[0.025em]">
        <UiPrice
          :model-value="modelValue.priceRange.minVariantPrice"
          class="font-text text-xs uppercase tracking-[0.025em]"
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
