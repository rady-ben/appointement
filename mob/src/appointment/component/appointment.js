import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Appointment({userNameSeller, date, time, state}) {
  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => {
          alert(userNameSeller + date + time + state);
        }}>
        <Text style={styles.title}>{userNameSeller}</Text>
        <Text style={styles.title}>{date}</Text>
        <Text style={styles.title}>{time}</Text>
        <Text style={styles.title}>{state}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 26,
    margin: 5,
  },
});
