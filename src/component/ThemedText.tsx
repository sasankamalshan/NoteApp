// components/ThemedText.tsx
import React from 'react';
import { Text, TextProps } from 'react-native';
export function ThemedText(props: TextProps) {
  return <Text {...props} style={[props.style, { color: '#000' }]} />;
}