import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

function Arrow({
  children,
  disabled,
  onClick,
  addstyle
}) {

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className='arrowStyleTeam'
      style={addstyle}
    >
      {children}
    </button>
  );
}

export function LeftArrow() {
  const {
    isFirstItemVisible,
    scrollPrev,
    visibleElements,
    initComplete
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleElements.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleElements]);

  return (
    <Arrow addstyle={{left: "40px"}} disabled={disabled} onClick={() => scrollPrev()}>
      <img loading="lazy" style={{margin: "auto"}} src="/icon/leftArrow.svg" height={10} alt="left"/>
    </Arrow>
  );
}

export function RightArrow() {
  const { isLastItemVisible, scrollNext, visibleElements } = React.useContext(
    VisibilityContext
  );

  const [disabled, setDisabled] = React.useState(
    !visibleElements.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleElements]);

  return (
    <Arrow addstyle={{right: "40px"}} disabled={disabled} onClick={() => scrollNext()}>
      <img loading="lazy" style={{margin: "auto"}} src="/icon/rightArrow.svg" height={10} alt="right"/>
    </Arrow>
  );
}
