interface Media {
  isMobile: boolean;
  isTablet: boolean;
  isIpadPro: boolean;
  backLink?: string;
}

import { Canvas } from "@react-three/fiber";
import { Text3D, Float, Stars } from "@react-three/drei";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactMe = ({
  isMobile,
  isTablet,
  isIpadPro,
  backLink = "/",
}: Media) => {
  const [hover, seHoverState] = useState(false);
  const navigate = useNavigate();

  const H = new Array(
    useState(false),
    useState(false),
    useState(false),
    useState(false)
  );
  const contacts = [
    ["Email", "mailto:akshobhyashukla@gmail.com"],
    ["\nLinkedIn", "https://www.linkedin.com/in/akshobhya-shukla-a01523198/"],
    ["\n\nGitHub", "https://github.com/Akshobhya147"],
    ["\n\n\nResume", "/Resume.pdf"],
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
          key={"light1"}
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
          key={"light2"}
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
          key={"light3"}
          position={
            (isMobile && [0, -0.5, 0.21]) ||
            (isTablet && [0, -1, 0.21]) ||
            (isIpadPro && [0, -0.3, 0.2]) || [0, -0.5, 0.3]
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
              (isMobile && [-1.5, 2, 0]) ||
              (isTablet && [-1.4, 2.2, 0]) ||
              (isIpadPro && [-2.1, 2.2, 0]) || [-1.8, 2, 0]
            }
            size={
              (isMobile && 0.4) ||
              (isTablet && 0.47) ||
              (isIpadPro && 0.6) ||
              0.6
            }
            rotation={
              (isMobile && [0, 0, 0]) ||
              (isTablet && [0, 0, 0]) ||
              (isIpadPro && [0, 0, 0]) || [0, 0, 0]
            }
          >
            Contact Me
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
          {contacts.map((contact, index) => {
            return (
              <>
                <Text3D
                  font={"/Blogh Trial_Regular.json"}
                  position={
                    (isMobile && [-1.1, 0.5, 0]) ||
                    (isTablet && [-1.1, 0.5, 0]) ||
                    (isIpadPro && [-1, 0.5, 0]) || [-1, 0.5, 0]
                  }
                  size={
                    H[index][0]
                      ? (isMobile && 0.44) ||
                        (isTablet && 0.48) ||
                        (isIpadPro && 0.52) ||
                        0.52
                      : (isMobile && 0.4) ||
                        (isTablet && 0.44) ||
                        (isIpadPro && 0.48) ||
                        0.48
                  }
                  rotation={
                    (isMobile && [0, 0, 0]) ||
                    (isTablet && [0, 0, 0]) ||
                    (isIpadPro && [0, 0, 0]) || [-Math.PI / 20, 0, 0]
                  }
                  onPointerOver={() => {
                    // console.log(navEle + "hover");
                    H[index][1](true);
                  }}
                  onPointerOut={() => {
                    // console.log(navEle + "hover");
                    H[index][1](false);
                  }}
                  onClick={() => {
                    window.open(contact[1], "_blank");
                  }}
                >
                  {contact[0]}

                  <meshStandardMaterial
                    color="#00b825"
                    emissive="#00b825"
                    emissiveIntensity={0.7}
                  />
                </Text3D>
              </>
            );
          })}
        </Float>
      </Canvas>
    </>
  );
};

export default ContactMe;
