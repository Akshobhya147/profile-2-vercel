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

const Projects = ({ isMobile, isTablet, isIpadPro, backLink = "/" }: Media) => {
  const [backHover, setBackHoverState] = useState(false);
  const [nextHover, setNextHoverState] = useState(false);
  const [hideNext, setHideNextState] = useState(false);
  const navigate = useNavigate();

  const H2 = new Array(
    // for each new project, add new useState here.
    useState(false),
    useState(false),
    useState(false),
    useState(false),
    useState(false)
  );

  const H1 = new Array(
    useState(false),
    useState(false),
    useState(false),
    useState(false),
    useState(false),
    useState(false)
  );

  const projects2 = [
    // add new projects here.
    // if number of projects becomes 5, create a similar projects3
    // and below, in the return, create another Canvas element.
    //also, put next and back button only in first canvas (in order of view).
    ["     Smart Dashcam", "smartdashcam", "route"],
    ["       \n       Beach Volley", "beachvolley", "route"],
    ["\n\n       Block Puzzle", "blockpuzzle", "route"],
    [
      "\n\n\n      Task Manager",
      "https://taskmanager-bygatsby147.vercel.app/",
      "link",
    ],
    [
      "\n\n\n\n            Durdle",
      "https://akshobhya147.github.io/Durdle-A-Wordle-Clone/",
      "link",
    ],
  ];

  const projects1 = [
    ["       Python Paper\n           Scissor", "pps", "route"],
    ["\n\n      Ramp Mayhem", "rampmayhem", "route"],
    ["\n\n\n     Microprocessor", "microprocessor", "route"],
    ["\n\n\n\n         Red Chase", "redchase", "route"],
    ["\n\n\n\n\n        Save Ducky", "saveducky", "route"],
    [
      "\n\n\n\n\n\n        Tic Tac Toe",
      "https://akshobhya147.github.io/tic-tac-toe/",
      "link",
    ],
  ];

  return (
    <>
      <Canvas className="projects_canvas" id="2">
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
            (isTablet && [0, -0.3, 0.3]) ||
            (isIpadPro && [0, -0.3, 0.2]) || [0, -0.3, 0.2]
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
            (isMobile && [0.6, -2, 0.3]) ||
            (isTablet && [0.8, -2, 0.3]) ||
            (isIpadPro && [3, -2, 0.2]) || [3, -2, 0.2]
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
              backHover
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
              setBackHoverState(true);
            }}
            onPointerOut={() => {
              // console.log(navEle + "hover");
              setBackHoverState(false);
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
          <Text3D
            font={"/Blogh Trial_Regular.json"}
            position={
              (isMobile && [0.8, -3.5, 0.8]) ||
              (isTablet && [1.2, -3.5, 0.8]) ||
              (isIpadPro && [-5, -3.5, 0.8]) || [5, -3.5, 0.8]
            }
            size={
              nextHover
                ? !hideNext
                  ? (isMobile && 0.3) ||
                    (isTablet && 0.38) ||
                    (isIpadPro && 0.46) ||
                    0.4
                  : 0
                : !hideNext
                  ? (isMobile && 0.25) ||
                    (isTablet && 0.32) ||
                    (isIpadPro && 0.4) ||
                    0.36
                  : 0
            }
            rotation={
              (isMobile && [-0.3, 0, 0]) ||
              (isTablet && [-0.2, 0, 0]) ||
              (isIpadPro && [0, 0, 0]) || [0, -0.1, 0.05]
            }
            onPointerOver={() => {
              // console.log(navEle + "hover");
              setNextHoverState(true);
            }}
            onPointerOut={() => {
              // console.log(navEle + "hover");
              setNextHoverState(false);
            }}
            onClick={() => {
              window.open("/projects#1", "_self");
              setHideNextState(true);
              console.log(hideNext);
            }}
          >
            Next
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
              (isMobile && [-1.1, 2, 0]) ||
              (isTablet && [-1.4, 2.2, 0]) ||
              (isIpadPro && [-1.9, 2.2, 0]) || [-1.8, 2, 0]
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
            Projects
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
          {projects2.map((project, index) => {
            return (
              <>
                <Text3D
                  font={"/Blogh Trial_Regular.json"}
                  position={
                    (isMobile && [-2.3, 0.9, 0]) ||
                    (isTablet && [-2.8, 0.8, 0]) ||
                    (isIpadPro && [-3.6, 0.5, 0]) || [-3.6, 0.5, 0]
                  }
                  size={
                    H2[index][0]
                      ? (isMobile && 0.34) ||
                        (isTablet && 0.4) ||
                        (isIpadPro && 0.52) ||
                        0.52
                      : (isMobile && 0.3) ||
                        (isTablet && 0.36) ||
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
                    H2[index][1](true);
                  }}
                  onPointerOut={() => {
                    // console.log(navEle + "hover");
                    H2[index][1](false);
                  }}
                  onClick={() => {
                    project[2] == "route"
                      ? navigate(project[1])
                      : window.open(project[1]);
                  }}
                >
                  {project[0]}

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

      <Canvas className="projects_canvas" id="1">
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
            (isTablet && [0, -0.3, 0.3]) ||
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
        <Float
          speed={0.8}
          scale={1}
          floatIntensity={0.01}
          floatingRange={[0.01, 0.01]}
        >
          {projects1.map((project, index) => {
            return (
              <>
                <Text3D
                  font={"/Blogh Trial_Regular.json"}
                  position={
                    (isMobile && [-2.25, 2.6, 0]) ||
                    (isTablet && [-2.7, 2.5, 0]) ||
                    (isIpadPro && [-3.6, 2.5, 0]) || [-3.6, 2.5, 0]
                  }
                  size={
                    H1[index][0]
                      ? (isMobile && 0.34) ||
                        (isTablet && 0.4) ||
                        (isIpadPro && 0.52) ||
                        0.52
                      : (isMobile && 0.3) ||
                        (isTablet && 0.36) ||
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
                    H1[index][1](true);
                  }}
                  onPointerOut={() => {
                    // console.log(navEle + "hover");
                    H1[index][1](false);
                  }}
                  onClick={() => {
                    project[2] == "route"
                      ? navigate(project[1])
                      : window.open(project[1]);
                  }}
                >
                  {project[0]}

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

export default Projects;
