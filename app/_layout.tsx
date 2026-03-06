import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarActiveTintColor: '#e63946',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          backgroundColor: '#1a0000',
          borderTopColor: '#e63946',
          borderTopWidth: 2,
          height: 65,
          paddingBottom: 10,
          paddingTop: 6,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: '700',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="cardapio"
        options={{
          title: 'Cardapio',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="fork.knife" color={color} />,
        }}
      />
    </Tabs>
  );
}