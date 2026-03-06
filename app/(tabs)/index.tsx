import { Text, StyleSheet, ImageBackground, View } from "react-native";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("../../assets/images/logo.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.titulo}>San Maki Sushi 🍣</Text>
        <Text style={styles.subtitulo}>Bem-vindo ao nosso restaurante</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },

  subtitulo: {
    fontSize: 18,
    color: "white",
    marginTop: 10,
  },
});