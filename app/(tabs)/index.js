import React, { useState } from 'react';
import { Image, StyleSheet, View, FlatList, ListHeaderComponent } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import TitleModal from '../../components/TitleModal';
import ShoppingList from '../../components/ShoppingList';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(true);

  const renderHeader = () => (
    <View>
      <Image
        source={require('@/assets/images/iceland.png')}
        style={styles.reactIceland}
      />
      <TitleModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {modalVisible ? (
        <View>
          <Image
            source={require('@/assets/images/iceland.png')}
            style={styles.reactIceland}
          />
          <TitleModal visible={modalVisible} onClose={() => setModalVisible(false)} />
        </View>
      ) : (
        <FlatList
          ListHeaderComponent={renderHeader}
          data={[]}
          renderItem={null}
          ListFooterComponent={<ShoppingList />}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  reactIceland: {
    height: 200,
    width: '100%',
  },
});