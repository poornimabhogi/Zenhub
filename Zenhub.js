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
import HealthScreen from "./HealthScreen";
import ProfileScreen from "./ProfileScreen";
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
// In the HomeScreen component, modify the header section
const HomeScreen = ({ navigation }) => {
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
      {/* Modified Header with Profile Icon and ZenCoins */}
      <View style={styles.headerWithIcons}>
        <TouchableOpacity
          style={styles.profileIconContainer}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            source={{ uri: "https://via.placeholder.com/120" }}
            style={styles.headerProfileIcon}
          />
        </TouchableOpacity>
        <View style={styles.headerRightIcons}>
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
      </View>

      {/* Rest of the HomeScreen remains the same */}
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
        {/* Existing content */}
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
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
// Main App Component
// Update your App.js to include the new screens

export default App;
