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
import Icon from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  categoryContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: "#FFFFFF",
  },
  categoryScrollView: {
    paddingHorizontal: 5,
  },
  categoryCard: {
    width: width / 4 - 20,
    alignItems: "center",
    marginHorizontal: 5,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#F0F0F0",
  },
  selectedCategoryCard: {
    backgroundColor: "#4A90E2",
  },
  categoryIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#666",
    textAlign: "center",
  },
  selectedCategoryText: {
    color: "#FFFFFF",
  },
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  productCard: {
    width: width / 2 - 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: "#4A90E2",
    marginBottom: 10,
  },
  buyButton: {
    backgroundColor: "#4A90E2",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buyButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  cartContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartButton: {
    backgroundColor: "#4A90E2",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  cartButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    marginLeft: 10,
  },
  cartBadge: {
    backgroundColor: "#FF4500",
    position: "absolute",
    top: -8,
    right: -8,
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cartBadgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  cartModalContent: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  cartItemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  cartItemDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  cartItemImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  removeCartItemButton: {
    backgroundColor: "#F44336",
    padding: 5,
    borderRadius: 5,
  },
});

// Category data with icons and descriptions
const CATEGORIES = [
  {
    id: "all",
    name: "All",
    icon: "grid",
    backgroundColor: "#4A90E2",
  },
  {
    id: "groceries",
    name: "Groceries",
    icon: "basket",
    backgroundColor: "#2ECC71",
  },
  {
    id: "clothing",
    name: "Clothing",
    icon: "shirt",
    backgroundColor: "#F39C12",
  },
  {
    id: "electronics",
    name: "Electronics",
    icon: "laptop",
    backgroundColor: "#E74C3C",
  },
  {
    id: "home-decor",
    name: "Home Decor",
    icon: "home",
    backgroundColor: "#9B59B6",
  },
  {
    id: "beauty",
    name: "Beauty",
    icon: "color-palette",
    backgroundColor: "#3498DB",
  },
  {
    id: "toys",
    name: "Toys",
    icon: "game-controller",
    backgroundColor: "#1ABC9C",
  },
];

// Sample products with categories
const PRODUCTS = [
  {
    id: 1,
    name: "Fresh Organic Apples",
    price: 4.99,
    image: "https://via.placeholder.com/150",
    category: "groceries",
  },
  {
    id: 2,
    name: "Summer Cotton T-Shirt",
    price: 29.99,
    image: "https://via.placeholder.com/150",
    category: "clothing",
  },
  {
    id: 3,
    name: "Smart LED TV",
    price: 599.99,
    image: "https://via.placeholder.com/150",
    category: "electronics",
  },
  {
    id: 4,
    name: "Decorative Throw Pillow",
    price: 24.99,
    image: "https://via.placeholder.com/150",
    category: "home-decor",
  },
  {
    id: 5,
    name: "Makeup Brush Set",
    price: 49.99,
    image: "https://via.placeholder.com/150",
    category: "beauty",
  },
  {
    id: 6,
    name: "Educational Puzzle",
    price: 34.99,
    image: "https://via.placeholder.com/150",
    category: "toys",
  },
];

const MarketplaceScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const [isCartModalVisible, setIsCartModalVisible] = useState(false);

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.category === selectedCategory);

  // Add item to cart
  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex > -1) {
      // Increment quantity if item exists
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // Add new item to cart
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove item from cart
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((item) => item.id !== productToRemove.id));
  };

  // Calculate total cart value
  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // Render Category Item
  const renderCategoryItem = ({ item }) => {
    const isSelected = selectedCategory === item.id;
    return (
      <TouchableOpacity
        style={[styles.categoryCard, isSelected && styles.selectedCategoryCard]}
        onPress={() => setSelectedCategory(item.id)}
      >
        <View
          style={[
            styles.categoryIcon,
            { backgroundColor: item.backgroundColor },
          ]}
        >
          <Icon name={item.icon} size={30} color="#FFFFFF" />
        </View>
        <Text
          style={[
            styles.categoryText,
            isSelected && styles.selectedCategoryText,
          ]}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Marketplace</Text>
        <TouchableOpacity>
          <Icon name="search" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Category Scroll View */}
      <View style={styles.categoryContainer}>
        <FlatList
          data={CATEGORIES}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScrollView}
        />
      </View>

      {/* Product Grid */}
      <ScrollView>
        <View style={styles.productGrid}>
          {filteredProducts.map((product) => (
            <TouchableOpacity key={product.id} style={styles.productCard}>
              <Image
                source={{ uri: product.image }}
                style={styles.productImage}
                resizeMode="cover"
              />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>
                ${product.price.toFixed(2)}
              </Text>
              <TouchableOpacity
                style={styles.buyButton}
                onPress={() => addToCart(product)}
              >
                <Text style={styles.buyButtonText}>Add to Cart</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Cart Button */}
      <View style={styles.cartContainer}>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => setIsCartModalVisible(true)}
        >
          <Icon name="cart" size={24} color="#FFFFFF" />
          <Text style={styles.cartButtonText}>Cart</Text>
          {cart.length > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cart.length}</Text>
            </View>
          )}
        </TouchableOpacity>
        <Text style={styles.productPrice}>Total: ${calculateTotal()}</Text>
      </View>

      {/* Cart Modal */}
      <Modal
        transparent={true}
        visible={isCartModalVisible}
        animationType="slide"
        onRequestClose={() => setIsCartModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View style={styles.cartModalContent}>
            <Text style={[styles.headerTitle, { marginBottom: 15 }]}>
              Your Cart
            </Text>
            <FlatList
              data={cart}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.cartItemRow}>
                  <View style={styles.cartItemDetails}>
                    <Image
                      source={{ uri: item.image }}
                      style={styles.cartItemImage}
                    />
                    <View>
                      <Text style={styles.productName}>{item.name}</Text>
                      <Text>Quantity: {item.quantity}</Text>
                    </View>
                  </View>
                  <View>
                    <Text style={styles.productPrice}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </Text>
                    <TouchableOpacity
                      style={styles.removeCartItemButton}
                      onPress={() => removeFromCart(item)}
                    >
                      <Icon name="trash" size={20} color="#FFFFFF" />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              ListEmptyComponent={
                <Text
                  style={[
                    styles.headerTitle,
                    { textAlign: "center", marginVertical: 20 },
                  ]}
                >
                  Your cart is empty
                </Text>
              }
            />
            <View style={{ alignItems: "center", marginTop: 15 }}>
              <Text style={styles.headerTitle}>Total: ${calculateTotal()}</Text>
              <TouchableOpacity
                style={[styles.buyButton, { marginTop: 10 }]}
                onPress={() => {
                  // Implement checkout logic
                  alert("Checkout functionality to be implemented");
                  setIsCartModalVisible(false);
                }}
              >
                <Text style={styles.buyButtonText}>Proceed to Checkout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default MarketplaceScreen;
