import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  width,
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
import SocialScreen from "./SocialScreen";
import TourismScreen from "./TourismScreen";
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
    zencoins: 1250,
  });

  const [isLuckyDrawModalVisible, setIsLuckyDrawModalVisible] = useState(false);

  const handleLuckyDrawPress = () => {
    setIsLuckyDrawModalVisible(true);
  };

  const renderLuckyDrawModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isLuckyDrawModalVisible}
        onRequestClose={() => setIsLuckyDrawModalVisible(false)}
      >
        <View style={styles.luckyDrawModalContainer}>
          <View style={styles.luckyDrawModalContent}>
            <TouchableOpacity
              style={styles.luckyDrawOption}
              onPress={() => {
                // Logic for buying with ZenCoins
                setIsLuckyDrawModalVisible(false);
              }}
            >
              <MaterialCommunityIcons name="coin" size={24} color="#FFD700" />
              <Text style={styles.luckyDrawOptionText}>Buy with ZenCoins</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.luckyDrawOption}
              onPress={() => {
                // Logic for buying with money
                setIsLuckyDrawModalVisible(false);
              }}
            >
              <Ionicons name="card" size={24} color="#4A90E2" />
              <Text style={styles.luckyDrawOptionText}>Buy with Money</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with ZenCoins and Lucky Draw */}
      <View style={styles.headerWithIcons}>
        <TouchableOpacity style={styles.zencoinContainer}>
          <MaterialCommunityIcons name="coin" size={20} color="#FFD700" />
          <Text style={styles.zencoinText}>{userStats.zencoins}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.luckyDrawIcon}
          onPress={handleLuckyDrawPress}
        >
          <MaterialCommunityIcons name="gift" size={24} color="#4A90E2" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
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

        {/* Placeholder for additional content */}
        <View style={styles.placeholderContent}>
          <Text style={styles.placeholderText}>
            More content coming soon...
          </Text>
        </View>
      </ScrollView>

      {renderLuckyDrawModal()}
    </SafeAreaView>
  );
};

//SoacialScreen

// Marketplace Screen

// Game Screen (2048)

/// Movie Screen Component

//HealthScreen
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
