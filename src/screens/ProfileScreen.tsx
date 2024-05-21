import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ProfileScreen = () => {
  const navigation = useNavigation();


  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.SafeAreaContainer}>
      <View style={styles.Container}>
        <View style={styles.Header}>
          <TouchableOpacity onPress={handleBackPress}>
            <Text style={styles.TextSmall}>⬅️</Text>
          </TouchableOpacity>
          <Text style={styles.TextSmallGreen}>See all</Text>
        </View>
        <View style={styles.ContainerDataProfile}>
          <View style={styles.Circle}>
          </View>
          <Text style={styles.TextSmallGreen}>See all</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  SafeAreaContainer: {
    flex: 1,
  },
  Container: {
    flex: 1,
    paddingHorizontal: 20
  },
  Header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  Side: {
    flex: 1,
    alignItems: 'center',
  },
  Center: {
    flex: 2,
    alignItems: 'center',
  },
  TextSmall: {
    fontSize: 16,
    fontWeight: '600',
  },
  TextSmallGreen: {
    fontSize: 14,
    color: '#32CD32',
  },
  ContainerDataProfile: {
    flexDirection: 'column',
    justifyContent: "center",
    alignContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  Circle: {
    width: 120,
    height: 120,
    borderRadius: 120, // Half of the width to make it a circle
    backgroundColor: '#ccc', // Gray color
  },
})