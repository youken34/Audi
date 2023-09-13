import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/DRACOLoader.js";
import { RGBELoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/RGBELoader.js";

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath(
  "https://www.gstatic.com/draco/versioned/decoders/1.5.6/"
);
dracoLoader.preload();

const loadingManager = new THREE.LoadingManager();

const progressBar = document.getElementById("progress-bar");

loadingManager.onProgress = function (url, loaded, total) {
  progressBar.value = (loaded / total) * 100;
};

const progressBarContainer = document.querySelector(".progress-bar-container");
loadingManager.onLoad = function () {
  progressBarContainer.style.display = "none";
};

const loader = new GLTFLoader(loadingManager);

loader.setDRACOLoader(dracoLoader);

const mainScene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(70, 2.56, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(1536, 600);

// renderer.outputEncoding = THREE.sRGBEncoding;
// renderer.toneMapping = THREE.ACESFilmicToneMapping;
// renderer.toneMappingExposure = 1;

document.getElementById("threeModel").appendChild(renderer.domElement);

let gltfObject; // Declare a variable to hold the loaded GLTF object
let rgbeLoader = new RGBELoader();
rgbeLoader.load(
  "../texture/MR_INT-002_BathroomHard_Pierre.hdr",
  function (texture) {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    mainScene.environment = texture;
    loader.load(
      "../glb/audi_rs5.glb",
      function (gltf) {
        gltfObject = gltf.scene; // Store the loaded object for later access
        gltfObject.position.set(0, 0, 0);

        mainScene.add(gltfObject);

        camera.position.set(
          720.7022656180474,
          64.84397893460088,
          -293.87523289241403
        );
        camera.lookAt(gltfObject.position);

        //   Add ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        mainScene.add(ambientLight);

        // Add directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(-1, 2, 1);
        directionalLight.intensity = 1;
        mainScene.add(directionalLight);
      },
      function (xhr) {
        // console.log((xhr.loaded / xhr.total) * 100 + "loaded");
      },
      function (error) {
        console.log(error);
      }
      // Progress and error handlers...
    );
  }
);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = false;
controls.dampingFactor = 0.05;
controls.enableZoom = false; // Disable zoom
controls.enablePan = false; // Disable panning
controls.enableRotate = false; // Disable rotation

const rotateSpeed = 0.005; // Adjust the rotation speed as needed

const animate = () => {
  if (gltfObject) {
    gltfObject.rotation.y += rotateSpeed; // Rotate the loaded object
  }

  requestAnimationFrame(animate);
  controls.update();
  renderer.render(mainScene, camera);
};

animate();
