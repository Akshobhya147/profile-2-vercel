interface Media {
  isMobile: boolean;
  isTablet: boolean;
  isIpadPro: boolean;
  backLink?: string;
}

import { Canvas } from "@react-three/fiber";
import { Text3D, Float, Stars, Image } from "@react-three/drei";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BeachVolley = ({
  isMobile,
  isTablet,
  isIpadPro,
  backLink = "/",
}: Media) => {
  const [hover, seHoverState] = useState(false);
  const [hover2, seHoverState2] = useState(false);
  const navigate = useNavigate();
  const paraDesktop = [
    "Beach Volley is leisurely game where you play as a blobby",
    "\n  softbody water animal or bird and compete against your",
    "\n     counterparts in a friendly game of beach volleyball.",
  ];

  const paraMobile = [
    "                                     Beach Volley is leisurely",
    "\n                                     game where you play as",
    "\n                                       a blobby softbody and",
    "\n                                       compete against your",
    "\n                                         others in a friendly",
    "\n                                    game of beach volleyball.",
  ];

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
        <pointLight
          key={"light1"} //title light
          position={
            (isMobile && [0, 1.5, 0]) ||
            (isTablet && [0, 2, 0]) ||
            (isIpadPro && [0, 2, 0]) || [0, 2, 0]
          }
          intensity={
            (isMobile && 1500) ||
            (isTablet && 1200) ||
            (isIpadPro && 1200) ||
            1000
          }
          power={
            (isMobile && 500) || (isTablet && 200) || (isIpadPro && 500) || 900
          }
          color={"white"}
        />
        <pointLight
          key={"light2"} // back light
          position={
            (isMobile && [0, 3, 0]) ||
            (isTablet && [-2, 2, 0]) ||
            (isIpadPro && [-4, 2, 0]) || [-4, 2, 0]
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
          key={"light3"} //content light
          position={
            (isMobile && [0, 0, 0.21]) ||
            (isTablet && [0, -0.5, 0.3]) ||
            (isIpadPro && [0, -0.5, 0.3]) || [0, -1, 0.4]
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
          key={"light4"} //link light
          position={
            (isMobile && [0, -3, -1]) ||
            (isTablet && [0, -2, -1]) ||
            (isIpadPro && [0, -3, -1]) || [0, -3, -1]
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
        <Float speed={0} scale={0.8} floatIntensity={-1} floatingRange={[0, 0]}>
          <Text3D
            font={"/Blogh Trial_Regular.json"}
            position={
              (isMobile && [-1.7, 3.7, 0]) ||
              (isTablet && [-3, 3.6, 0]) ||
              (isIpadPro && [-6.8, 3.5, 0]) || [-6, 3, 1]
            }
            size={
              hover
                ? (isMobile && 0.3) ||
                  (isTablet && 0.38) ||
                  (isIpadPro && 0.46) ||
                  0.4
                : (isMobile && 0.25) ||
                  (isTablet && 0.32) ||
                  (isIpadPro && 0.4) ||
                  0.36
            }
            rotation={
              (isMobile && [0, 0, 0]) ||
              (isTablet && [0, 0, 0]) ||
              (isIpadPro && [0, 0, 0]) || [0, 0, 0]
            }
            onPointerOver={() => {
              // console.log(navEle + "hover");
              seHoverState(true);
            }}
            onPointerOut={() => {
              // console.log(navEle + "hover");
              seHoverState(false);
            }}
            onClick={() => navigate(backLink)}
          >
            Back
            <meshStandardMaterial
              color="#0059d6"
              emissive="#0059d6"
              emissiveIntensity={0.7}
            />
          </Text3D>
        </Float>

        <Float
          speed={0.8}
          scale={1}
          floatIntensity={0.2}
          floatingRange={[0.01, 0.01]}
        >
          <Text3D
            font={"/Blogh Trial_Regular.json"}
            position={
              (isMobile && [-1.3, 2, 0]) ||
              (isTablet && [-1.3, 2.2, 0]) ||
              (isIpadPro && [-2.67, 2.2, 0]) || [-2.67, 2, 0]
            }
            size={
              (isMobile && 0.3) ||
              (isTablet && 0.3) ||
              (isIpadPro && 0.6) ||
              0.6
            }
            rotation={
              (isMobile && [0, 0, 0]) ||
              (isTablet && [0, 0, 0]) ||
              (isIpadPro && [0, 0, 0]) || [0, 0, 0]
            }
          >
            {(isMobile && "Beach Volley") ||
              (isTablet && "Beach Volley") ||
              (isIpadPro && "Beach Volley") ||
              "Beach Volley"}
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
          floatIntensity={0.01}
          floatingRange={[0.01, 0.01]}
        >
          <Text3D
            font={"/Blogh Trial_Regular.json"}
            position={
              (isMobile && [-4.4, 1.3, 0]) ||
              (isTablet && [-4.87, 1.5, 0]) ||
              (isIpadPro && [-6.16, 1, 0]) || [-6.12, 1, 0]
            }
            size={
              (isMobile && 0.18) ||
              (isTablet && 0.2) ||
              (isIpadPro && 0.3) ||
              0.3
            }
            rotation={
              (isMobile && [0, 0, 0]) ||
              (isTablet && [0, 0, 0]) ||
              (isIpadPro && [0, 0, 0]) || [-Math.PI / 20, 0, 0]
            }
          >
            {(isMobile && paraMobile) ||
              (isTablet && paraMobile) ||
              (isIpadPro && paraDesktop) ||
              paraDesktop}

            <meshStandardMaterial
              color="#00b825"
              emissive="#00b825"
              emissiveIntensity={0.7}
            />
          </Text3D>
        </Float>

        <Float speed={0} scale={0.8} floatIntensity={-1} floatingRange={[0, 0]}>
          <Text3D
            font={"/Blogh Trial_Regular.json"}
            position={
              (isMobile && [-1.3, -4, 0]) ||
              (isTablet && [-1.6, -4.3, 0]) ||
              (isIpadPro && [-1.9, -4.3, 0]) || [-1.7, -1, 1]
            }
            size={
              hover2
                ? (isMobile && 0.3) ||
                  (isTablet && 0.38) ||
                  (isIpadPro && 0.46) ||
                  0.4
                : (isMobile && 0.25) ||
                  (isTablet && 0.32) ||
                  (isIpadPro && 0.4) ||
                  0.36
            }
            rotation={
              (isMobile && [-Math.PI / 8, 0, 0]) ||
              (isTablet && [-Math.PI / 20, 0, 0]) ||
              (isIpadPro && [0, 0, 0]) || [0, 0, 0]
            }
            onPointerOver={() => {
              // console.log(navEle + "hover");
              seHoverState2(true);
            }}
            onPointerOut={() => {
              // console.log(navEle + "hover");
              seHoverState2(false);
            }}
            onClick={() => {
              window.open(
                "https://play.google.com/store/apps/details?id=com.GatsbyGameStudios.BeachVolley",
                "_blank"
              );
            }}
          >
            PlayStore Link
            <meshStandardMaterial
              color="#0059d6"
              emissive="#0059d6"
              emissiveIntensity={0.7}
            />
          </Text3D>
        </Float>

        <Float
          speed={0.8}
          scale={0.8}
          floatIntensity={-1}
          floatingRange={[0, 0]}
        >
          <Image
            url={"/bv1.png"}
            position={
              (isMobile && [0, -1.3, 0]) ||
              (isTablet && [-1.7, -1.3, -0.5]) ||
              (isIpadPro && [-3.7, -1.6, 1.5]) || [-3.7, -2, 2]
            }
            scale={
              (isMobile && [5.3 / 2.7, 3 / 2.7]) ||
              (isTablet && [5.3 / 2, 3 / 2]) ||
              (isIpadPro && [5.3 / 1.7, 3 / 1.7]) || [5.3 / 1.7, 3 / 1.7]
            }
            toneMapped={false}
            radius={0.2}
          />

          <Image
            url={"/bv2.png"}
            position={
              (isMobile && [-1.1, -2.8, 0]) ||
              (isTablet && [1.7, -1.3, -0.5]) ||
              (isIpadPro && [0, -1.6, 1.5]) || [0.02, -2, 2]
            }
            scale={
              (isMobile && [5.3 / 2.7, 3 / 2.7]) ||
              (isTablet && [5.3 / 2, 3 / 2]) ||
              (isIpadPro && [5.3 / 1.7, 3 / 1.7]) || [5.3 / 1.7, 3 / 1.7]
            }
            toneMapped={false}
            radius={0.2}
          />
          <Image
            url={"/bv5.png"}
            position={
              (isMobile && [1.1, -2.8, 0]) ||
              (isTablet && [0, -3.3, -0.5]) ||
              (isIpadPro && [3.7, -1.6, 1.5]) || [3.7, -2, 2]
            }
            scale={
              (isMobile && [5.3 / 2.7, 3 / 2.7]) ||
              (isTablet && [5.3 / 2, 3 / 2]) ||
              (isIpadPro && [5.3 / 1.7, 3 / 1.7]) || [5.3 / 1.7, 3 / 1.7]
            }
            toneMapped={false}
            radius={0.2}
          />
        </Float>
      </Canvas>
    </>
  );
};

export default BeachVolley;
