import React from 'react';

import {
  View as RNView,
  TouchableOpacity as RNTouchableOpacity,
  TouchableWithoutFeedback as RNTouchableWithoutFeedback,
} from 'react-native';

import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'glamorous-native';


const Container = ({children}) => (
  <View marginTop={10} padding={10} borderWidth={1} borderColor="black">
    {children}
  </View>
);

const Button = ({children}) => (
  <RNView style={{margin: 10, padding: 10, backgroundColor: "black"}}>
    <Text color="red">
      {children}
    </Text>
  </RNView>
);


export default class App extends React.Component {
  render() {
    return (
      <View width="100%" height="100%" padding={10} paddingTop={40}>

        <Container>
          <TouchableOpacity onPress={() => alert("works")}>
            <View>
              <Button>Glamorous View + Glamorous TouchableOpacity</Button>
            </View>
          </TouchableOpacity>
        </Container>


        <Container>
          <TouchableWithoutFeedback onPress={() => alert("works")}>
            <View>
              <Button>Glamorous View + Glamorous TouchableWithoutFeedback</Button>
            </View>
          </TouchableWithoutFeedback>
        </Container>
        <Container>
          <RNTouchableWithoutFeedback onPress={() => alert("works")}>
            <View>
              <Button>Glamorous View + RN TouchableWithoutFeedback</Button>
            </View>
          </RNTouchableWithoutFeedback>
        </Container>

        <Container>
          <TouchableWithoutFeedback onPress={() => alert("works")}>
            <RNView>
              <Button>RN View + Glamorous TouchableWithoutFeedback</Button>
            </RNView>
          </TouchableWithoutFeedback>
        </Container>
        <Container>
          <RNTouchableWithoutFeedback onPress={() => alert("works")}>
            <RNView>
              <Button>RN View + RN TouchableWithoutFeedback</Button>
            </RNView>
          </RNTouchableWithoutFeedback>
        </Container>

      </View>
    );
  }
}
