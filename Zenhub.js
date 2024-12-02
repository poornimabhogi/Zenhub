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
import { FlatList, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

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
//HomeScreen
const HomeScreen = () => {
  const [userStats] = useState({
    totalActivities: 156,
    achievementCount: 24,
    followersCount: 842,
    followingCount: 391,
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <Image
            source={{ uri: "https://via.placeholder.com/120" }}
            style={styles.profileAvatar}
          />
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileBio}>Fitness & Wellness Enthusiast</Text>
          <View style={styles.profileBadges}>
            <MaterialCommunityIcons
              name="shield-star"
              size={24}
              color="#4A90E2"
            />
            <MaterialCommunityIcons name="medal" size={24} color="#FFD700" />
          </View>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{userStats.totalActivities}</Text>
            <Text style={styles.statLabel}>Activities</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{userStats.achievementCount}</Text>
            <Text style={styles.statLabel}>Achievements</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{userStats.followersCount}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
        </View>

        {/* Profile Actions */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.editProfileButton}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareProfileButton}>
            <Ionicons name="share-social" size={20} color="#4A90E2" />
          </TouchableOpacity>
        </View>

        {/* App Stats Section */}
        <View style={styles.appStatsContainer}>
          <Text style={styles.sectionTitle}>App Statistics</Text>
          <View style={styles.appStatCard}>
            <View style={styles.appStatItem}>
              <Ionicons name="time-outline" size={24} color="#4A90E2" />
              <Text style={styles.appStatValue}>47.5 hrs</Text>
              <Text style={styles.appStatLabel}>Total Time</Text>
            </View>
            <View style={styles.appStatItem}>
              <Ionicons name="calendar" size={24} color="#4A90E2" />
              <Text style={styles.appStatValue}>83%</Text>
              <Text style={styles.appStatLabel}>Completion</Text>
            </View>
            <View style={styles.appStatItem}>
              <Ionicons name="trending-up" size={24} color="#4A90E2" />
              <Text style={styles.appStatValue}>Level 8</Text>
              <Text style={styles.appStatLabel}>Current Level</Text>
            </View>
          </View>
        </View>

        {/* Recent Activities */}
        <View style={styles.recentActivities}>
          <Text style={styles.sectionTitle}>Recent Activities</Text>
          {[
            { type: "health", title: "Completed HIIT Workout", time: "2h ago" },
            {
              type: "social",
              title: "Joined Weight Loss Challenge",
              time: "5h ago",
            },
            { type: "achievement", title: "Earned Gold Badge", time: "1d ago" },
          ].map((activity, index) => (
            <View key={index} style={styles.activityItem}>
              <MaterialCommunityIcons
                name={
                  activity.type === "health"
                    ? "heart-pulse"
                    : activity.type === "social"
                    ? "account-group"
                    : "trophy"
                }
                size={24}
                color="#4A90E2"
              />
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>{activity.title}</Text>
                <Text style={styles.activityTime}>{activity.time}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

//SoacialScreen
const SocialScreen = () => {
  const [posts, setPosts] = useState([
    {
      id: "1",
      user: {
        id: "1",
        name: "Sarah Wilson",
        avatar: "https://via.placeholder.com/50",
        isFollowing: false,
      },
      content: {
        type: "image",
        uri: "https://via.placeholder.com/400",
      },
      caption:
        "Morning meditation and yoga session! 🧘‍♀️ #Wellness #MorningRoutine",
      likes: 124,
      comments: 18,
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      user: {
        id: "2",
        name: "Mike Brooks",
        avatar: "https://via.placeholder.com/50",
        isFollowing: true,
      },
      content: {
        type: "image",
        uri: "https://via.placeholder.com/400",
      },
      caption: "New personal record in today's workout! 💪 #FitnessGoals",
      likes: 89,
      comments: 12,
      timestamp: "4 hours ago",
    },
  ]);

  const [isUploading, setIsUploading] = useState(false);

  const handleFollowUser = (userId) => {
    setPosts(
      posts.map((post) => {
        if (post.user.id === userId) {
          return {
            ...post,
            user: {
              ...post.user,
              isFollowing: !post.user.isFollowing,
            },
          };
        }
        return post;
      })
    );
  };

  const handleLikePost = (postId) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            likes: post.likes + (post.isLiked ? -1 : 1),
            isLiked: !post.isLiked,
          };
        }
        return post;
      })
    );
  };

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setIsUploading(true);
        // Simulate upload delay
        setTimeout(() => {
          const newPost = {
            id: String(posts.length + 1),
            user: {
              id: "current_user",
              name: "You",
              avatar: "https://via.placeholder.com/50",
              isFollowing: false,
            },
            content: {
              type: "image",
              uri: result.assets[0].uri,
            },
            caption: "My new wellness journey post! #ZenHub",
            likes: 0,
            comments: 0,
            timestamp: "Just now",
          };
          setPosts([newPost, ...posts]);
          setIsUploading(false);
        }, 1500);
      }
    } catch (error) {
      Alert.alert("Error", "Failed to upload image");
      setIsUploading(false);
    }
  };

  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <View style={styles.userInfo}>
          <Image source={{ uri: item.user.avatar }} style={styles.postAvatar} />
          <Text style={styles.userName}>{item.user.name}</Text>
        </View>
        <TouchableOpacity
          style={[
            styles.followButton,
            item.user.isFollowing && styles.followingButton,
          ]}
          onPress={() => handleFollowUser(item.user.id)}
        >
          <Text
            style={[
              styles.followButtonText,
              item.user.isFollowing && styles.followingButtonText,
            ]}
          >
            {item.user.isFollowing ? "Following" : "Follow"}
          </Text>
        </TouchableOpacity>
      </View>

      <Image source={{ uri: item.content.uri }} style={styles.postImage} />

      <View style={styles.postActions}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handleLikePost(item.id)}
        >
          <Ionicons
            name={item.isLiked ? "heart" : "heart-outline"}
            size={24}
            color={item.isLiked ? "#FF6B6B" : "#333"}
          />
          <Text style={styles.actionText}>{item.likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubble-outline" size={24} color="#333" />
          <Text style={styles.actionText}>{item.comments}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="share-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.postContent}>
        <Text style={styles.postCaption}>
          <Text style={styles.userName}>{item.user.name}</Text> {item.caption}
        </Text>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.socialHeader}>
        <Text style={styles.socialTitle}>Wellness Feed</Text>
        <TouchableOpacity
          style={styles.createPostButton}
          onPress={pickImage}
          disabled={isUploading}
        >
          <Ionicons name="camera" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
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

