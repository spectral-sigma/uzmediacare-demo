"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Snap from "lenis/snap"; // Import the specific snap module

export default function SmoothSnap() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const snap = new Snap(lenis, {
      type: "mandatory", // 'mandatory' or 'proximity'
      lerp: 0.1, // Smoothness of the snap animation
      velocityThreshold: 5, // Velocity required to trigger a snap
    });

    // 3. Add your sections to the snap logic
    // Select all elements you want to snap to (e.g., sections with class "snap-section")
    const sections = document.querySelectorAll(".snap-section");
    sections.forEach((section) => {
      snap.addElement(section, {
        align: "start", // 'start', 'center', or 'end'
      });
    });

    // 4. Standard Lenis Animation Loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
      // Snap doesn't always need explicit destroy if Lenis is destroyed,
      // but it's good practice if the library provides it.
    };
  }, []);

  return null;
}
