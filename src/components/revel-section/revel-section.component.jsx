import React, { useEffect, useRef } from "react";
import { useVisibilityHook } from "react-observer-api";

import "./revel-section.style.css";

const RevelSection = ({ children }) => {
  const { setElement, isVisible } = useVisibilityHook({
    root: null,
    rootMargin: "0px",
    threshold: 0,
    always: false,
  });
  const parentEl = useRef(null);

  useEffect(() => {
    if (!isVisible) return;
    parentEl.current.style.opacity = 1;
  }, [isVisible]);

  return (
    <div ref={setElement}>
      {React.Children.map(children, (child, i) => {
        const currentEl = React.cloneElement(child, {
          ref: parentEl,
          className: `${child.props?.className} section section--hidden`,
        });

        return currentEl;
      })}
    </div>
  );
};

export default RevelSection;
