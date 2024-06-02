<template>
  <component
    class="relative inline-flex cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap p-2 outline-none ring-slate-200 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50"
    :class="[variants[variant]]"
    :is="to ? NuxtLink : 'button'"
    :disabled="disabled || loading"
    :to="to"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";
import { type Component } from "vue";

type Variant = "primary" | "outline" | "highlight" | "text";

withDefaults(
  defineProps<{
    as?: string | Component;
    variant?: Variant;
    loading?: boolean;
    disabled?: boolean;
    to?: string;
  }>(),
  {
    as: "button",
    variant: "primary",
    loading: false,
    disabled: false,
  },
);

const variants: Record<Variant, string> = {
  primary:
    " text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 active:from-blue-400 active:to-blue-300 svg:stroke-white",
  outline:
    "text-white hover:text-stone-800 hover:bg-white active:bg-stone-800 border border-slate-200",
  highlight:
    "bg-white text-stone-800 hover:bg-stone-800 active:bg-slate-100 border border-blue-500",
  text: "hover:bg-stone-800 active:bg-slate-100",
};
</script>
