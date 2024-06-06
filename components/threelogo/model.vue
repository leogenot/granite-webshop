<template>
  <div
    class="relative flex h-[10vh] w-[10vw] items-center justify-center"
    ref="container"
  >
    <p
      class="absolute font-display tracking-[0.15em] inset-0 z-10 flex items-center justify-center bg-transparent"
      :style="{ color: '#2847d4', fontSize: SCALE_FACTOR / 2.5 + 'px' }"
    >
      GRANITE
    </p>
  </div>
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default {
  data() {
    return {
      SCALE_FACTOR: 28,
    };
  },
  mounted() {
    this.$nextTick(() => {
      const CAMERA_CONFIG = {
        NEAR: 0.1,
        FAR: 1000,
        POSITION_Z: 1,
      };
      const AMBIENT_LIGHT_COLOR = 0xffffff;
      const AMBIENT_LIGHT_INTENSITY = 5;
      const blue = "rgb(40, 71, 212)";

      const container = this.$refs.container;
      let logo;

      // Setup Environment
      const aspect = container.clientWidth / container.clientHeight;
      const camera = new THREE.OrthographicCamera(
        -aspect,
        aspect,
        1,
        -1,
        CAMERA_CONFIG.NEAR,
        CAMERA_CONFIG.FAR,
      );
      camera.position.z = CAMERA_CONFIG.POSITION_Z;
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);
      const scene = new THREE.Scene();

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
        const scale = container.clientWidth / this.SCALE_FACTOR;
        logo.scale.set(scale, scale, scale);
        scene.add(logo);

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
      };
      animate();

      // Window Resize
      const onWindowResize = () => {
        const aspect = container.clientWidth / container.clientHeight;
        camera.left = -aspect;
        camera.right = aspect;
        camera.top = 1;
        camera.bottom = -1;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      };

      // Mouse Move
      const onMouseMove = (event) => {
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

        const maxRotationX = Math.PI / 4;
        const maxRotationY = Math.PI / 10;

        const targetRotationX = -mouseY * maxRotationY;
        const targetRotationY = mouseX * maxRotationX;

        const damping = 0.1;

        logo.rotation.x += (targetRotationX - logo.rotation.x) * damping;
        logo.rotation.y += (targetRotationY - logo.rotation.y) * damping;
      };

      window.addEventListener("resize", onWindowResize);
      window.addEventListener("mousemove", onMouseMove);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onWindowResize);
    window.removeEventListener("mousemove", this.onMouseMove);
  },
};
</script>
