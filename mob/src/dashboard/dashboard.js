import React, {Component} from 'react';
import {Button, View, StyleSheet} from 'react-native';
import NavigationService from '../NavigationService';

export default class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="new appointment"
          onPress={() => {
            NavigationService.navigate('ListSeller');
          }}
        />
        <Button
          title="my appointments"
          onPress={() => {
            NavigationService.navigate('ListAppointment');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'space-around', alignItems: 'center'},
});
