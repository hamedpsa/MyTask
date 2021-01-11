import React, {useState} from 'react';
import {SafeAreaView, Text, View,StyleSheet} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const styles = StyleSheet.create({
  root: {padding: 20, minHeight: 300},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {
    //marginTop: 20,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#f6f6f6',
    borderBottomWidth: 1,
  },
  cellText: {
    color: '#565656',
    fontSize: 14,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: '#f6f6f6',
    borderBottomWidth: 2,
  },
});
const CELL_COUNT = 4;

const UnderLineCodeConfirmField = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView >
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <View
            // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}>
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default UnderLineCodeConfirmField;

