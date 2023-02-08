import {StyleSheet, View} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Center,
  Box,
  Heading,
  VStack,
  HStack,
  Input,
  IconButton,
  Checkbox,
  useToast,
  Text,
  AddIcon,
  MinusIcon,
} from 'native-base';

const Home = (props: {navigation: {navigate: (arg0: string) => void}}) => {
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

  const instState = [
    {
      title: 'Code',
      isCompleted: true,
    },
    {
      title: 'Meeting with team at 9',
      isCompleted: false,
    },
    {
      title: 'Check Emails',
      isCompleted: false,
    },
    {
      title: 'Write an article',
      isCompleted: false,
    },
  ];
  const [list, setList] = React.useState(instState);
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

    setList(prevList => {
      return [
        ...prevList,
        {
          title: title,
          isCompleted: false,
        },
      ];
    });
  };

  const handleDelete = (index: number) => {
    setList(prevList => {
      const temp = prevList.filter((_, itemI) => itemI !== index);
      return temp;
    });
  };

  const handleStatusChange = (index: number) => {
    setList(prevList => {
      const newList = [...prevList];
      newList[index].isCompleted = !newList[index].isCompleted;
      return newList;
    });
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
            <VStack space={2}>
              {list?.map((item, itemI) => (
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
              ))}
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
