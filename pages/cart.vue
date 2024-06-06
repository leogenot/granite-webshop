<template>
  <UiCenter>
    <UiHeading class="pt-10"> Your cart </UiHeading>

    <div class="grid h-full gap-8 md:grid-cols-2">
      <div class="flex flex-col gap-8">
        <div
          class="flex flex-col items-center gap-4 rounded-lg bg-slate-50 p-8"
          v-if="!data || isEmpty"
        >
          <IconShoppingCart width="48" height="48" />

          <p class="font-text text-lg font-light uppercase tracking-[0.025em]">
            Your cart is empty.
          </p>
        </div>
        <CartLine
          :model-value="line.node"
          v-for="line in data?.cart.lines.edges"
          v-else
        />
      </div>

      <div>
        <div class="flex flex-col gap-4 rounded-lg bg-slate-50 p-8">
          <div class="flex items-center justify-between">
            <UiParagraph> Taxes </UiParagraph>

            <UiPrice :model-value="data?.cart.cost.totalTaxAmount" />
          </div>

          <div class="flex items-center justify-between">
            <UiParagraph> Shipping </UiParagraph>

            <UiParagraph> Calculated at checkout </UiParagraph>
          </div>

          <div class="flex items-center justify-between">
            <UiParagraph> Total </UiParagraph>

            <UiPrice :model-value="data?.cart.cost.totalAmount" />
          </div>

          <UiButton
            class="text-lg"
            :disabled="isEmpty"
            :to="isEmpty ? undefined : data?.cart.checkoutUrl"
          >
            Checkout
          </UiButton>
        </div>
      </div>
    </div>
  </UiCenter>
</template>

<script setup lang="ts">
import { IconShoppingCart } from "@tabler/icons-vue";

const cookie = useCartCookie();
const { data } = await useCart(cookie.value ?? "");

const isEmpty = computed(() => data.value?.cart.lines.edges.length === 0);

useSeoMeta({
  title: "Cart - GRANITE.",
});
</script>
