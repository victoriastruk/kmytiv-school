import React, { useEffect, useState } from "react";
import Navigation from './Navigation';

export default function Header() {
  const [sticky, setSticky] = useState( "" );

  // встановлення слухача під час візуалізації
  useEffect( () => {
    window.addEventListener( "scroll", isSticky );
    return () => {
      window.removeEventListener( "scroll", isSticky );
    };
  }, [] );

  const isSticky = () => {
    /* Метод, який фіксує заголовок після певного прокручування */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop > 0 ? "is-sticky" : "";
    setSticky( stickyClass );
  };

  const classes = `header-section fw-bold back ${sticky}`;

  return (
    <header fluid="lg" className={classes} >
      <Navigation />
    </header>
  );
}
