// components/ParallaxScrollView.tsx
import React from 'react';
import { ScrollView, ScrollViewProps, StyleSheet } from 'react-native';

export default function ParallaxScrollView({ children, ...props }: ScrollViewProps) {
  return (
    <ScrollView style={styles.container} {...props}>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});