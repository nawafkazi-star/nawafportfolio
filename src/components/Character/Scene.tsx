import { useEffect, useRef, useState, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import setCharacter from "./utils/character";
import setLighting from "./utils/lighting";
import { useLoading } from "../../context/LoadingProvider";
import {
  handleMouseMove,
  handleTouchEnd,
  handleHeadRotation,
  handleTouchMove,
} from "./utils/mouseUtils";
import setAnimations from "./utils/animationUtils";
import { setProgress } from "../Loading";

const CharacterModelSub = () => {
  const { scene, camera, gl } = useThree();
  const { setLoading } = useLoading();
  const [mixer, setMixer] = useState<THREE.AnimationMixer | null>(null);
  const [headBone, setHeadBone] = useState<THREE.Object3D | null>(null);
  const [screenLight, setScreenLight] = useState<any | null>(null);
  const [lightUtils, setLightUtils] = useState<any>(null);
  const hoverDivRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const interpolation = useRef({ x: 0.1, y: 0.2 });

  useEffect(() => {
    let progress = setProgress((value) => setLoading(value));
    const { loadCharacter } = setCharacter(gl, scene, camera as THREE.PerspectiveCamera);

    loadCharacter().then((gltf) => {
      if (gltf) {
        const animations = setAnimations(gltf);
        setMixer(animations.mixer);
        const character = gltf.scene;
        scene.add(character);
        
        setHeadBone(character.getObjectByName("spine006") || null);
        setScreenLight(character.getObjectByName("screenlight") || null);
        
        const utils = setLighting(scene);
        setLightUtils(utils);

        progress.loaded().then(() => {
          setTimeout(() => {
            utils.turnOnLights();
            animations.startIntro();
          }, 2500);
        });

        // Initialize hover animation if needed
        const hoverDiv = document.querySelector(".character-hover") as HTMLDivElement;
        if (hoverDiv) {
          animations.hover(gltf, hoverDiv);
        }
      }
    });

    const onMouseMove = (event: MouseEvent) => {
      handleMouseMove(event, (x, y) => {
        mouse.current = { x, y };
      });
    };

    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      scene.clear();
    };
  }, [gl, scene, camera, setLoading]);

  useFrame((state, delta) => {
    if (mixer) mixer.update(delta);
    if (headBone) {
      handleHeadRotation(
        headBone,
        mouse.current.x,
        mouse.current.y,
        interpolation.current.x,
        interpolation.current.y,
        THREE.MathUtils.lerp
      );
    }
    if (lightUtils && screenLight) {
      lightUtils.setPointLight(screenLight);
    }
  });

  return null;
};

const Scene = () => {
  return (
    <div className="character-container">
      <div className="character-model">
        <Canvas
          shadows
          gl={{ alpha: true, antialias: true, stencil: false, depth: true }}
          camera={{ position: [0, 13.1, 24.7], fov: 14.5, zoom: 1.1, near: 0.1, far: 1000 }}
          onCreated={(state) => {
            state.gl.toneMapping = THREE.ACESFilmicToneMapping;
            state.gl.toneMappingExposure = 1;
          }}
          performance={{ min: 0.5 }}
          framerloop="demand"
          className="character-canvas"
        >
          <Suspense fallback={null}>
            <CharacterModelSub />
          </Suspense>
        </Canvas>
        <div className="character-rim"></div>
        <div className="character-hover"></div>
      </div>
    </div>
  );
};

export default Scene;
