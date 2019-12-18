import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {requestAppointment as requestAppointmentDuck} from '../appointment/duck';

function Slot({
  userNameSeller,
  passwordSeller,
  date,
  time,
  requestAppointment,
}) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{userNameSeller}</Text>
      <Text style={styles.title}>{date}</Text>
      <Text style={styles.title}>{time}</Text>
      <Button
        onPress={() => {
          requestAppointment({
            userNameSeller,
            passwordSeller,
            time,
            date,
          });
        }}
        title="request appointment"
      />
    </View>
  );
}

const mapDispatchToProps = dispatch => ({
  requestAppointment: ({userNameSeller, passwordSeller, time, date}) => {
    dispatch(
      requestAppointmentDuck({
        userNameSeller,
        passwordSeller,
        time,
        date,
      }),
    );
  },
});

// eslint-disable-next-line prettier/prettier
export default connect(null, mapDispatchToProps)(Slot);

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
