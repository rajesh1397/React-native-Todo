import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  Center,
  Box,
  Heading,
  VStack,
  HStack,
  Input,
  IconButton,
  AddIcon,
  useToast,
} from 'native-base';

const Addtodotab = (props: {
  navigation: {navigate: (arg0: string) => void};
}) => {
  const [inputValue, setInputValue] = React.useState('');
  const toast = useToast();

  const addItem = (title: string) => {
    if (title === '') {
      toast.show({
        title: 'Please Enter Text',
        // status: 'warning',
      });
      return;
    }
  };

  return (
    <View style={styles.container}>
      <Center w="100%">
        <Box maxW="300" w="100%">
          <Heading mb="2" size="md">
            Today
          </Heading>
          <VStack space={4}>
            <HStack space={2}>
              <Input
                flex={1}
                onChangeText={v => setInputValue(v)}
                value={inputValue}
                placeholder="Add Task"
              />
              <IconButton
                borderRadius="sm"
                variant="solid"
                color="yellow.400"
                icon={<AddIcon />}
                onPress={() => {
                  addItem(inputValue);
                  setInputValue('');
                }}
              />
            </HStack>
          </VStack>
        </Box>
      </Center>
    </View>
  );
};

export default Addtodotab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9A826',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
