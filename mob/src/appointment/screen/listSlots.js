import React from 'react';
import {SafeAreaView, FlatList, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import Slot from '../component/slot';

import {getListSlot} from '../slot/selectors';

function ListSlot({listSlot}) {
  if (listSlot.length) {
    console.log(listSlot);
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={listSlot}
          renderItem={({item}) => (
            <Slot
              userNameSeller={item.userNameSeller}
              passwordSeller={item.passwordSeller}
              date={item.date}
              time={item.time}
            />
          )}
          keyExtractor={item => item._id}
        />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <Text>no slot available</Text>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  listSlot: getListSlot(state),
});

export default connect(mapStateToProps)(ListSlot);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
