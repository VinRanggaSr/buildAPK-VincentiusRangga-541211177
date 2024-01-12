import React, { useState } from 'react';
import { ImageBackground, TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';

const ItemPortos = (props) => {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const actLike = () => {
    setLike(like + 1);
  };
  const actDislike = () => {
    setDislike(dislike + 1);
  };
  return (
        <View>
          
          <View style={styles.itemPorto}>
            <ImageBackground
              source={props.img}
              style={styles.imagePorto}>
            </ImageBackground>
            <View style={styles.aboutPorto}>
              <View style={styles.textAboutPorto}>
                <Text style={styles.namePorto}>{props.title}</Text>

                <View style={styles.rate}>
                  <View style={styles.like}>
                    <TouchableOpacity style={styles.btnLike} onPress={actLike}>
                      <Image style={styles.icLike}
                        source={require('../assets/like.png')}
                      />
                    </TouchableOpacity>
                    <View style={styles.statsRate}>
                      <Text style={styles.muchRate}>{like}</Text>
                      <Text style={styles.helpRate}>Like</Text>
                    </View>
                  </View>

                  <View style={styles.like}>
                    <TouchableOpacity style={styles.btnDislike} onPress={actDislike}>
                      <Image style={styles.icLike}
                        source={require('../assets/dislike.png')}
                      />
                    </TouchableOpacity>
                    <View style={styles.statsRate}>
                      <Text style={styles.muchRate}>{dislike}</Text>
                      <Text style={styles.helpRate}>Dislike</Text>
                    </View>
                  </View>
                </View>
              </View>
              <Image style={styles.btnPorto}
                source={require('../assets/arrow-ic.png')}
              />
            </View>
          </View>
        </View>
  )
}

const styles = StyleSheet.create ({
  itemPorto: {
    gap: 14
  },
  imagePorto: {
    height: 203,
  },
  aboutPorto: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textAboutPorto: {
    gap: 6
  },
  namePorto: {
    fontSize : 24,
    fontWeight : 500,
    color: "#F3FA93"
  },
  btnPorto: {
    height: 42,
    width : 42,
    alignItems: 'center',
  },
  rate: {
    gap: 12,
    flexDirection: 'row'
  },
  like: {
    gap: 8,
    flexDirection: 'row'
  },
  icLike: {
    height: 20,
    width: 20
  },
  statsRate: {
    gap: 4,
    flexDirection: 'row'
  },
  muchRate: {
    color: '#ffffff',
    fontWeight: 500,
    fontSize: 14
  },
  helpRate: {
    color: '#ffffff',
    fontWeight: 400,
    fontSize: 14
  }
})

export default ItemPortos;