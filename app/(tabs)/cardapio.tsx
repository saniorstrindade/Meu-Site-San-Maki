import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const itens = [
  {
    id: 1,
    nome: 'Hot Roll',
    preco: 'R$ 22,00',
    descricao: '8 unidades · empanado e frito',
    uri: 'https://i.imgur.com/1bX5QH6.jpg',
  },
  {
    id: 2,
    nome: 'Uramaki Salmão',
    preco: 'R$ 28,00',
    descricao: '8 unidades · cream cheese e salmão',
    uri: 'https://i.imgur.com/Z6X9KkF.jpg',
  },
  {
    id: 3,
    nome: 'Temaki',
    preco: 'R$ 30,00',
    descricao: '1 unidade · salmão, pepino e cream cheese',
    uri: 'https://i.imgur.com/JR6Qq8G.jpg',
  },
];

export default function Cardapio() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>
      <Text style={styles.titulo}>🍣 Cardápio</Text>

      {itens.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={{ uri: item.uri }} style={styles.imagem} />
          <View style={styles.info}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.descricao}>{item.descricao}</Text>
            <Text style={styles.preco}>{item.preco}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  conteudo: {
    padding: 20,
    paddingBottom: 40,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    marginTop: 50,
  },
  card: {
    marginBottom: 20,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imagem: {
    width: '100%',
    height: 180,
  },
  info: {
    padding: 12,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descricao: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  preco: {
    fontSize: 16,
    color: '#e63946',
    fontWeight: 'bold',
    marginTop: 6,
  },
});