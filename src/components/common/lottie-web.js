import React, { useEffect, createRef } from "react";
import Lottie from "lottie-web";

const LottieWeb = (props) => {
  let animationContainer = createRef();

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: (props.loop === "false" ? false : true),
      autoplay: true,
      animationData: props.source
    });
    return () => anim.destroy();
  }, []);

  return (
    <>
        <div className="animation-container" ref={animationContainer} />
    </>
  );
};

export default LottieWeb;