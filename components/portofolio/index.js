import React from 'react';
import {StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import ItemPortos from '../ItemPortos'

const loginPage = () => {
  const imageSource = require('../../assets/images/portfolio1.png');
  return (
    <ScrollView>
      <ImageBackground source={require('../../assets/images/bg.png')} style={styles.container}>

      <View style={styles.top}>
        <View style={styles.topContent}>
          <Text style={styles.titleApp}>VINCENTIUS RANGGA</Text>
          <Image style={styles.dribbble}
            source={require('../../assets/images/dribbble-ic.png')}
          />
        </View>
      </View>

      <View style={styles.content}>
      
        <View style={styles.header}>
          <View style={styles.textHeader}>

            <View style={styles.headline}>
              <View style={styles.contentHire}>
                <Text style={styles.textHeadlineWhite}>REALIZE</Text>
                <TouchableOpacity style={styles.btnHire}>
                  <View style={styles.contentBtnHire}>
                    <Text style={styles.textBtnHire}>Hire Me</Text>
                    <Image style={styles.arrowBtn}
                    source={require('../../assets/images/arrow-ic-btn.png')}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.textHeadline}>
                <Text style={styles.textHeadlineHigh}>YOUR</Text>
                <Text style={styles.textHeadlineWhite}>IDEAS</Text>
              </View>
            </View>

            <Text style={styles.desc}>
              We are experienced in designing interface for various platform such as mobile app, website and dashboard to realize your idea
            </Text>

          </View>

          <View style={styles.stats}>
            <View style={styles.itemStats}>
              <Text style={styles.headStats}>220+</Text>
              <Text style={styles.aboutStats}>Total Portfolio</Text>
            </View>
            <View style={styles.itemStats}>
              <Text style={styles.headStats}>150+</Text>
              <Text style={styles.aboutStats}>Total Project</Text>
            </View>
            <View style={styles.itemStats}>
              <Text style={styles.headStats}>100+</Text>
              <Text style={styles.aboutStats}>My Testimonial</Text>
            </View>
          </View>
        </View>

        <View style={styles.portfolio}>
          <View style={styles.titlePorto}>
            <Text style={styles.textTitleWhite}>OUR</Text>
            <Text style={styles.textTitleHigh}>PORTFOLIO</Text>
          </View>
          <ItemPortos img={imageSource} title='Website Digital Agency'/>
          <ItemPortos img={imageSource} title='Website Digital Agency'/>
        </View>

      </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default loginPage;

// ========== STYLE PAGE ==========

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,
    paddingHorizontal: 18,
    gap: 32,
    backgroundColor: "#000000"
  },
  content: {
    gap: 42,
  },
  // TOP
  top: {
    gap: 18,
    borderBottomWidth: 1, // Border width
    borderColor: '#535353',
  },
  topContent:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    paddingBottom: 20
  },
  titleApp: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: 600,
  },
  dribbble: {
    width: 28,
    height: 28
  },

  // HEADER
  header: {
    gap: 24,
  },
  textHeader: {
    gap: 12,
  },
  headline: {
    gap: 4
  },
  textHeadlineWhite:{
    fontSize: 54,
    color: "#ffffff",
    fontWeight: 600,
  },
  textHeadlineHigh:{
    fontSize: 54,
    color: "#F3FA93",
    fontWeight: 600,
  },
  contentHire: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnHire: {
    borderColor: "#F3FA93",
    borderWidth: 1,
    borderRadius: 100,
    height: 42
  },
  contentBtnHire: {
    flexDirection: 'row',
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  textBtnHire: {
    fontSize: 18,
    color: "#F3FA93",
    fontWeight: 500,
  },
  arrowBtn: {
    height: 22,
    width: 22
  },
  textHeadline: {
    flexDirection: 'row',
    gap: 12
  },
  desc: {
    color : "#ffffff",
    fontSize : 14,
    lineHeight :20
  },

  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemStats: {
    gap: 4,
  },
  headStats: {
    fontSize: 38,
    fontWeight: 700,
    color: "#ffffff"
  },
  aboutStats: {
    fontSize: 14,
    color: "#ffffff",
  },

  // PORTFOLIO
  portfolio: {
    gap: 24,
  },
  titlePorto: {
    flexDirection: 'row',
    gap: 8
  },
  textTitleWhite: {
    fontSize : 34,
    fontWeight : 400,
    color : "#ffffff"
  },
  textTitleHigh: {
    fontSize : 34,
    fontStyle: 'italic',
    fontWeight : 600,
    color : "#F3FA93"
  },
});
