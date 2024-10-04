import { Stack, Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Bienvenue' }} />
      <Stack.Screen name="room" options={{ title: 'Parties' }} />
      <Stack.Screen name="board/[board]" options={{ title: 'Jouer', headerShown: false }}  />
    </Stack>
  );
}
