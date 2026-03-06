import { Text, StyleSheet, ImageBackground, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../../assets/images/logo.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.titulo}>San Maki Sushi 🍣</Text>
        <Text style={styles.subtitulo}>Bem-vindo ao nosso restaurante</Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => router.push("/cardapio")}
        >
          <Text style={styles.botaoTexto}>Ver Cardápio</Text>
        </TouchableOpacity>
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
    backgroundColor: "rgba(0, 0, 0, 0.45)",
  },
  titulo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "rgba(0,0,0,0.6)",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 4,
  },
  subtitulo: {
    fontSize: 18,
    color: "white",
    marginTop: 10,
    textShadowColor: "rgba(0,0,0,0.4)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  botao: {
    marginTop: 30,
    backgroundColor: "#e63946",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
  },
  botaoTexto: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});