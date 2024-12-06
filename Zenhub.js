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

import styles from "./styles";
import MarketplaceScreen from "./MarketplaceScreen";
import MoviesScreen from "./MoviesScreen";
import GamesScreen from "./GamesScreen";
// In your React Native component

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
// Marketplace Screen

// Game Screen (2048)

/// Movie Screen Component

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

// App.j

// Import screens from screens folder

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const icons = {
            HomeTab: "person",
            Social: "people",
            MarketplaceScreen: "storefront",
            Games: "game-controller",
            Movies: "film",
            Tourism: "airplane",
            Health: "fitness",
          };
          return (
            <Ionicons name={icons[route.name]} size={size} color={color} />
          );
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
        component={MoviesScreen}
        options={{ title: "Movies" }}
      />
      <Tab.Screen
        name="Tourism"
        component={TourismScreen}
        options={{ title: "Tourism" }}
      />
      <Tab.Screen
        name="Games"
        component={GamesScreen}
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
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
// Main App Component
// Update your App.js to include the new screens

export default App;
