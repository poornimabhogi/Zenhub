import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PanGestureHandler } from "react-native-gesture-handler";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

// Authentication Screen
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      navigation.navigate("Home");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <SafeAreaView style={styles.loginContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.loginKeyboardView}
      >
        <View style={styles.loginContent}>
          <Text style={styles.loginTitle}>ZenHub Wellness</Text>
          <TextInput
            style={styles.loginInput}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.loginInput}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.guestButton}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.guestButtonText}>Continue as Guest</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

// Home Screen
const HomeScreen = () => {
  const [isPremium, setIsPremium] = useState(false);
  const [streakDays, setStreakDays] = useState(5);

  const dailyGoals = [
    { icon: "meditation", title: "Meditation", progress: 0.7, premium: false },
    { icon: "dumbbell", title: "Exercise", progress: 0.4, premium: false },
    { icon: "food-apple", title: "Nutrition", progress: 0.9, premium: true },
    { icon: "sleep", title: "Sleep Tracking", progress: 0.6, premium: true },
  ];

  const premiumFeatures = [
    {
      icon: "star",
      title: "Premium Features",
      description: "Unlock all premium content",
      price: "$4.99/month",
    },
    {
      icon: "crown",
      title: "No Ads",
      description: "Ad-free experience",
      included: true,
    },
    {
      icon: "chart-line",
      title: "Advanced Analytics",
      description: "Detailed progress tracking",
      included: true,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Profile and Points Section */}
        <View style={styles.headerContainer}>
          <View style={styles.profileSection}>
            <Image
              source={{ uri: "https://via.placeholder.com/50" }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.username}>Wellness Warrior</Text>
              <View style={styles.streakContainer}>
                <MaterialCommunityIcons name="fire" size={16} color="#FF6B6B" />
                <Text style={styles.streakText}>{streakDays} Day Streak!</Text>
              </View>
            </View>
          </View>
          <View style={styles.pointsSection}>
            <Text style={styles.pointsText}>🏆 250 pts</Text>
            <TouchableOpacity style={styles.premiumButton}>
              <Text style={styles.premiumButtonText}>🌟 Go Premium</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Premium Promotion Banner */}
        {!isPremium && (
          <TouchableOpacity style={styles.premiumBanner}>
            <View style={styles.premiumContent}>
              <MaterialCommunityIcons name="crown" size={24} color="#FFD700" />
              <View style={styles.premiumTextContainer}>
                <Text style={styles.premiumTitle}>Unlock Premium</Text>
                <Text style={styles.premiumDescription}>
                  Get personalized wellness plans & exclusive content
                </Text>
              </View>
            </View>
            <Text style={styles.premiumPrice}>First month 50% off!</Text>
          </TouchableOpacity>
        )}

        {/* Quick Challenges Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Daily Challenges</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[
              {
                icon: "meditation",
                title: "10min Meditation",
                reward: "50pts",
                time: "10 min",
              },
              {
                icon: "run",
                title: "Quick HIIT",
                reward: "100pts",
                time: "15 min",
                premium: true,
              },
              {
                icon: "food",
                title: "Healthy Recipe",
                reward: "30pts",
                time: "20 min",
              },
            ].map((challenge, index) => (
              <TouchableOpacity key={index} style={styles.challengeCard}>
                <MaterialCommunityIcons
                  name={challenge.icon}
                  size={30}
                  color="#4A90E2"
                />
                <Text style={styles.challengeTitle}>{challenge.title}</Text>
                <Text style={styles.challengeTime}>{challenge.time}</Text>
                <View style={styles.rewardContainer}>
                  <Text style={styles.rewardText}>{challenge.reward}</Text>
                  {challenge.premium && (
                    <MaterialCommunityIcons
                      name="crown"
                      size={16}
                      color="#FFD700"
                    />
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Daily Goals Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Daily Goals</Text>
            <TouchableOpacity style={styles.customizeButton}>
              <Text style={styles.customizeButtonText}>Customize</Text>
            </TouchableOpacity>
          </View>
          {dailyGoals.map((goal, index) => (
            <View key={index} style={styles.goalCard}>
              <View style={styles.goalHeader}>
                <MaterialCommunityIcons
                  name={goal.icon}
                  size={24}
                  color="#4A90E2"
                />
                <Text style={styles.goalTitle}>{goal.title}</Text>
                {goal.premium && (
                  <MaterialCommunityIcons
                    name="crown"
                    size={16}
                    color="#FFD700"
                  />
                )}
              </View>
              <View style={styles.progressBar}>
                <View
                  style={[
                    styles.progressFill,
                    { width: `${goal.progress * 100}%` },
                  ]}
                />
              </View>
            </View>
          ))}
        </View>

        {/* Community Challenges */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Community Challenges</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[
              { title: "30 Days Meditation", participants: 1240, prize: "$50" },
              {
                title: "Weight Loss Challenge",
                participants: 850,
                prize: "$100",
              },
              { title: "Sleep Better", participants: 620, prize: "$30" },
            ].map((challenge, index) => (
              <TouchableOpacity key={index} style={styles.communityCard}>
                <Text style={styles.communityTitle}>{challenge.title}</Text>
                <Text style={styles.communityParticipants}>
                  👥 {challenge.participants} joined
                </Text>
                <Text style={styles.communityPrize}>
                  Prize: {challenge.prize}
                </Text>
                <TouchableOpacity style={styles.joinButton}>
                  <Text style={styles.joinButtonText}>Join Now</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Coach Section */}
        <TouchableOpacity style={styles.coachSection}>
          <Image
            source={{ uri: "https://via.placeholder.com/60" }}
            style={styles.coachAvatar}
          />
          <View style={styles.coachInfo}>
            <Text style={styles.coachTitle}>Personal Wellness Coach</Text>
            <Text style={styles.coachDescription}>
              Get personalized guidance from certified experts
            </Text>
          </View>
          <Text style={styles.coachPrice}>From $29.99/mo</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
// Wellness Marketplace Screen
const MarketplaceScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    {
      name: "Meditation Cushion",
      price: 29.99,
      image: "https://via.placeholder.com/150",
      category: "Meditation",
    },
    {
      name: "Yoga Mat",
      price: 49.99,
      image: "https://via.placeholder.com/150",
      category: "Fitness",
    },
    {
      name: "Aromatherapy Set",
      price: 39.99,
      image: "https://via.placeholder.com/150",
      category: "Wellness",
    },
  ];

  const categories = ["All", "Meditation", "Fitness", "Wellness"];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.sectionTitle}>Wellness Marketplace</Text>

      <ScrollView horizontal style={styles.categoryScroll}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategory,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={styles.categoryButtonText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView>
        <View style={styles.productGrid}>
          {filteredProducts.map((product, index) => (
            <TouchableOpacity key={index} style={styles.productCard}>
              <Image
                source={{ uri: product.image }}
                style={styles.productImage}
              />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>${product.price}</Text>
              <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyButtonText}>Add to Cart</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Game Screen (2048)

const GameScreen = () => {
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
// Navigation Setup
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Main App Component
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {() => (
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                  switch (route.name) {
                    case "HomeTab":
                      return <Ionicons name="home" size={size} color={color} />;
                    case "Marketplace":
                      return (
                        <FontAwesome5 name="store" size={size} color={color} />
                      );
                    case "Games":
                      return (
                        <Ionicons
                          name="game-controller"
                          size={size}
                          color={color}
                        />
                      );
                    default:
                      return null;
                  }
                },
                tabBarActiveTintColor: "#4A90E2",
                tabBarInactiveTintColor: "gray",
              })}
            >
              <Tab.Screen
                name="HomeTab"
                component={HomeScreen}
                options={{ title: "Home" }}
              />
              <Tab.Screen
                name="Marketplace"
                component={MarketplaceScreen}
                options={{ title: "Market" }}
              />
              <Tab.Screen
                name="Games"
                component={GameScreen}
                options={{ title: "Games" }}
              />
            </Tab.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Styles

const styles = StyleSheet.create({
  // Game-related styles
  gameContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gameBoard: {
    backgroundColor: "#BBB",
    borderRadius: 5,
    padding: 5,
  },
  gameRow: {
    flexDirection: "row",
  },
  gameCell: {
    width: 75,
    height: 75,
    backgroundColor: "#E6F2FF",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  gameCellEmpty: {
    backgroundColor: "#E6F2FF",
  },
  gameCellText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  // Tile color styles
  gameCell2: { backgroundColor: "#E0F7FA" },
  gameCell4: { backgroundColor: "#B2EBF2" },
  gameCell8: { backgroundColor: "#80DEEA" },
  gameCell16: { backgroundColor: "#4DD0E1" },
  gameCell32: { backgroundColor: "#26C6DA" },
  gameCell64: { backgroundColor: "#00BCD4" },
  gameCell128: {
    backgroundColor: "#00ACC1",
    color: "white",
  },
  gameCell256: {
    backgroundColor: "#0097A7",
    color: "white",
  },
  gameCell512: {
    backgroundColor: "#00838F",
    color: "white",
  },
  gameCell1024: {
    backgroundColor: "#006064",
    color: "white",
  },
  gameCell2048: {
    backgroundColor: "#004D40",
    color: "white",
  },
  gameHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  newGameButton: {
    backgroundColor: "#4A90E2",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  newGameButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },

  // Container and general styles
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#4A90E2",
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  // Login-related styles
  loginContainer: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
  },
  loginKeyboardView: {
    flex: 1,
    justifyContent: "center",
  },
  loginContent: {
    paddingHorizontal: 30,
    width: "100%",
  },
  loginTitle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#4A90E2",
  },
  loginInput: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  loginButton: {
    backgroundColor: "#4A90E2",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

  // Header and profile styles
  premiumBanner: {
    backgroundColor: "#4A90E2",
    margin: 15,
    padding: 15,
    borderRadius: 10,
  },
  premiumContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  premiumTextContainer: {
    marginLeft: 10,
    flex: 1,
  },
  premiumTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  premiumDescription: {
    color: "white",
    fontSize: 12,
  },
  premiumPrice: {
    color: "#FFD700",
    fontWeight: "bold",
    marginTop: 5,
  },
  challengeCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 5,
    width: 150,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  challengeTitle: {
    fontWeight: "bold",
    marginTop: 5,
  },
  challengeTime: {
    color: "#666",
    fontSize: 12,
  },
  rewardContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  rewardText: {
    color: "#4A90E2",
    fontWeight: "bold",
    marginRight: 5,
  },
  streakContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  streakText: {
    color: "#FF6B6B",
    marginLeft: 5,
    fontSize: 12,
  },
  communityCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 5,
    width: 200,
  },
  communityTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  communityParticipants: {
    color: "#666",
    fontSize: 12,
    marginTop: 5,
  },
  communityPrize: {
    color: "#4A90E2",
    fontWeight: "bold",
    marginTop: 5,
  },
  joinButton: {
    backgroundColor: "#4A90E2",
    padding: 8,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  joinButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  coachSection: {
    backgroundColor: "white",
    margin: 15,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  coachAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  coachInfo: {
    flex: 1,
    marginLeft: 15,
  },
  coachTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  coachDescription: {
    color: "#666",
    fontSize: 12,
  },
  coachPrice: {
    color: "#4A90E2",
    fontWeight: "bold",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "white",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
  },

  // Points and lottery styles
  pointsSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  pointsText: {
    marginRight: 10,
  },
  lotteryButton: {
    backgroundColor: "#4A90E2",
    padding: 5,
    borderRadius: 5,
  },
  lotteryButtonText: {
    color: "white",
    fontSize: 12,
  },

  // Section and content styles
  sectionContainer: {
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 15,
    marginBottom: 10,
  },

  // Product and marketplace styles
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  productCard: {
    width: Dimensions.get("window").width / 2 - 25,
    backgroundColor: "white",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 15,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productPrice: {
    color: "#4A90E2",
    marginVertical: 5,
  },
  buyButton: {
    backgroundColor: "#4A90E2",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  buyButtonText: {
    color: "white",
    fontWeight: "bold",
  },

  // Guest button styles
  guestButton: {
    backgroundColor: "#F0F4F8",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  guestButtonText: {
    color: "#4A90E2",
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default App;
