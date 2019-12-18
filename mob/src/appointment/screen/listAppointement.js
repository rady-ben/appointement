import React from 'react';
import {SafeAreaView, FlatList, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import Appointment from '../component/appointment';
import {getListAppointment} from '../appointment/selectors';

function ListAppointemnt({listApointment}) {
  if (listApointment.length) {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={listApointment}
          renderItem={({item}) => (
            <Appointment
              userNameSeller={item.userNameSeller}
              date={item.date}
              time={item.time}
              state={item.state}
            />
          )}
          keyExtractor={item => item._id}
        />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <Text>you don t have any appointment</Text>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  listApointment: getListAppointment(state),
});

export default connect(mapStateToProps)(ListAppointemnt);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
