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
import styles from "./styles";
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
export default TourismScreen;
