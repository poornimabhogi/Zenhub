import React, { useState, useEffect } from "react";
import styles from "./styles";

import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  View,
  Alert,
} from "react-native";
const MoviesScreen = () => {
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
export default MoviesScreen;
