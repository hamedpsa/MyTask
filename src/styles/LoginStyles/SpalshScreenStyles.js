import {StyleSheet,Dimensions} from 'react-native';
import {Strings,} from '../../constants/Strins';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export const SplashScreenStyles = StyleSheet.create({
    splash_screen_container:{
        width: '100%', 
        flex: 1, 
        backgroundColor: 'white'
    },
    splash_screen_img_background:{
        width: Width, 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    splash_screen_upper_view:{
        width: '100%', 
        flex: 1, 
        backgroundColor: 'rgba(255,255,255,0.88)', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    splash_screen_behyab:{
        width: Width/2,
        height: (Width/2)*0.49, 
        margin: 6
    },
    splash_screen_behyab_text:{
        fontFamily: Strings.fontName, 
        color: Strings.appColor2, 
        fontSize: 14, 
        margin: 4
    },
    splash_screen_lower_img:{
        width: Width, 
        height: 0.71 * Width, 
        backgroundColor: 'rgba(255,255,255,0.92)'
    }

});
