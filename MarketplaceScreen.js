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
const MarketplaceScreen = ({ navigation }) => {
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
export default MarketplaceScreen;
