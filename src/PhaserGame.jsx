import React, { useEffect, useRef } from "react";
import Phaser from "phaser";

const PhaserGame = () => {
  const gameRef = useRef(null);

  useEffect(() => {
    // Prevent duplicate games (hot reload issue in React)
    if (gameRef.current) return;

    class MyScene extends Phaser.Scene {
      constructor() {
        super("my-scene");
      }

      preload() {
        // Load assets (images, sprites, sounds)
        this.load.image("tree", "assets/tree.png");
      }

      create() {
        // Add an image to the scene
        this.add.image(400, 300, "tree");

        // Add text
        this.add.text(300, 500, "Welcome to Ecomitra Game!", {
          fontSize: "20px",
          fill: "#228B22",
        });
      }

      update() {
        // Game logic / animations
      }
    }

    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      backgroundColor: "#a8e6cf",
      parent: "phaser-container", // attaches to div below
      scene: MyScene,
    };

    gameRef.current = new Phaser.Game(config);

    return () => {
      // Cleanup when component unmounts
      gameRef.current.destroy(true);
      gameRef.current = null;
    };
  }, []);

  return <div id="phaser-container" />;
};

export default PhaserGame;
