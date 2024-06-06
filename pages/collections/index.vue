<template>
  <UiCenter>
    <UiHeading> Collections </UiHeading>

    <div class="grid place-content-center gap-8 sm:grid-cols-2 md:grid-cols-3">
      <CollectionModel
        :model-value="collection.node"
        v-for="collection in data?.collections.edges"
      />
    </div>
  </UiCenter>
</template>

<script setup lang="ts">
const { data } = await useCollections();

useSeoMeta({
  title: "Collections - GRANITE.",
});
</script>
