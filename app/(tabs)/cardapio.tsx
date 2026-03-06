import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Cardapio() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.titulo}>San Maki Sushi 🍣</Text>

      <View style={styles.item}>
        <Image
          source={{ uri: 'https://i.imgur.com/1bX5QH6.jpg' }}
          style={styles.imagem}
        />
        <Text style={styles.nome}>Hot Roll</Text>
        <Text style={styles.preco}>R$ 22,00</Text>
      </View>

      <View style={styles.item}>
        <Image
          source={{ uri: 'https://i.imgur.com/Z6X9KkF.jpg' }}
          style={styles.imagem}
        />
        <Text style={styles.nome}>Uramaki Salmão</Text>
        <Text style={styles.preco}>R$ 28,00</Text>
      </View>

      <View style={styles.item}>
        <Image
          source={{ uri: 'https://i.imgur.com/JR6Qq8G.jpg' }}
          style={styles.imagem}
        />
        <Text style={styles.nome}>Temaki</Text>
        <Text style={styles.preco}>R$ 30,00</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  item: {
    marginBottom: 25,
  },

  imagem: {
    width: '100%',
    height: 180,
    borderRadius: 10,
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },

  preco: {
    fontSize: 16,
    color: 'green',
  },
});