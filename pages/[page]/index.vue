<template>
  <UiCenter>
    <UiHeading>
      {{ data?.pageByHandle.title }}
    </UiHeading>

    <UiParagraph>
      {{ data?.pageByHandle.body }}
    </UiParagraph>
  </UiCenter>
</template>

<script setup lang="ts">
const route = useRoute();

const { data } = await usePage(route.params.page as string);

useSeoMeta({
  title: () => `${data.value?.pageByHandle.title} - GRANITE.`,
  description: () => data.value?.pageByHandle.bodySummary,
});
</script>
