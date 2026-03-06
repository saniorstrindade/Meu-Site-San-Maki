import { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const P = { uri: 'https://via.placeholder.com/120x120.png?text=Foto' };

const categorias = [
  {
    id: 'entradas',
    titulo: 'Entradas e Porcoes',
    emoji: '🍤',
    itens: [
      { id: 1, nome: 'Harumaki Salmao', descricao: 'Rolinho primavera com recheio de salmao e cream cheese', preco: 'R$ 13,90', imagem: P },
      { id: 2, nome: 'Harumaki Camarao', descricao: 'Rolinho primavera com recheio de camarao, cebolinha e cream cheese', preco: 'R$ 13,90', imagem: P },
      { id: 3, nome: 'Harumaki Queijo', descricao: 'Rolinho primavera com recheio de queijo', preco: 'R$ 13,90', imagem: P },
      { id: 4, nome: 'Sunomono', descricao: 'Pepino, Salmao, Camarao, Kani e Gergelim', preco: 'R$ 35,90', imagem: P },
      { id: 5, nome: 'Ceviche', descricao: 'Salmao, Camarao Marinados, Pimentao amarelo e vermelho, Pimenta e Coentro', preco: 'R$ 39,90', imagem: P },
      { id: 6, nome: 'Delicia Salmao', descricao: 'Bolinha de peixe frito. 10 und', preco: 'R$ 40,90', imagem: P },
      { id: 7, nome: 'Sushiburguer', descricao: 'Empanado arroz, recheio Salmao, Cebolinha e Cream Cheese finalizado com Gergelim', preco: 'R$ 40,90', imagem: P },
      { id: 8, nome: 'Burguermix', descricao: 'Empanado arroz, recheio Salmao, Camarao, Cebolinha e Cream Cheese, finalizado com Gergelim e Cebolinha', preco: 'R$ 45,90', imagem: P },
      { id: 9, nome: 'Mine tri Burguer', descricao: '01 mine salmao, 01 mine mix (salmao e camarao), 01 mine Hot salmao', preco: 'R$ 49,90', imagem: P },
      { id: 10, nome: 'Frango Xadrez', descricao: 'Frango, Legumes, Molho Especial', preco: 'R$ 46,90', imagem: P },
      { id: 11, nome: 'Lula Empanada', descricao: 'Porcao de lula empanada', preco: 'R$ 37,90', imagem: P },
      { id: 12, nome: 'Camarao Empanado', descricao: 'Porcao 150 gramas', preco: 'R$ 47,90', imagem: P },
      { id: 13, nome: 'Carpaccio de Salmao', descricao: 'Finas laminas de salmao marinadas ao molho do Chef, finalizado com cebola roxa, cebolinha e gergelim', preco: 'R$ 49,90', imagem: P },
      { id: 14, nome: 'Camarao Alho e Oleo', descricao: 'Porcao com 200 gramas finalizado com Alho e Cebolinha', preco: 'R$ 50,90', imagem: P },
      { id: 15, nome: 'Isca de Tilapia', descricao: 'Porcao 500 gramas', preco: 'R$ 60,90', imagem: P },
      { id: 16, nome: 'Isca de Salmao', descricao: 'Porcao 500 gramas', preco: 'R$ 97,90', imagem: P },
      { id: 17, nome: 'Isca de Frango', descricao: 'Porcao 500 gramas', preco: 'R$ 55,90', imagem: P },
      { id: 18, nome: 'Acarajapa', descricao: 'Bolinho de arroz empanado e cream cheese, recheado com salmao, cream cheese, cebolinha e finalizado com teriaki', preco: 'R$ 39,90', imagem: P },
      { id: 19, nome: 'Shitake', descricao: 'Cogumelo na manteiga, com alho finalizado com alho e cebolinha. Porcao 100 gramas', preco: 'R$ 42,90', imagem: P },
      { id: 20, nome: 'Hay Duba', descricao: 'Empanado de arroz, com recheio de salmao e cream cheese, empanado na farinha especial e finalizado com teriaki e cebolinha. 04 und', preco: 'R$ 55,90', imagem: P },
    ],
  },
  {
    id: 'yakissoba',
    titulo: 'Yakissoba',
    emoji: '🍜',
    itens: [
      { id: 1, nome: 'Yakissoba Tradicional', descricao: 'Espaguete oriental, Legumes, Carne boi e frango e Molho a Base Shoyu', preco: 'R$ 47,90', imagem: P },
      { id: 2, nome: 'Yakissoba Legumes', descricao: 'Espaguete oriental, Legumes e Molho a Base Shoyu', preco: 'R$ 35,90', imagem: P },
      { id: 3, nome: 'Yakissoba Frutos do Mar', descricao: 'Espaguete oriental, Salmao, Camarao, Legumes e Molho a Base Shoyu', preco: 'R$ 53,90', imagem: P },
      { id: 4, nome: 'Yakissoba Tailandes Vegetariano', descricao: 'Macarrao oriental, Legumes e Molho Tailandes', preco: 'R$ 35,90', imagem: P },
      { id: 5, nome: 'Yakissoba Tailandes Mix', descricao: 'Macarrao oriental, Carne boi e frango, Legumes e Molho Tailandes', preco: 'R$ 47,90', imagem: P },
      { id: 6, nome: 'Yakissoba Tailandes Frutos Mar', descricao: 'Macarrao oriental, Salmao, Camarao, Legumes e Molho Tailandes', preco: 'R$ 53,90', imagem: P },
    ],
  },
  {
    id: 'makimonos_frios',
    titulo: 'Makimonos Frios',
    emoji: '🍱',
    itens: [
      { id: 1, nome: 'Philadelphia', descricao: 'Alga, Arroz, Salmao, Cream Cheese. 4 und', preco: 'R$ 11,90', imagem: P },
      { id: 2, nome: 'Phila Nacho', descricao: 'Alga, Arroz, Salmao, Nachos e Cream Cheese. 4 und', preco: 'R$ 11,90', imagem: P },
      { id: 3, nome: 'Phila Pasta', descricao: 'Alga, Arroz, Salmao e Pastinha de Camarao. 4 und', preco: 'R$ 11,90', imagem: P },
      { id: 4, nome: 'Phila Crock', descricao: 'Alga, Arroz, Salmao, Cream Cheese e Flocos de arroz. 4 und', preco: 'R$ 11,90', imagem: P },
      { id: 5, nome: 'Phila Tare', descricao: 'Alga, Arroz, Salmao e Molho tare. 4 und', preco: 'R$ 11,90', imagem: P },
      { id: 6, nome: 'Phila Kani', descricao: 'Alga, arroz, Kani e cream cheese. 4 und', preco: 'R$ 11,90', imagem: P },
      { id: 7, nome: 'Phila Salmao', descricao: 'Alga, Arroz, Salmao cozido e cream cheese. 4 und', preco: 'R$ 11,90', imagem: P },
      { id: 8, nome: 'Phila Agridoce', descricao: 'Alga, Arroz, Salmao, Cream Cheese e Geleia de Pimenta. 4 und', preco: 'R$ 11,90', imagem: P },
      { id: 9, nome: 'Phila Tropical', descricao: 'Alga, Arroz, Cenoura, Cebolinha, Cream Cheese e Geleia de Hortela. 4 und', preco: 'R$ 11,90', imagem: P },
      { id: 10, nome: 'Phila Especial', descricao: 'Alga, Arroz, Salmao cozido, cream cheese, geleia do chefe especial e gergelim. 4 und', preco: 'R$ 11,90', imagem: P },
      { id: 11, nome: 'Ebi Furay', descricao: 'Alga, Arroz, Camarao, Cream Cheese e Alho Poro. 4 und', preco: 'R$ 11,90', imagem: P },
      { id: 12, nome: 'Kappa Maki', descricao: 'Alga, Arroz e Pepino. 4 und', preco: 'R$ 11,90', imagem: P },
    ],
  },
  {
    id: 'uramaki',
    titulo: 'Uramaki',
    emoji: '🌀',
    itens: [
      { id: 1, nome: 'Salmao Fresh', descricao: 'Alga, Arroz, Salmao, Cream Cheese e Geleia de Hortela. 4 und', preco: 'R$ 11,90', imagem: P },
      { id: 2, nome: 'Salmao Maki', descricao: 'Alga, Arroz, Salmao, Cream Cheese e Cebolinha. 4 und', preco: 'R$ 11,90', imagem: P },
      { id: 3, nome: 'Uramakishow', descricao: 'Alga, Arroz invertido, salmao frito e geleia refrescante maracuja com toque pimenta. 4 und', preco: 'R$ 13,90', imagem: P },
      { id: 4, nome: 'Uramaki Ebishake', descricao: 'Alga, Arroz invertido, salmao e camarao crocante. 4 und', preco: 'R$ 14,90', imagem: P },
      { id: 5, nome: 'Uramaki Philadelphia', descricao: 'Alga, Arroz invertido, Salmao e Cream Cheese. 4 und', preco: 'R$ 13,90', imagem: P },
      { id: 6, nome: 'Uramaki Skin Lemon', descricao: 'Alga, Arroz invertido, Pele de Salmao Grelhada e pastinha especial grelhada com limao e teriyaki. 4 und', preco: 'R$ 12,90', imagem: P },
      { id: 7, nome: 'Jatopeia Uramaki', descricao: 'Alga, Arroz Invertido, Salmao, Camarao, Cream Cheese e Cebolinha. 4 und', preco: 'R$ 13,90', imagem: P },
      { id: 8, nome: 'Uramaki dragon', descricao: 'Alga, arroz invertido, salmao cozido especial finalizado com geleia de pimenta. 4 und', preco: 'R$ 12,90', imagem: P },
      { id: 9, nome: 'Mix Lemon Uramaki', descricao: 'Alga, Arroz invertido, Salmao, Camarao, Cream Cheese e Raspa de Limao. 4 und', preco: 'R$ 13,90', imagem: P },
      { id: 10, nome: 'California Uramaki', descricao: 'Alga, Arroz invertido, Manga, Kani e Pepino. 4 und', preco: 'R$ 12,90', imagem: P },
      { id: 11, nome: 'Uramakclipse', descricao: 'Alga, Arroz invertido, Salmao, Cream Cheese, e Pimenta Biquinho. 4 und', preco: 'R$ 13,90', imagem: P },
      { id: 12, nome: 'Coco Maki', descricao: 'Alga, Arroz Invertido, Cream Cheese, Camarao e Coco. 4 und', preco: 'R$ 13,90', imagem: P },
      { id: 13, nome: 'Uramaki Skin', descricao: 'Alga, Arroz invertido, Pele de Salmao Grelhada e Molho Teriyaki. 4 und', preco: 'R$ 12,90', imagem: P },
      { id: 14, nome: 'Ebi Cheese Uramaki', descricao: 'Alga, Arroz invertido, Camarao, Cream Cheese e Alho Poro. 4 und', preco: 'R$ 13,90', imagem: P },
    ],
  },
  {
    id: 'makimonos_quentes',
    titulo: 'Makimonos Quentes',
    emoji: '🔥',
    itens: [
      { id: 1, nome: 'Hot Philadelphia', descricao: 'Empanado de alga, Arroz, Cream Cheese e Salmao. 4 und', preco: 'R$ 12,90', imagem: P },
      { id: 2, nome: 'Ninaroll', descricao: 'Empanado de alga, Arroz, Salmao, Camarao, Cream Cheese, Cebolinha e Teriyaki. 4 und', preco: 'R$ 13,90', imagem: P },
      { id: 3, nome: 'Hot Japa', descricao: 'Empanado de alga, Arroz, Salmao, Cream Cheese e Cebolinha. 4 und', preco: 'R$ 12,90', imagem: P },
      { id: 4, nome: 'Hot Curry', descricao: 'Empanado de alga, Arroz, Salmao, Cream Cheese e Molho especial curry. 4 und', preco: 'R$ 12,90', imagem: P },
      { id: 5, nome: 'Crispy', descricao: 'Empanado de alga, Arroz, Salmao, Cream Cheese e Nachos. 4 und', preco: 'R$ 12,90', imagem: P },
      { id: 6, nome: 'Hot Spicy', descricao: 'Empanado de alga, Arroz, Salmao, Cream Cheese e Geleia de pimenta. 4 und', preco: 'R$ 12,90', imagem: P },
      { id: 7, nome: 'Salmacrock', descricao: 'Empanado alga, Arroz, Salmao, Cream Cheese e Flocos de arroz. 4 und', preco: 'R$ 12,90', imagem: P },
      { id: 8, nome: 'Hot Onion', descricao: 'Empanado de alga, Arroz, Salmao, Cream Cheese e Geleia de cebola. 4 und', preco: 'R$ 12,90', imagem: P },
      { id: 9, nome: 'Hot Especial', descricao: 'Empanado de alga, Arroz, Salmao, Cream Cheese e Alho Poro. 4 und', preco: 'R$ 12,90', imagem: P },
      { id: 10, nome: 'Monte Fugi', descricao: 'Empanado de alga, Arroz, Salmao, Cream Cheese, Lamina laranja e Teriyaki. 4 und', preco: 'R$ 12,90', imagem: P },
      { id: 11, nome: 'Hot Salmao', descricao: 'Empanado de alga, Salmao e Teriyaki. 4 und', preco: 'R$ 15,90', imagem: P },
      { id: 12, nome: 'Ice Hot', descricao: 'Lamina de salmao empanada, Cream Cheese e Teriyaki. 4 und', preco: 'R$ 18,90', imagem: P },
      { id: 13, nome: 'Hot Kani', descricao: 'Empanado de alga, arroz, Kani e cream cheese. 4 und', preco: 'R$ 12,90', imagem: P },
      { id: 14, nome: 'Ice Especial', descricao: 'Lamina de salmao, Camarao envolvido e Cream Cheese. 4 und', preco: 'R$ 20,90', imagem: P },
      { id: 15, nome: 'Hot Ball', descricao: 'Empanado de arroz, salmao cream cheese e cebolinha. 4 und', preco: 'R$ 16,90', imagem: P },
      { id: 16, nome: 'Ice Tigrado', descricao: 'Lamina de salmao, camarao temperado ao molho cheff, cream cheese e teriaki. 4 und', preco: 'R$ 19,90', imagem: P },
      { id: 17, nome: 'Hot San', descricao: 'Empanado de alga, arroz, salmao cream cheese e camarao crocante. 4 und', preco: 'R$ 13,90', imagem: P },
      { id: 18, nome: 'Hot Chilli', descricao: 'Empanado de alga, arroz, camarao, cream cheese e molho picante do cheff. 4 und', preco: 'R$ 12,90', imagem: P },
    ],
  },
  {
    id: 'sashimi_ice',
    titulo: 'Sashimis e Ice',
    emoji: '🐟',
    itens: [
      { id: 1, nome: 'Sashimi de Salmao', descricao: 'Fatia de salmao fresco. 1 und', preco: 'R$ 4,50', imagem: P },
      { id: 2, nome: 'Sashimi Haddock', descricao: 'Fatia de Haddock Fresco com uma fina lamina de limao. 1 und', preco: 'R$ 4,90', imagem: P },
      { id: 3, nome: 'Sashimi Kani', descricao: 'Fatia de Kani. 1 und', preco: 'R$ 3,90', imagem: P },
      { id: 4, nome: 'Sashimi Toast', descricao: 'Sashimi macaricado com Gergelim Teriyaki e Cebolinha. 2 und', preco: 'R$ 10,90', imagem: P },
      { id: 5, nome: 'Salmao Ice', descricao: 'Lamina salmao envolvida no cream cheese. 5 und', preco: 'R$ 24,90', imagem: P },
      { id: 6, nome: 'Ice Crock', descricao: 'Lamina salmao envolvida com Cream Cheese e Flocos de arroz. 3 und', preco: 'R$ 14,90', imagem: P },
      { id: 7, nome: 'Salmao Maracuja', descricao: 'Lamina salmao envolvida com Cream Cheese e Calda de Maracuja. 4 und', preco: 'R$ 21,90', imagem: P },
      { id: 8, nome: 'Ice Lemon', descricao: 'Lamina salmao envolvida no Cream Cheese e Raspas de limao. 2 und', preco: 'R$ 13,90', imagem: P },
      { id: 9, nome: 'Ice Toast', descricao: 'Lamina salmao envolvida com Cream Cheese macaricada, cobertura Teriyaki e Gergelim. 2 und', preco: 'R$ 14,90', imagem: P },
      { id: 10, nome: 'Dragon San', descricao: 'Lamina salmao envolvida com camarao especial cream cheese finalizado com geleia de pimenta e cebolinha. 2 und', preco: 'R$ 15,90', imagem: P },
    ],
  },
  {
    id: 'joe_battera',
    titulo: 'Joe e Battera',
    emoji: '🍣',
    itens: [
      { id: 1, nome: 'Joe Tropical', descricao: 'Lamina de cenoura, arroz e geleia de hortela. 03 und', preco: 'R$ 9,90', imagem: P },
      { id: 2, nome: 'Joe Pepino', descricao: 'Lamina de pepino, arroz, pastinha de Kani e pimenta biquinho. 03 und', preco: 'R$ 9,90', imagem: P },
      { id: 3, nome: 'Joe Salgado', descricao: 'Lamina salmao, Arroz, Pastinha Salmao e Cebolinha. 3 und', preco: 'R$ 16,90', imagem: P },
      { id: 4, nome: 'Joe Hortela', descricao: 'Lamina salmao, Arroz e Geleia Hortela. 3 und', preco: 'R$ 16,90', imagem: P },
      { id: 5, nome: 'Joe Maracuja', descricao: 'Lamina salmao, Arroz e Geleia Maracuja. 3 und', preco: 'R$ 16,90', imagem: P },
      { id: 6, nome: 'Joe Morango', descricao: 'Lamina salmao, Arroz e Geleia de Morango. 3 und', preco: 'R$ 16,90', imagem: P },
      { id: 7, nome: 'Joe Pimenta', descricao: 'Lamina salmao, Arroz e Geleia de Pimenta. 3 und', preco: 'R$ 16,90', imagem: P },
      { id: 8, nome: 'Joe Camarao', descricao: 'Lamina salmao, Arroz, Pastinha de Camarao e Cebolinha. 3 und', preco: 'R$ 16,90', imagem: P },
      { id: 9, nome: 'Battera Salmao', descricao: 'Sushi prensado com arroz, Cream Cheese, Salmao Mostarda, Gergelim e Teriyaki. 2 und', preco: 'R$ 10,90', imagem: P },
      { id: 10, nome: 'Battera Mix', descricao: 'Sushi prensado com arroz, Cream Cheese, Salmao, Camarao e Kani, finalizado com Pepino, Gergelim e Pimenta Biquinho. 2 und', preco: 'R$ 10,90', imagem: P },
      { id: 11, nome: 'Battera Camarao', descricao: 'Sushi prensado com arroz, Cream Cheese, Camarao e Cebolinha. 2 und', preco: 'R$ 10,90', imagem: P },
      { id: 12, nome: 'Battera Maracuja', descricao: 'Sushi prensado com arroz, Cream Cheese, Salmao e Geleia de Maracuja. 2 und', preco: 'R$ 10,90', imagem: P },
      { id: 13, nome: 'Battera Haddock', descricao: 'Sushi prensado com arroz, Cream Cheese, haddock, lamina de limao e geleia de pimenta. 2 und', preco: 'R$ 10,90', imagem: P },
      { id: 14, nome: 'Battera Kanni', descricao: 'Sushi prensado com arroz, Cream Cheese, kani, lamina de limao e Cebolinha. 2 und', preco: 'R$ 10,90', imagem: P },
    ],
  },
  {
    id: 'niguiri',
    titulo: 'Niguiri',
    emoji: '🍙',
    itens: [
      { id: 1, nome: 'Niguiri Salmao', descricao: 'Bolinha arroz com fina lamina de salmao por cima. Unidade', preco: 'R$ 3,90', imagem: P },
      { id: 2, nome: 'Niguiri Skin Lemon', descricao: 'Bolinha arroz com pele de salmao grelhada por cima com uma fina fatia limao. Unidade', preco: 'R$ 3,90', imagem: P },
      { id: 3, nome: 'Niguiri Camarao', descricao: 'Bolinha arroz com camarao cozido por cima. Unidade', preco: 'R$ 3,90', imagem: P },
      { id: 4, nome: 'Niguiri Kani', descricao: 'Bolinha de arroz com kani por cima. Unidade', preco: 'R$ 3,90', imagem: P },
      { id: 5, nome: 'Salmao Macaricado', descricao: 'Bolinha de arroz e Salmao Macaricado. Unidade', preco: 'R$ 3,90', imagem: P },
      { id: 6, nome: 'Niguiri Skin', descricao: 'Bolinha arroz com pele salmao grelhada por cima. Unidade', preco: 'R$ 3,90', imagem: P },
      { id: 7, nome: 'Salmao Refrescante', descricao: 'Bolinha arroz, com Fatia Salmao por cima e Geleia Hortela. Unidade', preco: 'R$ 3,90', imagem: P },
      { id: 8, nome: 'Tropical', descricao: 'Bolinha arroz, com fatia Salmao por cima e Geleia de Maracuja. Unidade', preco: 'R$ 3,90', imagem: P },
      { id: 9, nome: 'Tropicaliente', descricao: 'Bolinha arroz, com fatia de Salmao por cima e Geleia Pimenta. Unidade', preco: 'R$ 3,90', imagem: P },
    ],
  },
  {
    id: 'temaki',
    titulo: 'Temakis',
    emoji: '🌮',
    itens: [
      { id: 1, nome: 'Temaki Salmao', descricao: 'Salmao, Cream Cheese, Cebolinha e Gergelim', preco: 'R$ 39,90', imagem: P },
      { id: 2, nome: 'Temaki Skin', descricao: 'Pele de salmao grelhada, Molho Teriyaki e Gergelim', preco: 'R$ 35,90', imagem: P },
      { id: 3, nome: 'Temaki Crock', descricao: 'Salmao, Kani, Cream Cheese, Flocos de arroz e Cebolinha', preco: 'R$ 39,90', imagem: P },
      { id: 4, nome: 'Temaki Mix', descricao: 'Salmao, Camarao, Cream Cheese, Cebolinha e Gergelim. Unidade', preco: 'R$ 39,90', imagem: P },
      { id: 5, nome: 'Temaki Camarao', descricao: 'Camarao, Cream Cheese, Cebolinha e Gergelim', preco: 'R$ 39,90', imagem: P },
      { id: 6, nome: 'Temaki Hot', descricao: 'Sabores salmao, Camarao e Mix', preco: 'R$ 45,90', imagem: P },
      { id: 7, nome: 'Temaki Folhado', descricao: 'Sabor a escolha', preco: 'R$ 47,90', imagem: P },
    ],
  },
  {
    id: 'poke',
    titulo: 'Poke Bowl',
    emoji: '🥗',
    itens: [
      { id: 1, nome: 'Poke Bowl', descricao: 'Escolha: Base (Arroz ou Sem Arroz +R$5), Proteina (Salmao, Camarao, Kani, Camarao Empanado ou Salmao Macaricado) e 04 acompanhamentos a escolha', preco: 'R$ 45,90', imagem: P },
    ],
  },
  {
    id: 'sobremesas',
    titulo: 'Sobremesas',
    emoji: '🍫',
    itens: [
      { id: 1, nome: 'Harumaki Nutella', descricao: 'Rolinho recheado de Nutella', preco: 'R$ 13,90', imagem: P },
      { id: 2, nome: 'Harumaki Nutella Morango', descricao: 'Rolinho recheado de Nutella com geleia de morango', preco: 'R$ 13,90', imagem: P },
      { id: 3, nome: 'Harumaki Chocolate', descricao: 'Rolinho recheado de chocolate', preco: 'R$ 13,90', imagem: P },
      { id: 4, nome: 'Harumaki Doce Leite', descricao: 'Rolinho recheado com Doce de leite', preco: 'R$ 13,90', imagem: P },
      { id: 5, nome: 'Harumaki Churros', descricao: 'Rolinho doce leite envolvida no acucar e canela', preco: 'R$ 13,90', imagem: P },
      { id: 6, nome: 'Harumaki Romeu e Julieta', descricao: 'Rolinho recheado de goiabada e cream cheese', preco: 'R$ 13,90', imagem: P },
      { id: 7, nome: 'Ice Goiabada', descricao: 'Lamina de goiabada, cream cheese, Nutella, flocos de arroz e geleia de morango. 4 und', preco: 'R$ 15,90', imagem: P },
      { id: 8, nome: 'Hot Romeu e Julieta', descricao: 'Alga, Arroz, Goiabada, Cream Cheese e Geleia Morango. 4 und', preco: 'R$ 13,90', imagem: P },
      { id: 9, nome: 'Hot Banana', descricao: 'Alga, Arroz, Banana, Cobertura de Leite Condensado e Canela. 4 und', preco: 'R$ 13,90', imagem: P },
      { id: 10, nome: 'Hot Oreo', descricao: 'Alga, Arroz, chocolate, cobertura de chocolate branco, Oreo e calda chocolate. 4 und', preco: 'R$ 14,90', imagem: P },
      { id: 11, nome: 'Hot Makinana', descricao: 'Alga, banana, doce leite, leite condensado e finalizado com cristais de acucar e canela. 4 und', preco: 'R$ 15,90', imagem: P },
      { id: 12, nome: 'Hot Bis', descricao: 'Empanado de alga, arroz, bis finalizado com brigadeiro e pedacos de bis. 4 und', preco: 'R$ 12,90', imagem: P },
      { id: 13, nome: 'Hot Tropical', descricao: 'Massa folhada, arroz, Goiabada, cream cheese leite condensado e raspas de limao. 4 und', preco: 'R$ 14,90', imagem: P },
    ],
  },
  {
    id: 'combinados',
    titulo: 'Combinados',
    emoji: '📦',
    itens: [
      { id: 1, nome: 'San 1', descricao: '20 pecas: 5 Philadelphia, 5 Hot Philadelphia, 3 Sashimis Salmao, 3 Salmao Ice, 3 Niguiris De Salmao, 1 Delicia salmao', preco: 'R$ 79,90', imagem: P },
      { id: 2, nome: 'San 2', descricao: '30 pecas: 5 Philadelphia, 5 Phila Nacho, 5 Hot Philadelphia, 5 Hot japa, 4 Sashimis salmao, 3 Salmao Ice, 3 Niguiris salmao', preco: 'R$ 100,90', imagem: P },
      { id: 3, nome: 'San 3', descricao: '40 pecas: 5 Salmao Maki, 5 Phila crock, 5 Uramaki Philadelphia, 10 Hot japa, 5 Hot especial, 5 Sashimis salmao, 5 Salmao Ice', preco: 'R$ 125,90', imagem: P },
      { id: 4, nome: 'San 4', descricao: '50 pecas: 5 Philadelphia, 5 Phila Tare, 5 Phila pasta, 10 Hot Philadelphia, 5 Crispy, 5 Hot onion, 4 Sashimis haddock, 4 Sashimis Salmao, 4 Salmao Ice, 3 Tropicaliente', preco: 'R$ 149,90', imagem: P },
      { id: 5, nome: 'San Especial', descricao: '80 pecas: 10 Philadelphia, 10 Phila Nacho, 10 Phila crock, 5 Uramaki skin, 10 Hot philadelphia, 5 Ninaroll, 5 Hot japa, 5 Delicias Salmao, 5 Hot Salmao, 5 Sashimis Salmao, 5 Salmao Ice, 5 Niguiris salmao, 1 Harumaki salmao brinde', preco: 'R$ 215,90', imagem: P },
      { id: 6, nome: 'San Hot', descricao: '20 pecas: 5 Hot Philadelphia, 5 Hot japa, 5 Hot especial, 5 Crispy', preco: 'R$ 64,90', imagem: P },
      { id: 7, nome: 'San Chef', descricao: '25 pecas: 5 Sashimis Salmao, 5 Salmao ice, 5 Niguiris Salmao, 5 Salmao Maracuja e 5 Ice Crock', preco: 'R$ 86,90', imagem: P },
      { id: 8, nome: 'Maki 1', descricao: '15 pecas: 4 Philadelphia, 4 Hot Philadelphia, 4 Hot Double, 3 Delicias Salmao', preco: 'R$ 39,90', imagem: P },
      { id: 9, nome: 'Maki 2', descricao: '45 pecas: 10 Phila Salmao, 5 Phila Nacho, 5 Kani Crock, 5 Uramaki Skin, 10 Hot Philadelphia, 10 Hot Especial', preco: 'R$ 95,90', imagem: P },
      { id: 10, nome: 'Maki 3', descricao: '90 pecas: 10 Phila Kanni, 10 Phila Fish, 10 Salmao Maki, 10 Uramaki Grelhado, 10 Haru Hot, 10 Kani Hot Panko, 10 Hot Japa, 10 Delicias Salmao, 5 Battera Salmao, 5 Battera Kanni', preco: 'R$ 160,90', imagem: P },
      { id: 11, nome: 'Maki So Hot', descricao: '40 pecas: 20 Hot Philadelphia, 5 Hot Salmao Grelhado, 5 Hot Tare, 5 Crispy, 5 Salmaocrock', preco: 'R$ 90,90', imagem: P },
      { id: 12, nome: 'Maki so Frio', descricao: '25 pecas: 5 Phila Nacho, 5 Phila Tare, 5 Phila Salmao, 5 Phila Crock, 5 Uramaki Dragon', preco: 'R$ 66,90', imagem: P },
      { id: 13, nome: 'Maki so Pra Mim', descricao: '20 pecas: 4 Philadelphia, 4 Kani Maki, 4 Uramaki Skin, 4 Hot Philadelphia, 4 Hot Onion + 1 Harumack doce de leite', preco: 'R$ 61,90', imagem: P },
    ],
  },
];

export default function Cardapio() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('entradas');
  const categoriaAtual = categorias.find((c) => c.id === categoriaAtiva);

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerTitulo}>🍣 San Maki Sushi</Text>
        <Text style={styles.headerSubtitulo}>Cardapio completo</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filtroScroll}
        contentContainerStyle={styles.filtroConteudo}>
        {categorias.map((cat) => (
          <TouchableOpacity
            key={cat.id}
            style={[styles.filtroBotao, categoriaAtiva === cat.id && styles.filtroBotaoAtivo]}
            onPress={() => setCategoriaAtiva(cat.id)}>
            <Text style={styles.filtroEmoji}>{cat.emoji}</Text>
            <Text style={[styles.filtroTexto, categoriaAtiva === cat.id && styles.filtroTextoAtivo]}>
              {cat.titulo}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView contentContainerStyle={styles.conteudo}>
        <Text style={styles.categoriaTitle}>
          {categoriaAtual?.emoji} {categoriaAtual?.titulo}
        </Text>

        {categoriaAtual?.itens.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={item.imagem} style={styles.imagem} />
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.descricao}>{item.descricao}</Text>
              <Text style={styles.preco}>{item.preco}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
  },
  header: {
    backgroundColor: '#1a0000',
    paddingTop: 55,
    paddingBottom: 18,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#e63946',
  },
  headerTitulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 1,
  },
  headerSubtitulo: {
    fontSize: 14,
    color: '#e63946',
    marginTop: 4,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  filtroScroll: {
    flexGrow: 0,
    backgroundColor: '#1a1a1a',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  filtroConteudo: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  filtroBotao: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#444',
    marginRight: 8,
    backgroundColor: '#2a2a2a',
  },
  filtroBotaoAtivo: {
    backgroundColor: '#e63946',
    borderColor: '#e63946',
  },
  filtroEmoji: {
    fontSize: 14,
    marginRight: 5,
  },
  filtroTexto: {
    fontSize: 12,
    color: '#bbb',
    fontWeight: '600',
  },
  filtroTextoAtivo: {
    color: '#fff',
  },
  conteudo: {
    padding: 16,
    paddingBottom: 80,
  },
  categoriaTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e63946',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingBottom: 8,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#1e1e1e',
    borderRadius: 14,
    padding: 10,
    borderWidth: 1,
    borderColor: '#2e2e2e',
  },
  imagem: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#e63946',
    backgroundColor: '#333',
  },
  info: {
    flex: 1,
    marginLeft: 14,
  },
  nome: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  descricao: {
    fontSize: 11,
    color: '#888',
    marginTop: 3,
    lineHeight: 16,
  },
  preco: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#e63946',
    marginTop: 6,
  },
});