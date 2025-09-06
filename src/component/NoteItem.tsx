// components/NoteItem.js
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const NoteItem = ({ note, onDelete }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.noteText}>{note.content}</Text>
      <TouchableOpacity 
        style={styles.deleteButton}
        onPress={() => onDelete(note.id)}
      >
        <Ionicons name="trash-outline" size={20} color="#FF3B30" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  noteText: {
    flex: 1,
    fontSize: 16,
  },
  deleteButton: {
    padding: 5,
  },
});

export default NoteItem;