/* eslint-disable global-require */
import React from 'react';
import { View, Image } from 'react-native';

import { PlayButton } from '@assets/index';
import styles from './styles';

const VideoPanel = () => (
  <View style={styles.videoPanel}>
    <View style={styles.image}>
      <PlayButton style={styles.playButton} />
      <Image
        source={require('../../assets/image/video_thumbnails/caley-vanular-1jeHdhQr8T8-unsplash.jpg')}
        style={styles.image}
      />
    </View>
    <View style={styles.image}>
      <PlayButton style={styles.playButton} />
      <Image
        source={require('../../assets/image/video_thumbnails/jimmy-dean-9pO3LgH-9-Y-unsplash.jpg')}
        style={styles.image}
      />
    </View>
    <View style={styles.image}>
      <PlayButton style={styles.playButton} />
      <Image
        source={require('../../assets/image/video_thumbnails/imani-_TuIdedBPwQ-unsplash.jpg')}
        style={styles.image}
      />
    </View>
  </View>
);

export default VideoPanel;
