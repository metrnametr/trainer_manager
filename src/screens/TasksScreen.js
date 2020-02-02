import React, {useState, useRef, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button} from 'react-native-paper';
import {
  BottomSheetBehavior,
  CoordinatorLayout,
} from 'react-native-bottom-sheet-behavior';
import theme from '../../common/theme';

const TaskScreen = props => {
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const toggleDrawer = e => {
    console.log(bottomRef.current.memoizedProps)
    bottomRef.current.setBottomSheetState(5);
  };
  const renderContent = () => {
    return (
      <View style={{flex: 2}}>
        <Text style={{color: 'white'}}>Drawer</Text>
      </View>
    );
  };
  console.log(1)
  const bottomRef = useRef('bottomSheet');
  return (
    <View style={styles.container}>
      <Button onPress={toggleDrawer}>press</Button>
      {renderContent()}
      <CoordinatorLayout style={{flex: 1}}>
        <BottomSheetBehavior
          ref={bottomRef}
          peekHeight={70}
        //   hideable={true}
          state={BottomSheetBehavior.STATE_HIDDEN}
          onStateChange={toggleDrawer}>
          <View style={{backgroundColor: '#4389f2'}}>
            <View style={{padding: 26}}>
              <Text>BottomSheetBehavior!</Text>
            </View>
            <View style={{height: 200, backgroundColor: '#fff'}} />
          </View>
        </BottomSheetBehavior>
      </CoordinatorLayout>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundDark,
    flex: 1,
  },
});

export default TaskScreen;
