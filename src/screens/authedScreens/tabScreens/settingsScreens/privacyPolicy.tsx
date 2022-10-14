import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const PrivacyPolicy = () => {
  return (
    <View style={styles.container}>
      <Text style = {styles.que}>What is a privacy policy?</Text>
      <Text>
        A privacy policy is a legal document where you disclose what data you
        collect from users, how you manage the collected data and how you use
        that data. The important objective of a privacy policy is to inform
        users how you collect, use and manage the collected.
      </Text>
      <Text style = {styles.que}>Is the privacy policy generator free to use?</Text>
      <Text>
        The Privacy Policy Generator (privacypolicygenerator.info) is a free
        generator of privacy policies for websites, apps & Facebook pages/app.
        You can use our free generator to create the privacy policy for your
        business.
      </Text>
      <Text style = {styles.que}>Why is a privacy policy important? </Text>
      <Text>
        The most important thing to remember is that a privacy policy is
        required by law if you collect data from users, either directly or
        indirectly. For example, if you have a contact form on your website you
        need a privacy policy. But you will also need a privacy policy if you
        use analytics tools such as Google Analytics.
      </Text>
      <Text style = {styles.que}>Where do I put my privacy policy?</Text>
      <Text>
        Usually, you can find privacy policies in the footer of a website. We
        recommend that you place your privacy policy in easy to find locations
        on your website.
      </Text>
      <Text style = {styles.que}>What should the privacy policy include?</Text>
      <Text>
        A standard privacy policy should include: what data you collect from
        visitors, how you collect it, why you are collecting the data, how you
        are using the data.
      </Text>
      <Text style = {styles.que}>Can I copy someone else's privacy policy?</Text>
      <Text>
        We do not recommend copying someone else's privacy policy. First of all,
        privacy policies are copyright-protected legal documents. But most
        importantly, a privacy policy must be generated based on the exact data
        you collect. Our privacy policy generator can help you with this.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  que: {
    fontWeight: 'bold'
  },
  container: {
    backgroundColor: '#c0c0c0c0',
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'column',
    padding: 7,
  },
});

export default PrivacyPolicy;