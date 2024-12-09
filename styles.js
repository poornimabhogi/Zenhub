// Styles
import { StyleSheet, Dimensions, width } from "react-native";
const styles = StyleSheet.create({
  //homescreen
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  profileHeader: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileAvatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  profileBio: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  profileBadges: {
    flexDirection: "row",
    gap: 10,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: "white",
    marginTop: 20,
    marginHorizontal: 15,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4A90E2",
  },
  statLabel: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  statDivider: {
    width: 1,
    height: "100%",
    backgroundColor: "#eee",
  },
  actionButtons: {
    flexDirection: "row",
    paddingHorizontal: 15,
    marginTop: 20,
    gap: 10,
  },
  editProfileButton: {
    flex: 1,
    backgroundColor: "#4A90E2",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  editProfileText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  shareProfileButton: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#4A90E2",
    width: 50,
    alignItems: "center",
  },
  appStatsContainer: {
    padding: 15,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  appStatCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  appStatItem: {
    alignItems: "center",
  },
  appStatValue: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  appStatLabel: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  recentActivities: {
    padding: 15,
    marginTop: 10,
  },
  activityItem: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  activityContent: {
    marginLeft: 15,
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  activityTime: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  // New styles for header icons
  headerWithIcons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
  zencoinContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 10,
  },
  zencoinText: {
    marginLeft: 5,
    fontWeight: "bold",
    color: "#333",
  },
  luckyDrawIcon: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
  },

  // Lucky Draw Modal Styles
  luckyDrawModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  luckyDrawModalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  luckyDrawOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  luckyDrawOptionText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  // Movie Screen Styles
  movieListContainer: {
    padding: 15,
  },
  movieCard: {
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
  },
  movieImage: {
    width: "100%",
    height: 200,
  },
  movieInfo: {
    padding: 15,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  movieMetadata: {
    flexDirection: "row",
    marginTop: 5,
  },
  movieRating: {
    marginRight: 10,
  },
  seatingContainer: {
    padding: 15,
    alignItems: "center",
  },
  screen: {
    width: "80%",
    height: 5,
    backgroundColor: "#DDD",
    marginBottom: 20,
  },
  screenText: {
    marginBottom: 10,
    color: "#666",
  },
  seatRow: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  rowLabel: {
    width: 20,
    marginRight: 10,
  },
  seat: {
    width: 30,
    height: 30,
    margin: 3,
    borderRadius: 5,
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedSeat: {
    backgroundColor: "#4A90E2",
  },
  seatText: {
    fontSize: 12,
  },
  selectedSeatText: {
    color: "white",
  },

  // Tourism Screen Styles
  destinationListContainer: {
    padding: 15,
  },
  destinationCard: {
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
  },
  destinationImage: {
    width: "100%",
    height: 200,
  },
  destinationInfo: {
    padding: 15,
  },
  destinationName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  destinationMetadata: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  bookingForm: {
    backgroundColor: "white",
    padding: 15,
    margin: 15,
    borderRadius: 10,
  },
  dateContainer: {
    marginBottom: 15,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: "#DDD",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  guestsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  guestsControls: {
    flexDirection: "row",
    alignItems: "center",
  },
  guestButton: {
    width: 30,
    height: 30,
    backgroundColor: "#4A90E2",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  guestButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  guestsCount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  resortCard: {
    backgroundColor: "white",
    margin: 15,
    borderRadius: 10,
    overflow: "hidden",
  },
  resortImage: {
    width: "100%",
    height: 200,
  },
  resortInfo: {
    padding: 15,
  },
  resortName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  resortPrice: {
    color: "#4A90E2",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  backButton: {
    padding: 15,
  },
  backButtonText: {
    color: "#4A90E2",
    fontSize: 16,
  },
  selectedMovieImage: {
    width: "100%",
    height: 250,
  },
  selectedMovieTitle: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 15,
  },
  showtimeContainer: {
    padding: 15,
  },
  showtimeTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  showtimeButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#F0F0F0",
    marginRight: 10,
  },
  selectedShowtime: {
    backgroundColor: "#4A90E2",
  },
  showtimeText: {
    color: "#333",
  },
  selectedShowtimeText: {
    color: "white",
  },
  bookingSummary: {
    padding: 15,
    backgroundColor: "white",
    margin: 15,
    borderRadius: 10,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  bookButton: {
    backgroundColor: "#4A90E2",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
  disabledButton: {
    backgroundColor: "#CCCCCC",
  },
  bookButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  // Social Screen Styles
  socialHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  socialTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  createPostButton: {
    backgroundColor: "#4A90E2",
    padding: 10,
    borderRadius: 25,
  },
  postContainer: {
    backgroundColor: "white",
    marginBottom: 10,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  postAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 14,
  },
  followButton: {
    backgroundColor: "#4A90E2",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  followingButton: {
    backgroundColor: "#E0E0E0",
  },
  followButtonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  followingButtonText: {
    color: "#333",
  },
  postImage: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
  },
  postActions: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  actionText: {
    marginLeft: 5,
    color: "#333",
  },
  postContent: {
    padding: 10,
  },
  postCaption: {
    fontSize: 14,
    lineHeight: 20,
  },
  timestamp: {
    fontSize: 12,
    color: "#666",
    marginTop: 5,
  },
  // Game-related styles
  gameContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gameBoard: {
    backgroundColor: "#BBB",
    borderRadius: 5,
    padding: 5,
  },
  gameRow: {
    flexDirection: "row",
  },
  gameCell: {
    width: 75,
    height: 75,
    backgroundColor: "#E6F2FF",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  gameCellEmpty: {
    backgroundColor: "#E6F2FF",
  },
  gameCellText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  // Tile color styles
  gameCell2: { backgroundColor: "#E0F7FA" },
  gameCell4: { backgroundColor: "#B2EBF2" },
  gameCell8: { backgroundColor: "#80DEEA" },
  gameCell16: { backgroundColor: "#4DD0E1" },
  gameCell32: { backgroundColor: "#26C6DA" },
  gameCell64: { backgroundColor: "#00BCD4" },
  gameCell128: {
    backgroundColor: "#00ACC1",
  },
  gameCell256: {
    backgroundColor: "#0097A7",
  },
  gameCell512: {
    backgroundColor: "#00838F",
  },
  gameCell1024: {
    backgroundColor: "#006064",
  },
  gameCell2048: {
    backgroundColor: "#004D40",
  },
  gameHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  newGameButton: {
    backgroundColor: "#4A90E2",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  newGameButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  // Container and general styles
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#4A90E2",
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  // Login-related styles
  loginContainer: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
  },
  loginKeyboardView: {
    flex: 1,
    justifyContent: "center",
  },
  loginContent: {
    paddingHorizontal: 30,
    width: "100%",
  },
  loginTitle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#4A90E2",
  },
  loginInput: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  loginButton: {
    backgroundColor: "#4A90E2",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  // Header and profile styles
  premiumBanner: {
    backgroundColor: "#4A90E2",
    margin: 15,
    padding: 15,
    borderRadius: 10,
  },
  premiumContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  premiumTextContainer: {
    marginLeft: 10,
    flex: 1,
  },
  premiumTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  premiumDescription: {
    color: "white",
    fontSize: 12,
  },
  premiumPrice: {
    color: "#FFD700",
    fontWeight: "bold",
    marginTop: 5,
  },
  challengeCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 5,
    width: 150,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  challengeTitle: {
    fontWeight: "bold",
    marginTop: 5,
  },
  challengeTime: {
    color: "#666",
    fontSize: 12,
  },
  rewardContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  rewardText: {
    color: "#4A90E2",
    fontWeight: "bold",
    marginRight: 5,
  },
  streakContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  streakText: {
    color: "#FF6B6B",
    marginLeft: 5,
    fontSize: 12,
  },
  communityCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 5,
    width: 200,
  },
  communityTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  communityParticipants: {
    color: "#666",
    fontSize: 12,
    marginTop: 5,
  },
  communityPrize: {
    color: "#4A90E2",
    fontWeight: "bold",
    marginTop: 5,
  },
  joinButton: {
    backgroundColor: "#4A90E2",
    padding: 8,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  joinButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  coachSection: {
    backgroundColor: "white",
    margin: 15,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  coachAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  coachInfo: {
    flex: 1,
    marginLeft: 15,
  },
  coachTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  coachDescription: {
    color: "#666",
    fontSize: 12,
  },
  coachPrice: {
    color: "#4A90E2",
    fontWeight: "bold",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "white",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
  },
  // Points and lottery styles
  pointsSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  pointsText: {
    marginRight: 10,
  },
  lotteryButton: {
    backgroundColor: "#4A90E2",
    padding: 5,
    borderRadius: 5,
  },
  lotteryButtonText: {
    color: "white",
    fontSize: 12,
  },
  // Section and content styles
  sectionContainer: {
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  // Product and marketplace styles
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  productCard: {
    width: Dimensions.get("window").width / 2 - 25,
    backgroundColor: "white",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 15,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productPrice: {
    color: "#4A90E2",
    marginVertical: 5,
  },
  buyButton: {
    backgroundColor: "#4A90E2",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  buyButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  // Guest button styles
  guestButton: {
    backgroundColor: "#F0F4F8",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  guestButtonText: {
    color: "#4A90E2",
    fontWeight: "bold",
    fontSize: 16,
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  profileModalContent: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  createPostModalContent: {
    width: "95%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
  mediaGridModalContent: {
    width: "95%",
    height: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
  modalCloseButton: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },

  // Profile Edit Styles
  profileAvatarEdit: {
    position: "relative",
    marginBottom: 20,
  },
  profileAvatarEditImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editAvatarOverlay: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 20,
    padding: 5,
  },
  profileEditInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  updateProfileButton: {
    backgroundColor: "#4A90E2",
    padding: 15,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  updateProfileButtonText: {
    color: "white",
    fontWeight: "bold",
  },

  // Create Post Styles
  postTextInput: {
    height: 100,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  mediaUploadOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  mediaUploadButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#F0F0F0",
    borderRadius: 5,
  },
  selectedMediaItem: {
    position: "relative",
    marginRight: 10,
  },
  selectedMediaImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  removeMediaButton: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 15,
    padding: 2,
  },
  postButton: {
    backgroundColor: "#4A90E2",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 15,
  },
  postButtonText: {
    color: "white",
    fontWeight: "bold",
  },

  // Media Grid Styles
  mediaGridItem: {
    width: "30%",
    margin: 5,
    aspectRatio: 1,
    borderRadius: 5,
  },
  addMediaButton: {
    width: "30%",
    margin: 5,
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: "#4A90E2",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  // Social Feed Styles
  socialFeedContainer: {
    padding: 10,
  },
  createPostSection: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  createPostInput: {
    backgroundColor: "#F0F0F0",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  createPostPlaceholder: {
    color: "#888",
  },
  mediaUploadSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mediaUploadSmallButton: {
    backgroundColor: "#F0F0F0",
    borderRadius: 5,
    padding: 10,
  },
  addMediaGridButton: {
    backgroundColor: "#4A90E2",
    borderRadius: 25,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  postContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  postText: {
    marginBottom: 10,
  },
  postImage: {
    width: 150,
    height: 150,
    borderRadius: 5,
    marginRight: 10,
  },
  profileScreenHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "white",
  },
  profileScreenTitle: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
  editProfileIconOverlay: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 15,
    padding: 5,
  },
  statusContainer: {
    padding: 15,
    backgroundColor: "white",
  },
  statusInput: {
    minHeight: 100,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  mediaUploadContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  postButton: {
    backgroundColor: "#4A90E2",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  postButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  mediaPreviewContainer: {
    paddingVertical: 10,
  },
  mediaPreviewItem: {
    position: "relative",
    marginRight: 10,
  },
  mediaPreviewImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  removeMediaButton: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 15,
    padding: 2,
  },
  postsContainer: {
    padding: 15,
  },
  postItem: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  postProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  postUsername: {
    fontWeight: "bold",
  },
  postTimestamp: {
    color: "gray",
    fontSize: 12,
  },
  postStatus: {
    marginBottom: 10,
  },
  postMediaContainer: {
    marginTop: 10,
  },
  postMediaImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
  },
  mediaModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  mediaModalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "80%",
  },
  mediaModalOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  mediaModalOptionText: {
    marginLeft: 15,
    fontSize: 16,
  },
  headerWithIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "white",
  },
  // Header Styles
  headerRightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerProfileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#4A90E2",
  },
  profileIconContainer: {
    padding: 5,
  },

  // Media Modal Styles
  mediaModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  mediaModalContent: {
    backgroundColor: "white",
    borderRadius: 15,
    width: "80%",
    padding: 20,
  },
  mediaModalOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  mediaModalOptionText: {
    marginLeft: 15,
    fontSize: 16,
    color: "#4A90E2",
  },

  // Additional Profile Screen Enhancements
  profileBioContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  profileBioEditIcon: {
    position: "absolute",
    right: -25,
    top: 0,
  },

  // Responsive Media Upload Styles
  mediaUploadGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 10,
  },
  mediaUploadGridItem: {
    width: (width - 45) / 3, // 3 columns with spacing
    height: (width - 45) / 3,
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden",
  },
  mediaUploadGridImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  mediaUploadGridAddButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
  },

  // Enhanced Post Styles
  postContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  postProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  postUserInfo: {
    flex: 1,
  },
  postUsername: {
    fontWeight: "700",
    fontSize: 16,
  },
  postTimestamp: {
    color: "#888",
    fontSize: 12,
  },
  postActionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  postActionButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  postActionButtonText: {
    marginLeft: 5,
    color: "#4A90E2",
  },

  // Floating Action Button
  floatingAddButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#4A90E2",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  // Responsive Containers
  responsiveContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
});
export default styles;
