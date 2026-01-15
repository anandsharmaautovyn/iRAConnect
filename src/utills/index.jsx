import { Dimensions } from 'react-native';
// import { Baseurl } from './api'
// import storage from './storage';
const { width, height } = Dimensions.get('window');

const baseWidth = 375;
const baseHeight = 812;

const vw = (size) => (width / baseWidth) * size;
const vh = (size) => (height / baseHeight) * size;
const fs = (size, factor = 0.5) => size + (vw(size) - size) * factor;

const Colors = {
    white: '#FFF',
    themeColor: '#17AA9C',
    themeSecondaryColor: '#081528',
    themeTertiaryColor: '#1B263C',
    black: '#000',
  };

const Fonts = {
  themeFontRegular: 'Poppins-Regular',
  themeFontMedium: 'Poppins-Medium',
  themeFontBold: 'PPoppins-SemiBold',
}
export { vw, vh, fs, Colors, storage, Fonts, Baseurl };
