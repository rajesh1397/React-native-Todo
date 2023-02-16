import {StyleSheet, View} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Center,
  Box,
  Heading,
  VStack,
  HStack,
  IconButton,
  Checkbox,
  Text,
  MinusIcon,
  Button,
} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../Redux/store';
import {deleteTodo, toggleTodo} from '../Redux/features/Todo/todoSlice';

const Home = (props: {navigation: {navigate: (arg0: string) => void}}) => {
  const dispatch = useDispatch();

  const removeUserCredentials = async () => {
    try {
      await AsyncStorage.removeItem('user_credentials');
    } catch (e) {
      // remove error
    }
  };

  const handlelogout = () => {
    removeUserCredentials();
    props.navigation.navigate('Login');
  };

  const instState = useSelector((state: RootState) => state.todo.todoList);

  const handleDelete = (index: number) => {
    dispatch(deleteTodo(index));
  };

  const handleStatusChange = (index: number) => {
    dispatch(toggleTodo(index));
  };

  return (
    <View style={styles.container}>
      <Center w="100%">
        <Box maxW="300" w="100%">
          <HStack w="100%" justifyContent="space-between" alignItems="center">
            <Heading mb="2" size="md">
              Today
            </Heading>
            <Button
              size="sm"
              // variant="outline"
              colorScheme="secondary"
              onPress={handlelogout}>
              Logout
            </Button>
          </HStack>
          <VStack space={4}>
            <VStack space={2}>
              {instState?.map(
                (
                  item: {
                    title: string;
                    isCompleted: boolean | undefined;
                  },
                  itemI: number,
                ) => (
                  <HStack
                    w="100%"
                    justifyContent="space-between"
                    alignItems="center"
                    key={item.title + itemI.toString()}>
                    <Checkbox
                      isChecked={item.isCompleted}
                      onChange={() => handleStatusChange(itemI)}
                      value={item.title}
                    />
                    <Text
                      width="100%"
                      flexShrink={1}
                      textAlign="left"
                      mx="2"
                      strikeThrough={item.isCompleted}
                      _light={{
                        color: item.isCompleted ? 'gray.400' : 'coolGray.800',
                      }}
                      _dark={{
                        color: item.isCompleted ? 'gray.400' : 'coolGray.50',
                      }}
                      onPress={() => handleStatusChange(itemI)}>
                      {item.title}
                    </Text>
                    <IconButton
                      size="sm"
                      colorScheme="trueGray"
                      color="red.600"
                      icon={<MinusIcon />}
                      onPress={() => handleDelete(itemI)}
                    />
                  </HStack>
                ),
              )}
            </VStack>
          </VStack>
        </Box>
      </Center>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9A826',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
