<template>
  <client-only>
    {{
      modelValue
        ? Intl.NumberFormat(undefined, {
            style: "currency",
            currency: modelValue.currencyCode,
            currencyDisplay: "narrowSymbol",
          }).format(modelValue.amount)
        : "---"
    }}</client-only
  >
</template>

<script setup lang="ts">
import type { PriceModel } from "~/types/shopify";

defineProps<{
  modelValue?: PriceModel;
}>();
</script>
