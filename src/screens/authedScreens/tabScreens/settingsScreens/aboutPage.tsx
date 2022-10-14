import React from 'react';
import {View, Text} from 'react-native';

const AboutPage = () => {
  return (
    <View style={{flex: 1, justifyContent: 'space-around', backgroundColor: '#c0c0c0c0', padding: 27,}}>
      <Text>// Practical - 3</Text>
      <Text>
        - We have to create a standards full navigation structure for
        authentication and unauthorized screens
      </Text>
      <Text>- UnAuthorized screens</Text>
      <Text>
        - Login screen Dummy form with validation of username and password
      </Text>
      <Text>
        - Register screen Dummy form with validation of username and password
        success message after validate success and redirect to login
      </Text>
      <Text>
        - Forgot password screen success message after validate success and
        redirect to login
      </Text>
      <Text>- Authorized screens</Text>
      <Text>- Tabs navigation</Text>
      <Text>
        - Home Horizontal carousel slider with 1 slide in screen Grid listing of
        cards with image & text
      </Text>
      <Text>
        - Profile View static information about the users like First name/ last
        name / gender / profile photo / about
      </Text>
      <Text>
        - Edit Profile Input/DD/textarea/picker fields to edit First name/ last
        name / gender / profile photo / about
      </Text>
      <Text>- Settings Listing of below page and it's navigation</Text>
      <Text>- Privacy Policy Webview content need to display from any URL</Text>
      <Text>- About page Static HTML content need to display</Text>
      <Text>- Drawer navigation</Text>
      <Text>
        - Products Grid Listing of the products [image / title / price ]
      </Text>
      <Text>- Cart List of products with details</Text>
      <Text>- Orders List of orders with details</Text>
      <Text>
        - All the screen should navigate correctly as per hierarchy of the stack
      </Text>
    </View>
  );
};

export default AboutPage;
