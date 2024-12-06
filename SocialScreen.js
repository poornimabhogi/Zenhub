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
import styles from "./styles";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { FlatList, Alert } from "react-native";
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
export default SocialScreen;
