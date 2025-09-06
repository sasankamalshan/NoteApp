// components/ExternalLink.tsx
import React from 'react';
import { Linking, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(href)}>
      <ThemedText style={styles.link}>{children}</ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: {
    color: '#1E90FF',
    textDecorationLine: 'underline',
  },
});