import React, { useCallback, useMemo } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import { particlesConfig } from "@/app/data/particles-config";

const ParticlesComponents = () => {
  const options = useMemo(() => {
    return {
      ...particlesConfig,
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);

  return <Particles init={particlesInit} options={options} />;
};

export default ParticlesComponents;
