import React, { useState, useRef } from "react";
import {
  width,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Modal,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";

const ProfileScreen = ({ navigation }) => {
  const [profileImage, setProfileImage] = useState(
    "https://via.placeholder.com/120"
  );
  const [dailyStatus, setDailyStatus] = useState("");
  const [mediaFiles, setMediaFiles] = useState([]);
  const [posts, setPosts] = useState([]);
  const [isMediaModalVisible, setIsMediaModalVisible] = useState(false);

  const handleProfileImageUpload = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleMediaUpload = async (type) => {
    let result;
    switch (type) {
      case "photo":
        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsMultipleSelection: true,
        });
        break;
      case "video":
        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Videos,
          allowsMultipleSelection: true,
        });
        break;
      case "audio":
        // Implement audio picker if needed
        return;
    }

    if (!result.canceled) {
      const newMedia = result.assets.map((asset) => ({
        uri: asset.uri,
        type: type,
      }));
      setMediaFiles((prev) => [...prev, ...newMedia]);
      setIsMediaModalVisible(false);
    }
  };

  const handlePost = () => {
    if (!dailyStatus && mediaFiles.length === 0) return;

    const newPost = {
      id: Date.now(),
      profileImage,
      status: dailyStatus,
      media: mediaFiles,
      timestamp: new Date().toLocaleString(),
    };

    setPosts((prevPosts) => [newPost, ...prevPosts]);
    setDailyStatus("");
    setMediaFiles([]);
  };

  const removeMedia = (indexToRemove) => {
    setMediaFiles((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const renderMediaModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isMediaModalVisible}
      onRequestClose={() => setIsMediaModalVisible(false)}
    >
      <View style={styles.mediaModalContainer}>
        <View style={styles.mediaModalContent}>
          <TouchableOpacity
            style={styles.mediaModalOption}
            onPress={() => handleMediaUpload("photo")}
          >
            <Ionicons name="image" size={24} color="#4A90E2" />
            <Text style={styles.mediaModalOptionText}>Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mediaModalOption}
            onPress={() => handleMediaUpload("video")}
          >
            <Ionicons name="videocam" size={24} color="#4A90E2" />
            <Text style={styles.mediaModalOptionText}>Video</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mediaModalOption}
            onPress={() => setIsMediaModalVisible(false)}
          >
            <Ionicons name="close" size={24} color="red" />
            <Text style={styles.mediaModalOptionText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileScreenHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#4A90E2" />
        </TouchableOpacity>
        <Text style={styles.profileScreenTitle}>Profile</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <TouchableOpacity onPress={handleProfileImageUpload}>
            <Image
              source={{ uri: profileImage }}
              style={styles.profileAvatar}
            />
            <View style={styles.editProfileIconOverlay}>
              <Ionicons name="camera" size={20} color="white" />
            </View>
          </TouchableOpacity>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileBio}>Fitness & Wellness Enthusiast</Text>
        </View>

        {/* Status Input */}
        <View style={styles.statusContainer}>
          <TextInput
            style={styles.statusInput}
            placeholder="What's on your mind?"
            multiline
            value={dailyStatus}
            onChangeText={setDailyStatus}
          />
          <View style={styles.mediaUploadContainer}>
            <TouchableOpacity onPress={() => setIsMediaModalVisible(true)}>
              <Ionicons name="add-circle" size={40} color="#4A90E2" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.postButton}
              onPress={handlePost}
              disabled={!dailyStatus && mediaFiles.length === 0}
            >
              <Text style={styles.postButtonText}>Post</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Media Preview */}
        {mediaFiles.length > 0 && (
          <ScrollView
            horizontal
            style={styles.mediaPreviewContainer}
            showsHorizontalScrollIndicator={false}
          >
            {mediaFiles.map((media, index) => (
              <View key={index} style={styles.mediaPreviewItem}>
                <Image
                  source={{ uri: media.uri }}
                  style={styles.mediaPreviewImage}
                />
                <TouchableOpacity
                  style={styles.removeMediaButton}
                  onPress={() => removeMedia(index)}
                >
                  <Ionicons name="close" size={16} color="white" />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        )}

        {/* Posts */}
        <View style={styles.postsContainer}>
          {posts.map((post) => (
            <View key={post.id} style={styles.postItem}>
              <View style={styles.postHeader}>
                <Image
                  source={{ uri: post.profileImage }}
                  style={styles.postProfileImage}
                />
                <View>
                  <Text style={styles.postUsername}>John Doe</Text>
                  <Text style={styles.postTimestamp}>{post.timestamp}</Text>
                </View>
              </View>
              {post.status ? (
                <Text style={styles.postStatus}>{post.status}</Text>
              ) : null}
              {post.media.length > 0 && (
                <ScrollView
                  horizontal
                  style={styles.postMediaContainer}
                  showsHorizontalScrollIndicator={false}
                >
                  {post.media.map((media, index) => (
                    <Image
                      key={index}
                      source={{ uri: media.uri }}
                      style={styles.postMediaImage}
                    />
                  ))}
                </ScrollView>
              )}
            </View>
          ))}
        </View>
      </ScrollView>

      {renderMediaModal()}
    </SafeAreaView>
  );
};

export default ProfileScreen;
