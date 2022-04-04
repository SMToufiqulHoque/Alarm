import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Button, ListItem } from 'react-native-elements';

const ListAlarms = () => {
  return (
    <View>
      <ListItem>
          <ListItem.Content>
          <ListItem.Title style={styles.titleStyle}>2:45 PM</ListItem.Title>
          <ListItem.Subtitle>4/4/2022</ListItem.Subtitle>
          </ListItem.Content>
        <Button title="Set Alarm" color="blue" onPress={() => {}} />
      </ListItem>
    </View>
  );
};

const styles=StyleSheet.create({
    titleStyle:{fontWeight:"bold",fontSize:30}
})
export default ListAlarms;
