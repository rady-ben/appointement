import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {fetchListSlot as fetchListSlotAction} from '../slot/duck';

function Seller({userNameSeller, passwordSeller, fetchListSlot}) {
  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => {
          fetchListSlot({userNameSeller, passwordSeller});
        }}>
        <Text style={styles.title}>{userNameSeller}</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchListSlot: ({userNameSeller, passwordSeller}) => {
    dispatch(fetchListSlotAction({userNameSeller, passwordSeller}));
  },
});

// eslint-disable-next-line prettier/prettier
export default connect(null, mapDispatchToProps)(Seller);

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
