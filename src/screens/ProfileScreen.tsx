import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
  Image
} from 'react-native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('Влад');
  const [address, setAddress] = useState('Город Уфа, ул. Рабкоров, 20');

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <SafeAreaView style={styles.SafeAreaContainer}>
      <View style={styles.Container}>
        <View style={styles.Header}>
          <TouchableOpacity onPress={handleBackPress}>
            <Text style={styles.TextSmall}>⬅️</Text>
          </TouchableOpacity>
          <Text style={styles.TextSmallGreen}>Profile</Text>
        </View>
        <View style={styles.ContainerDataProfile}>
          <Image
            source={{ uri: "https://storage.needpix.com/rsynced_images/blank-profile-picture-973460_1280.png" }}
            style={styles.Circle}
            resizeMode="cover"
          />
          {isEditing ? (
            <View style={styles.FormContainer}>
              <Text style={styles.Label}>Имя</Text>
              <TextInput
                style={styles.Input}
                value={name}
                onChangeText={setName}
              />
              <Text style={styles.Label}>Адресс</Text>
              <TextInput
                style={styles.Input}
                value={address}
                onChangeText={setAddress}
              />
              <Button title="Save" onPress={handleSave} />
            </View>
          ) : (
            <View style={styles.TextContainer}>
              <Text style={styles.Text}>{name}</Text>
              <Text style={styles.Text}>{address}</Text>
              <TouchableOpacity
                style={styles.EditButton}
                onPress={() => setIsEditing(true)}
              >
                <Text style={styles.ButtonText}>Edit</Text>
              </TouchableOpacity>
            </View>
          )}
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
    borderRadius: 60,
    // backgroundColor: '#ccc',
  },
  Text: {
    fontSize: 18,
    marginVertical: 10,
  },
  FormContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  Label: {
    fontSize: 16,
    marginVertical: 5,
  },
  Input: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  EditButton: {
    backgroundColor: '#32CD32',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  ButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  TextContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
