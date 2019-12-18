import React from 'react';
import {SafeAreaView, FlatList, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import Seller from '../component/seller';

import {getListSellers} from '../seller/selectors';

function ListSellers({listSellers}) {
  if (listSellers.length) {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={listSellers}
          renderItem={({item}) => (
            <Seller
              userNameSeller={item.userName}
              passwordSeller={item.password}
            />
          )}
          keyExtractor={item => item._id}
        />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <Text>no seller available</Text>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  listSellers: getListSellers(state),
});

export default connect(mapStateToProps)(ListSellers);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
