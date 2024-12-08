import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  Modal,
  FlatList,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import styles from "./styles";
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
export default HealthScreen;
