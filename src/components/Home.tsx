interface Media {
  isMobile: boolean;
  isTablet: boolean;
  isIpadPro: boolean;
  backLink?: string;
}
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Text3D,
  PresentationControls,
  Float,
  Stars,
  SpotLight,
} from "@react-three/drei";
import { Vector3 } from "three";
import Spaceship from "./Spaceship";
import { useNavigate } from "react-router-dom";

function Home({ isMobile, isTablet, isIpadPro }: Media) {
  const _hi = "Hi!";
  const _introMobile = ["\nI am", "\nAkshobhya", "\nShukla"];
  const _introDesktop = ["\nI am", "\nAkshobhya", " Shukla"];

  const H1 = useState(false);
  const H2 = useState(false);
  const H3 = useState(false);
  const H = [H1, H2, H3];

  const _navbar = [
    ["About Me", "About Me", "/aboutme"],
    ["Projects", "\n\nProjects", "/projects"],
    ["Contact Me", "\n\n\n\nContact Me", "contactme"],
  ];

  const navigate = useNavigate();

  // const _navbar = ["About Me", "\n\nProjects", "\n\n\n\nContact Me"];

  return (
    <>
      <Canvas>
        <Stars
          radius={50}
          depth={50}
          count={5000}
          factor={6}
          saturation={1}
          fade
          speed={1.5}
        />

        <Float
          speed={1}
          scale={1}
          floatIntensity={0.3}
          floatingRange={[0.0001, -0.0001]}
          // rotation={[0, -Math.PI / 10, 0]}
        >
          {!isMobile && (
            <>
              <SpotLight
                position={[6, 1, 0]}
                power={100}
                rotation={[Math.PI / 2, 0, 0]}
                angle={Math.PI}
              ></SpotLight>
              <Spaceship
                scale={(isTablet && 0.3) || (isIpadPro && 0.2) || 0.36}
                position={
                  (isTablet && new Vector3(2, 0, -3)) ||
                  (isIpadPro && new Vector3(1, 0, -3)) ||
                  new Vector3(6, -2, -3)
                }
                receiveShadow={false}
                rotation={[0, -Math.PI / 8, 0]}
              ></Spaceship>
            </>
          )}
        </Float>

        <pointLight
          key={"light1"}
          position={
            (isMobile && [0, -1, 0]) ||
            (isTablet && [-2.6, 0.8, 0]) ||
            (isIpadPro && [5, -4, 0]) || [-2, 2, 0.2]
          }
          intensity={
            (isMobile && 1500) ||
            (isTablet && 1200) ||
            (isIpadPro && 1200) ||
            1500
          }
          power={
            (isMobile && 500) || (isTablet && 200) || (isIpadPro && 500) || 500
          }
          color={"white"}
        />
        <pointLight
          key={"light2"}
          position={
            (isMobile && [1, -1, 0]) ||
            (isTablet && [-2.6, 0.8, 0]) ||
            (isIpadPro && [-2, -3, 0]) || [-2, 0, 0]
          }
          intensity={
            (isMobile && 1500) ||
            (isTablet && 1200) ||
            (isIpadPro && 1200) ||
            1000
          }
          power={
            (isMobile && 500) || (isTablet && 200) || (isIpadPro && 500) || 500
          }
          color={"white"}
        />
        <pointLight
          key={"light3"}
          position={
            (isMobile && [1, -1, 0]) ||
            (isTablet && [-2.6, 0.8, 0]) ||
            (isIpadPro && [-2, -3, 0]) || [2, 0, 0]
          }
          intensity={
            (isMobile && 1500) ||
            (isTablet && 1200) ||
            (isIpadPro && 1200) ||
            1000
          }
          power={
            (isMobile && 500) || (isTablet && 200) || (isIpadPro && 500) || 500
          }
          color={"white"}
        />
        <pointLight
          key={"light4"}
          position={
            (isMobile && [1, -1, 0]) ||
            (isTablet && [-2.6, 0.8, 0]) ||
            (isIpadPro && [-2, -3, 0]) || [2.5, -5, 0]
          }
          intensity={
            (isMobile && 1500) ||
            (isTablet && 1200) ||
            (isIpadPro && 1200) ||
            1000
          }
          power={
            (isMobile && 500) || (isTablet && 500) || (isIpadPro && 500) || 500
          }
          color={"white"}
        />
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 3, tension: 300 }}
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 2, Math.PI / 2]}
          azimuth={[-Math.PI / 2, Math.PI / 2]}
        >
          <Float
            speed={0.8}
            scale={1}
            floatIntensity={0.1}
            floatingRange={[0.01, 0.01]}
          >
            <Text3D
              font={"/Blogh Trial_Regular.json"}
              position={
                (isMobile && [-1.5, 2, 0]) ||
                (isTablet && [-2.6, 1.6, 0]) ||
                (isIpadPro && [-3.8, 1.6, 0]) || [-6, 1.4, 0]
              }
              size={
                (isMobile && 1.4) ||
                (isTablet && 1.5) ||
                (isIpadPro && 1.5) ||
                2
              }
              rotation={
                (isMobile && [0, 0, 0]) ||
                (isTablet && [0, 0, 0]) ||
                (isIpadPro && [0, 0, 0]) || [0, 0, 0]
              }
            >
              {_hi}

              <meshStandardMaterial
                color="#ff0000"
                emissive="#ff0000"
                emissiveIntensity={0.7}
              />
            </Text3D>
          </Float>
          <Float
            speed={0.8}
            scale={1}
            floatIntensity={0.1}
            floatingRange={[0.01, 0.01]}
          >
            <Text3D
              font={"/Blogh Trial_Regular.json"}
              position={
                (isMobile && [-1.5, 1.8, 0]) ||
                (isTablet && [-2.6, 1.2, 0]) ||
                (isIpadPro && [-3.8, 0.8, 0]) || [-6, 1, 0]
              }
              size={
                (isMobile && 0.4) ||
                (isTablet && 0.4) ||
                (isIpadPro && 0.7) ||
                0.7
              }
              rotation={
                (isMobile && [0, 0, 0]) ||
                (isTablet && [0, 0, 0]) ||
                (isIpadPro && [0, 0, 0]) || [0, 0, 0]
              }
            >
              {(isMobile && _introMobile) ||
                (isIpadPro && _introMobile) ||
                (isTablet && _introMobile) ||
                _introDesktop}

              <meshStandardMaterial
                color="#ff0000"
                emissive="#ff0000"
                emissiveIntensity={0.7}
              />
            </Text3D>
          </Float>
        </PresentationControls>
        <spotLight
          position={[0, -4, 0]}
          angle={Math.PI}
          penumbra={10}
          power={100}
        />
        <Float
          speed={0.8}
          scale={1}
          floatIntensity={0.1}
          floatingRange={[0.01, 0.01]}
        >
          {_navbar.map((navEle, index) => {
            return (
              <Text3D
                key={index}
                font={"/Blogh Trial_Regular.json"}
                type="button"
                position={
                  (isMobile && [-1.5, -1, 0]) ||
                  (isTablet && [-2.6, -1.6, 0]) ||
                  (isIpadPro && [-3.8, 0.8, 0]) || [-6 + index * 4.2, -2.8, 0]
                }
                size={
                  H[index][0]
                    ? (isMobile && 0.34) ||
                      (isTablet && 0.32) ||
                      (isIpadPro && 0.9) ||
                      0.5
                    : (isMobile && 0.32) ||
                      (isTablet && 0.3) ||
                      (isIpadPro && 0.7) ||
                      0.4
                }
                rotation={
                  (isMobile && [0, 0, 0]) ||
                  (isTablet && [0, 0, 0]) ||
                  (isIpadPro && [0, 0, 0]) || [-Math.PI / 8, 0, 0]
                }
                onClick={() => {
                  console.log(navEle);
                  navigate(navEle[2]);
                }}
                onPointerOver={() => {
                  // console.log(navEle + "hover");
                  H[index][1](true);
                }}
                onPointerOut={() => {
                  // console.log(navEle + "hover");
                  H[index][1](false);
                }}
              >
                {(isMobile && navEle[1]) ||
                  (isTablet && navEle[1]) ||
                  (isIpadPro && navEle[0]) ||
                  navEle[0]}
                <meshStandardMaterial
                  color="#0059d6"
                  emissive="#0059d6"
                  emissiveIntensity={0.7}
                />
              </Text3D>
            );
          })}
        </Float>
      </Canvas>
    </>
  );
}

export default Home;
