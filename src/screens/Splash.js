import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
  let backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({...props}) => {
  return (
    <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
      <Text style={{fontSize: 16}}>Skip</Text>
    </TouchableOpacity>
  );
};
const Next = ({...props}) => {
  return (
    <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
      <Text style={{fontSize: 16}}>Next</Text>
    </TouchableOpacity>
  );
};

const Done = ({...props}) => {
  return (
    <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
      <Text style={{fontSize: 16}}>Done</Text>
    </TouchableOpacity>
  );
};

const Splash = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.replace('Done')}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../src/assets/images/onboarding-img1.png')}
            />
          ),
          title: 'Connect to the world',
          subtitle:
            'Welcome sir. A new way to connect multiple social platform',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../src/assets/images/onboarding-img2.png')}
            />
          ),
          title: 'Share your thoughts',
          subtitle: 'Share your thoughts with similar kind of people',
        },

        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../src/assets/images/onboarding-img3.png')}
            />
          ),
          title: 'Become the start',
          subtitle: 'Let the spot light capture you',
        },
      ]}
    />
  );
};

export default Splash;
