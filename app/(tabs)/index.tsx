import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const [bio, setBio] = useState(
    "Mobile Application Development Student at INES Ruhengeri.",
  );

  useEffect(() => {
    AsyncStorage.getItem("profile_bio").then((savedBio) => {
      if (savedBio) setBio(savedBio);
    });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.identity}>My name is Kirenga Alain Thierry.</Text>
      <Text style={styles.title}>CMPortfolio</Text>
      <Text style={styles.headline}>
        Mobile Developer & Software Engineering Student
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>About Me</Text>
        <Text style={styles.cardText}>{bio}</Text>
      </View>

      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>Verification Code: MOB-A2-7792</Text>
        <Text style={styles.badgeText}>Reg: 2527792</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
    flexGrow: 1,
    justifyContent: "center",
  },
  identity: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1a73e8",
    marginBottom: 10,
  },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 5 },
  headline: { fontSize: 16, color: "#555", marginBottom: 20 },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
    elevation: 2,
  },
  cardTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },
  cardText: { fontSize: 14, color: "#333", lineHeight: 20 },
  badgeContainer: {
    backgroundColor: "#e8f0fe",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
  },
  badgeText: { fontWeight: "600", color: "#1967d2" },
});
