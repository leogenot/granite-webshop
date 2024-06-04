<template>
  <div ref="section" class="relative h-[100vh] w-screen bg-black">
    <h1
      ref="title"
      class="z-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform font-display text-4xl tracking-[0.15em] text-white mix-blend-difference md:text-6xl"
    >
      GRANITE.
    </h1>
    <video
      class="h-full w-full object-cover"
      src="/videos/security.mp4"
      autoplay
      loop
      muted
    ></video>
  </div>

  <UiCenter>
    <div class="flex flex-col items-center gap-8 bg-white">
      <ProductModel
        :model-value="product.node"
        v-for="product in data?.collection.products.edges"
      />
    </div>
  </UiCenter>
</template>

<script setup>
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const { data } = await useCollection("featured", 6);

useSeoMeta({
  title: "GRANITE.",
});

const title = ref(null);
const section = ref(null);

onMounted(() => {
  console.log("init parallax");
  gsap.to(title.value, {
    y: "-30%",
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: section.value,
      start: "top center",
      end: "bottom top",
      scrub: true,
      markers: false,
    },
  });
});
</script>
