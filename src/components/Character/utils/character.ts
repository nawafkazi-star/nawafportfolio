import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc",
          "Character3D#@"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;

                // Customizing clothing to black as requested
                if (
                  child.name.toLowerCase().includes("shirt") ||
                  child.name.toLowerCase().includes("cloth") ||
                  child.name.toLowerCase().includes("top") ||
                  child.name.toLowerCase().includes("t-shirt") ||
                  child.name.toLowerCase().includes("body")
                ) {
                  const mat = mesh.material as THREE.MeshStandardMaterial;
                  mat.color.set(0x000000);
                  mat.roughness = 0.5;
                  mat.metalness = 0.1;
                }
                if (
                  child.name.toLowerCase().includes("cap") ||
                  child.name.toLowerCase().includes("hat") ||
                  child.name.toLowerCase().includes("headwear")
                ) {
                  const mat = mesh.material as THREE.MeshStandardMaterial;
                  mat.color.set(0x000000);
                  mat.roughness = 0.3;
                  mat.metalness = 0.2;
                }
              }
            });
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