/// Movie Screen Component
const MovieScreen = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedShowtime, setSelectedShowtime] = useState(null);

  const movies = [
    {
      id: 1,
      title: "Inception Returns",
      image: "https://via.placeholder.com/300",
      rating: "4.5",
      duration: "2h 30min",
      showtimes: ["10:00 AM", "2:00 PM", "6:00 PM", "9:00 PM"],
      price: 12.99,
    },
    {
      id: 2,
      title: "The Matrix Revival",
      image: "https://via.placeholder.com/300",
      rating: "4.8",
      duration: "2h 15min",
      showtimes: ["11:00 AM", "3:00 PM", "7:00 PM", "10:00 PM"],
      price: 14.99,
    },
  ];

  const renderSeats = () => {
    const rows = ["A", "B", "C", "D", "E", "F"];
    const seatsPerRow = 8;

    return (
      <View style={styles.seatingContainer}>
        <Text style={styles.screenText}>SCREEN</Text>
        <View style={styles.screen} />
        {rows.map((row) => (
          <View key={row} style={styles.seatRow}>
            <Text style={styles.rowLabel}>{row}</Text>
            {[...Array(seatsPerRow)].map((_, index) => {
              const seatId = `${row}${index + 1}`;
              const isSelected = selectedSeats.includes(seatId);
              return (
                <TouchableOpacity
                  key={seatId}
                  style={[styles.seat, isSelected && styles.selectedSeat]}
                  onPress={() => {
                    if (isSelected) {
                      setSelectedSeats(
                        selectedSeats.filter((id) => id !== seatId)
                      );
                    } else {
                      setSelectedSeats([...selectedSeats, seatId]);
                    }
                  }}
                >
                  <Text
                    style={[
                      styles.seatText,
                      isSelected && styles.selectedSeatText,
                    ]}
                  >
                    {index + 1}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {!selectedMovie ? (
          <View style={styles.movieListContainer}>
            <Text style={styles.sectionTitle}>Now Showing</Text>
            {movies.map((movie) => (
              <TouchableOpacity
                key={movie.id}
                style={styles.movieCard}
                onPress={() => setSelectedMovie(movie)}
              >
                <Image
                  source={{ uri: movie.image }}
                  style={styles.movieImage}
                />
                <View style={styles.movieInfo}>
                  <Text style={styles.movieTitle}>{movie.title}</Text>
                  <View style={styles.movieMetadata}>
                    <Text style={styles.movieRating}>⭐ {movie.rating}</Text>
                    <Text style={styles.movieDuration}>{movie.duration}</Text>
                  </View>
                  <Text style={styles.moviePrice}>${movie.price}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View style={styles.bookingContainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => {
                setSelectedMovie(null);
                setSelectedSeats([]);
                setSelectedShowtime(null);
              }}
            >
              <Text style={styles.backButtonText}>← Back to Movies</Text>
            </TouchableOpacity>

            <Image
              source={{ uri: selectedMovie.image }}
              style={styles.selectedMovieImage}
            />

            <Text style={styles.selectedMovieTitle}>{selectedMovie.title}</Text>

            <View style={styles.showtimeContainer}>
              <Text style={styles.showtimeTitle}>Select Showtime</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {selectedMovie.showtimes.map((time, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.showtimeButton,
                      selectedShowtime === time && styles.selectedShowtime,
                    ]}
                    onPress={() => setSelectedShowtime(time)}
                  >
                    <Text
                      style={[
                        styles.showtimeText,
                        selectedShowtime === time &&
                          styles.selectedShowtimeText,
                      ]}
                    >
                      {time}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            {selectedShowtime && (
              <>
                {renderSeats()}

                <View style={styles.bookingSummary}>
                  <Text style={styles.summaryTitle}>Booking Summary</Text>
                  <Text>Selected Seats: {selectedSeats.join(", ")}</Text>
                  <Text>
                    Total: $
                    {(selectedSeats.length * selectedMovie.price).toFixed(2)}
                  </Text>

                  <TouchableOpacity
                    style={[
                      styles.bookButton,
                      selectedSeats.length === 0 && styles.disabledButton,
                    ]}
                    disabled={selectedSeats.length === 0}
                    onPress={() =>
                      Alert.alert("Success!", "Tickets booked successfully!")
                    }
                  >
                    <Text style={styles.bookButtonText}>Book Tickets</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

// Tourism Screen Component
const TourismScreen = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [guests, setGuests] = useState(2);

  const destinations = [
    {
      id: 1,
      name: "Bali Paradise",
      image: "https://via.placeholder.com/300",
      rating: 4.8,
      price: 199,
      description: "Experience the magic of Bali with our luxury resorts",
      amenities: ["Pool", "Spa", "Beach Access", "Restaurant"],
      resorts: [
        {
          id: 101,
          name: "Ocean View Resort",
          price: 299,
          rating: 4.9,
          image: "https://via.placeholder.com/300",
        },
        {
          id: 102,
          name: "Tropical Paradise Resort",
          price: 249,
          rating: 4.7,
          image: "https://via.placeholder.com/300",
        },
      ],
    },
    {
      id: 2,
      name: "Maldives Retreat",
      image: "https://via.placeholder.com/300",
      rating: 4.9,
      price: 299,
      description: "Discover crystal clear waters and luxury overwater villas",
      amenities: ["Private Beach", "Diving", "Spa", "Water Sports"],
      resorts: [
        {
          id: 201,
          name: "Water Villa Resort",
          price: 399,
          rating: 5.0,
          image: "https://via.placeholder.com/300",
        },
        {
          id: 202,
          name: "Island Paradise Resort",
          price: 349,
          rating: 4.8,
          image: "https://via.placeholder.com/300",
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {!selectedDestination ? (
          <View style={styles.destinationListContainer}>
            <Text style={styles.sectionTitle}>Popular Destinations</Text>
            {destinations.map((destination) => (
              <TouchableOpacity
                key={destination.id}
                style={styles.destinationCard}
                onPress={() => setSelectedDestination(destination)}
              >
                <Image
                  source={{ uri: destination.image }}
                  style={styles.destinationImage}
                />
                <View style={styles.destinationInfo}>
                  <Text style={styles.destinationName}>{destination.name}</Text>
                  <View style={styles.destinationMetadata}>
                    <Text style={styles.destinationRating}>
                      ⭐ {destination.rating}
                    </Text>
                    <Text style={styles.destinationPrice}>
                      From ${destination.price}/night
                    </Text>
                  </View>
                  <Text style={styles.destinationDescription}>
                    {destination.description}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View style={styles.resortContainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => setSelectedDestination(null)}
            >
              <Text style={styles.backButtonText}>← Back to Destinations</Text>
            </TouchableOpacity>

            <Image
              source={{ uri: selectedDestination.image }}
              style={styles.selectedDestinationImage}
            />

            <Text style={styles.selectedDestinationName}>
              {selectedDestination.name}
            </Text>

            <View style={styles.bookingForm}>
              <Text style={styles.formTitle}>Book Your Stay</Text>

              <View style={styles.dateContainer}>
                <TouchableOpacity
                  style={styles.dateInput}
                  onPress={() => {
                    /* Add date picker logic */
                  }}
                >
                  <Text>Check-in: {checkIn.toDateString()}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.dateInput}
                  onPress={() => {
                    /* Add date picker logic */
                  }}
                >
                  <Text>Check-out: {checkOut.toDateString()}</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.guestsContainer}>
                <Text style={styles.guestsLabel}>Guests:</Text>
                <View style={styles.guestsControls}>
                  <TouchableOpacity
                    style={styles.guestButton}
                    onPress={() => setGuests(Math.max(1, guests - 1))}
                  >
                    <Text style={styles.guestButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.guestsCount}>{guests}</Text>
                  <TouchableOpacity
                    style={styles.guestButton}
                    onPress={() => setGuests(guests + 1)}
                  >
                    <Text style={styles.guestButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <Text style={styles.resortsTitle}>Available Resorts</Text>
            {selectedDestination.resorts.map((resort) => (
              <View key={resort.id} style={styles.resortCard}>
                <Image
                  source={{ uri: resort.image }}
                  style={styles.resortImage}
                />
                <View style={styles.resortInfo}>
                  <Text style={styles.resortName}>{resort.name}</Text>
                  <Text style={styles.resortRating}>⭐ {resort.rating}</Text>
                  <Text style={styles.resortPrice}>${resort.price}/night</Text>
                  <TouchableOpacity
                    style={styles.bookButton}
                    onPress={() =>
                      Alert.alert("Success!", "Resort booked successfully!")
                    }
                  >
                    <Text style={styles.bookButtonText}>Book Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
const HealthScreen = () => {
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

// Update your App.js to include the new screens

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Main App Component
// Update your App.js to include the new screens
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

                    case "Social":
                      return (
                        <Ionicons name="people" size={size} color={color} />
                      );
                    case "Games":
                      return (
                        <Ionicons
                          name="game-controller"
                          size={size}
                          color={color}
                        />
                      );
                    case "Movies":
                      return <Ionicons name="film" size={size} color={color} />;
                    case "Tourism":
                      return (
                        <Ionicons name="airplane" size={size} color={color} />
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
                options={{
                  title: "Profile",
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person" size={size} color={color} />
                  ),
                }}
              />
              <Tab.Screen
                name="Social"
                component={SocialScreen}
                options={{ title: "Social" }}
              />
              <Tab.Screen
                name="MarketplaceScreen"
                component={MarketplaceScreen}
                options={{
                  title: "Marketplace",
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons name="storefront" size={size} color={color} />
                  ),
                }}
              />

              <Tab.Screen
                name="Movies"
                component={MovieScreen}
                options={{ title: "Movies" }}
              />
              <Tab.Screen
                name="Tourism"
                component={TourismScreen}
                options={{ title: "Tourism" }}
              />

              <Tab.Screen
                name="Games"
                component={GameScreen}
                options={{ title: "Games" }}
              />
              <Tab.Screen
                name="Health"
                component={HealthScreen}
                options={{
                  title: "Health",
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons name="fitness" size={size} color={color} />
                  ),
                }}
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
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  profileHeader: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileAvatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  profileBio: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  profileBadges: {
    flexDirection: "row",
    gap: 10,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: "white",
    marginTop: 20,
    marginHorizontal: 15,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4A90E2",
  },
  statLabel: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  statDivider: {
    width: 1,
    height: "100%",
    backgroundColor: "#eee",
  },
  actionButtons: {
    flexDirection: "row",
    paddingHorizontal: 15,
    marginTop: 20,
    gap: 10,
  },
  editProfileButton: {
    flex: 1,
    backgroundColor: "#4A90E2",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  editProfileText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  shareProfileButton: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#4A90E2",
    width: 50,
    alignItems: "center",
  },
  appStatsContainer: {
    padding: 15,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  appStatCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  appStatItem: {
    alignItems: "center",
  },
  appStatValue: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  appStatLabel: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  recentActivities: {
    padding: 15,
    marginTop: 10,
  },
  activityItem: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  activityContent: {
    marginLeft: 15,
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  activityTime: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  // Movie Screen Styles
  movieListContainer: {
    padding: 15,
  },
  movieCard: {
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
  },
  movieImage: {
    width: "100%",
    height: 200,
  },
  movieInfo: {
    padding: 15,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  movieMetadata: {
    flexDirection: "row",
    marginTop: 5,
  },
  movieRating: {
    marginRight: 10,
  },
  seatingContainer: {
    padding: 15,
    alignItems: "center",
  },
  screen: {
    width: "80%",
    height: 5,
    backgroundColor: "#DDD",
    marginBottom: 20,
  },
  screenText: {
    marginBottom: 10,
    color: "#666",
  },
  seatRow: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  rowLabel: {
    width: 20,
    marginRight: 10,
  },
  seat: {
    width: 30,
    height: 30,
    margin: 3,
    borderRadius: 5,
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedSeat: {
    backgroundColor: "#4A90E2",
  },
  seatText: {
    fontSize: 12,
  },
  selectedSeatText: {
    color: "white",
  },

  // Tourism Screen Styles
  destinationListContainer: {
    padding: 15,
  },
  destinationCard: {
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
  },
  destinationImage: {
    width: "100%",
    height: 200,
  },
  destinationInfo: {
    padding: 15,
  },
  destinationName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  destinationMetadata: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  bookingForm: {
    backgroundColor: "white",
    padding: 15,
    margin: 15,
    borderRadius: 10,
  },
  dateContainer: {
    marginBottom: 15,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: "#DDD",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  guestsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  guestsControls: {
    flexDirection: "row",
    alignItems: "center",
  },
  guestButton: {
    width: 30,
    height: 30,
    backgroundColor: "#4A90E2",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  guestButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  guestsCount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  resortCard: {
    backgroundColor: "white",
    margin: 15,
    borderRadius: 10,
    overflow: "hidden",
  },
  resortImage: {
    width: "100%",
    height: 200,
  },
  resortInfo: {
    padding: 15,
  },
  resortName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  resortPrice: {
    color: "#4A90E2",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  backButton: {
    padding: 15,
  },
  backButtonText: {
    color: "#4A90E2",
    fontSize: 16,
  },
  selectedMovieImage: {
    width: "100%",
    height: 250,
  },
  selectedMovieTitle: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 15,
  },
  showtimeContainer: {
    padding: 15,
  },
  showtimeTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  showtimeButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#F0F0F0",
    marginRight: 10,
  },
  selectedShowtime: {
    backgroundColor: "#4A90E2",
  },
  showtimeText: {
    color: "#333",
  },
  selectedShowtimeText: {
    color: "white",
  },
  bookingSummary: {
    padding: 15,
    backgroundColor: "white",
    margin: 15,
    borderRadius: 10,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  bookButton: {
    backgroundColor: "#4A90E2",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
  disabledButton: {
    backgroundColor: "#CCCCCC",
  },
  bookButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  // Social Screen Styles
  socialHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  socialTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  createPostButton: {
    backgroundColor: "#4A90E2",
    padding: 10,
    borderRadius: 25,
  },
  postContainer: {
    backgroundColor: "white",
    marginBottom: 10,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  postAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 14,
  },
  followButton: {
    backgroundColor: "#4A90E2",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  followingButton: {
    backgroundColor: "#E0E0E0",
  },
  followButtonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  followingButtonText: {
    color: "#333",
  },
  postImage: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
  },
  postActions: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  actionText: {
    marginLeft: 5,
    color: "#333",
  },
  postContent: {
    padding: 10,
  },
  postCaption: {
    fontSize: 14,
    lineHeight: 20,
  },
  timestamp: {
    fontSize: 12,
    color: "#666",
    marginTop: 5,
  },
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
  },
  gameCell256: {
    backgroundColor: "#0097A7",
  },
  gameCell512: {
    backgroundColor: "#00838F",
  },
  gameCell1024: {
    backgroundColor: "#006064",
  },
  gameCell2048: {
    backgroundColor: "#004D40",
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
