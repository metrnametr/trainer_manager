import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, List, Button} from 'react-native-paper';
import theme from '../../common/theme';
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';
const {Item, Section, Subheader} = List;

const TasksList = () => {
  const storeData = async () => {
    try {
      await AsyncStorage.setItem('@storage_Key', 'stored value');
    } catch (e) {
      // saving error
    }
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      if (value !== null) {
        console.log(value);
      }
    } catch (e) {
      // error reading value
    }
  };
  return (
    <View>
      <Section>
        <Subheader>Some title</Subheader>
        <Item
          style={styles.item}
          title="First Item"
          left={() => <Icon color={theme.colors.darkRed} name="folder" />}
          right={() => (
            <Icon
              color={theme.colors.darkGreen}
              size={28}
              name="check-circle"
            />
          )}
        />
        <Item
          style={styles.item}
          title="Second Item"
          description="Два похода"
          left={() => <Icon color={theme.colors.darkRed} name="folder" />}
          right={() => (
            <Icon
              style={{alignSelf: 'center', padding: 10}}
              color={theme.colors.darkGreen}
              size={28}
              name="check-circle"
            />
          )}
        />
      </Section>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: theme.backgroundLight,
    marginBottom: 5,
  },
});

export default TasksList;
