import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import styles from "./styles";
import React from "react";
const GamesScreen = ({ navigation }) => {
  const [board, setBoard] = useState(
    Array(4)
      .fill()
      .map(() => Array(4).fill(0))
  );
  const [score, setScore] = useState(0);

  const initializeGame = () => {
    const newBoard = Array(4)
      .fill()
      .map(() => Array(4).fill(0));
    addRandomTile(newBoard);
    addRandomTile(newBoard);
    setBoard(newBoard);
    setScore(0);
  };

  const addRandomTile = (gameBoard) => {
    const emptyCells = [];
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        if (gameBoard[r][c] === 0) {
          emptyCells.push({ r, c });
        }
      }
    }

    if (emptyCells.length > 0) {
      const { r, c } =
        emptyCells[Math.floor(Math.random() * emptyCells.length)];
      gameBoard[r][c] = Math.random() < 0.9 ? 2 : 4;
    }
  };

  const rotateBoardClockwise = (board) => {
    const newBoard = board[0].map((val, index) =>
      board.map((row) => row[index]).reverse()
    );
    return newBoard;
  };

  const moveLeft = (board) => {
    let newScore = score;
    const newBoard = board.map((row) => {
      // Remove zeros
      const filteredRow = row.filter((cell) => cell !== 0);

      // Merge like numbers
      for (let i = 0; i < filteredRow.length - 1; i++) {
        if (filteredRow[i] === filteredRow[i + 1]) {
          filteredRow[i] *= 2;
          newScore += filteredRow[i];
          filteredRow.splice(i + 1, 1);
        }
      }

      // Pad with zeros
      while (filteredRow.length < 4) {
        filteredRow.push(0);
      }

      return filteredRow;
    });

    setScore(newScore);
    return newBoard;
  };

  const slideTiles = (direction) => {
    let newBoard = JSON.parse(JSON.stringify(board));
    let rotations = 0;

    switch (direction) {
      case "LEFT":
        rotations = 0;
        break;
      case "DOWN":
        rotations = 1;
        break;
      case "RIGHT":
        rotations = 2;
        break;
      case "UP":
        rotations = 3;
        break;
    }

    // Rotate board to simulate different directions
    for (let i = 0; i < rotations; i++) {
      newBoard = rotateBoardClockwise(newBoard);
    }

    // Move tiles
    newBoard = moveLeft(newBoard);

    // Rotate back
    for (let i = 0; i < (4 - rotations) % 4; i++) {
      newBoard = rotateBoardClockwise(newBoard);
    }

    // Add random tile if board changed
    if (JSON.stringify(newBoard) !== JSON.stringify(board)) {
      addRandomTile(newBoard);
      setBoard(newBoard);
    }
  };

  const gesture = Gesture.Pan().onEnd((event) => {
    const { translationX, translationY } = event;
    const absX = Math.abs(translationX);
    const absY = Math.abs(translationY);
    const minSwipeDistance = 20;

    if (absX > absY && absX > minSwipeDistance) {
      // Horizontal swipe
      if (translationX > 0) {
        slideTiles("RIGHT");
      } else {
        slideTiles("LEFT");
      }
    } else if (absY > absX && absY > minSwipeDistance) {
      // Vertical swipe
      if (translationY > 0) {
        slideTiles("DOWN");
      } else {
        slideTiles("UP");
      }
    }
  });

  useEffect(() => {
    initializeGame();
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <GestureDetector gesture={gesture}>
        <View style={styles.gameContainer}>
          <Text style={styles.sectionTitle}>2048 Game</Text>
          <View style={styles.gameHeader}>
            <Text style={styles.scoreText}>Score: {score}</Text>
            <TouchableOpacity
              style={styles.newGameButton}
              onPress={initializeGame}
            >
              <Text style={styles.newGameButtonText}>New Game</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.gameBoard}>
            {board.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.gameRow}>
                {row.map((cell, cellIndex) => (
                  <View
                    key={cellIndex}
                    style={[
                      styles.gameCell,
                      styles[`gameCell${cell}`] || styles.gameCellEmpty,
                    ]}
                  >
                    <Text style={styles.gameCellText}>{cell || ""}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};
export default GamesScreen;
