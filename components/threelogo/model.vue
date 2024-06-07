<template>
  <div
    class="relative flex h-[100px] w-[100px] items-center justify-center sm:h-[120px] sm:w-[120px]"
    ref="container"
  >
    <p
      class="absolute inset-0 z-10 flex items-center justify-center bg-transparent font-display tracking-[0.15em]"
      :style="{ color: '#2847d4', fontSize: SCALE_FACTOR / 3 + 'px' }"
    >
      GRANITE
    </p>
  </div>
</template>

<script setup>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import { VertexNormalsHelper } from "three/examples/jsm/helpers/VertexNormalsHelper.js";
const SCALE_FACTOR = 28;
const container = ref(null);
let helper, scene, logo, camera, renderer;
const CAMERA_CONFIG = {
  NEAR: 0.1,
  FAR: 1000,
  POSITION_Z: 1,
};
const AMBIENT_LIGHT_COLOR = 0xffffff;
const AMBIENT_LIGHT_INTENSITY = 5;
const blue = "rgb(40, 71, 212)";

// Setup Environment
onMounted(() => {
  const aspect = container.value.clientWidth / container.value.clientHeight;
  camera = new THREE.OrthographicCamera(
    -aspect,
    aspect,
    1,
    -1,
    CAMERA_CONFIG.NEAR,
    CAMERA_CONFIG.FAR,
  );
  camera.position.z = CAMERA_CONFIG.POSITION_Z;
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(container.value.clientWidth, container.value.clientHeight);
  container.value.appendChild(renderer.domElement);
  scene = new THREE.Scene();

  // Load Textures
  new THREE.CubeTextureLoader()
    .setPath("/cubeMaps/")
    .load(
      ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
      (texture) => {
        scene.environment = texture;
      },
    );

  // Add Lighting
  const ambientLight = new THREE.AmbientLight(
    AMBIENT_LIGHT_COLOR,
    AMBIENT_LIGHT_INTENSITY,
  );
  scene.add(ambientLight);

  // Load Model
  const loader = new GLTFLoader();
  loader.load("/models/granite.glb", (gtlf) => {
    logo = gtlf.scene;
    const scale = container.value.clientWidth / SCALE_FACTOR;
    logo.scale.set(scale, scale, scale);
    scene.add(logo);

    // helper = new VertexNormalsHelper(logo.children[0], 0.5, 0xff0000);
    // scene.add(helper);

    logo.traverse((node) => {
      if (node.isMesh) {
        node.material.color = new THREE.Color(blue);
        node.material.metalness = 0.5;
        node.material.roughness = 0.1;
      }
    });
  });

  // Animate
  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    if (helper) {
      helper.update();
    }
  };
  animate();

  window.addEventListener("resize", onWindowResize);
  window.addEventListener("mousemove", onMouseMove);
});

// Window Resize
const onWindowResize = () => {
  const aspect = container.value.clientWidth / container.value.clientHeight;
  camera.left = -aspect;
  camera.right = aspect;
  camera.top = 1;
  camera.bottom = -1;
  camera.updateProjectionMatrix();
  renderer.setSize(container.value.clientWidth, container.value.clientHeight);
};

// Mouse Move
const onMouseMove = (event) => {
  const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  const damping = 0.1;
  logo.rotation.x += (mouseY - logo.rotation.x) * damping;
  logo.rotation.y += (-mouseX - logo.rotation.y) * damping;
};

onBeforeUnmount(() => {
  window.removeEventListener("resize", onWindowResize);
  window.removeEventListener("mousemove", onMouseMove);
});
</script>
