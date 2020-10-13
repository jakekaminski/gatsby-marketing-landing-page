import React, { useState, useEffect, createRef } from "react"
import lottie from "lottie-web"
import '@lottiefiles/lottie-player'
import animation from "../../animations/develop.json"

const Animation = () => {
  let animationContainer = createRef();

  // lottie.loadAnimation({
  //   container: animationContainer.current, // current instance of our container!
  //   animationData: animation, // animation file!
  //   renderer: "svg",
  //   loop: true,
  //   autoplay: true
  // });

  useEffect(() => {
    const anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animation
    });
    return () => anim.destroy(); // optional clean up for unmounting
    }, []);

  return (
    <div>
        <div className="animation-container" ref={animationContainer} />
    </div>
  );
};

export default Animation;