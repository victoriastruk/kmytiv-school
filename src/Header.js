import React, { useEffect, useState } from "react";

import Navigation from './Navigation';

export default function Header() {
  const [sticky, setSticky] = useState( "" );

  // on render, set listener
  useEffect( () => {
    window.addEventListener( "scroll", isSticky );
    return () => {
      window.removeEventListener( "scroll", isSticky );
    };
  }, [] );

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop > 0 ? "is-sticky" : "";
    setSticky( stickyClass );
  };

  const classes = `header-section back ${sticky}`;

  return (
    <header fluid="md" className={classes} >
      <Navigation />
    </header>
  );
}
