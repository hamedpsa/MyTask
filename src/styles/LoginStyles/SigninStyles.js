import {StyleSheet,Dimensions} from 'react-native';
import {Strings,} from '../../constants/Strins';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export const SigninStyles = StyleSheet.create({
    siginin_conatiner:{
        width: '100%', 
        flex: 1, 
        backgroundColor: 'white'   
    },
    sigin_img_background:{
        width: Width, 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    sigin_main:{
        width: '100%',
        flex: 1,
        alignItems: 'center',
    },
    signin_main_uperview:{
        width: '100%', 
        height: '40%', 
        justifyContent: 'flex-end', 
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.90)',
    },
    signin_behyab_icon:{
        width: 0.16 * Height,
        height: (0.16 * Height) * 0.49,
        margin: 4
    },
    signin_behyab_text:{
        fontFamily: Strings.fontName,
        color: Strings.appColor2,
        fontSize: 12,
        margin: 4
    },
    signin_form_bcg:{
        width: '100%', 
        height: '60%', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.94)',
    },
    signin_lower_img:{
        width: Width,
        height: 0.6 * Width,
        backgroundColor: 'rgba(255,255,255,0.98)'
    },
    signin_form_container:{
        width: 0.86 * Width, 
        backgroundColor: 'white', 
        elevation: 36, 
        borderRadius: 5,
        padding: 10,
    },
    signin_form_box:{
        width: '100%', height: 42, flexDirection: 'row'
    },
    signin_form_box_left:{
        width: '66%', 
        height: '100%',
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'flex-end'
    },
    signin_form_input_lay:{
        width: '82%', 
        height: 36, 
        borderRadius: 5,
        backgroundColor:'#f6f6f6',
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    signin_form_textinput:{
        height: '100%', 
        flex: 1, 
        fontSize: 12
    },
    signin_form_box_right:{
        width: '34%', 
        height: '100%',
        justifyContent:'center',
        flexDirection: 'row-reverse', 
        alignItems: 'center', 
        paddingLeft: 8

    },
    sigin_form_lable_ic:{
        width: 24, 
        height: 24,
    },
    signin_form_lable_txt:{
        fontFamily: 'iransans', 
        fontSize: 12, 
        color: '#565656',
        marginRight: 4
    },
    signin_form_show_pass:{
        width: 24, 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center',
        marginRight:4,
    },
    signin_form_fgpass_lay:{
        width: '100%', 
        height: 36,
    },
    signin_form_fgpass_lay_left:{
        width:'66%',
        height:'100%',
    },
    signin_form_fgpass_btn:{
        width:'100%',
        height:'60%',
        alignItems:'flex-end'
    },
    signin_form_fgpass_text:{
        fontFamily:'iransans',
        fontSize:12,
        color:'red'
    },
    signin_form_down_lay:{
        width: '100%', 
        flexDirection: 'row',
        padding: 4,
    },
    signin_form_down_lay_left:{
        width: '29%', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    signin_form_down_lay_left_gap:{
        width: '100%', 
        height: 32, 
        justifyContent: 'center',
        alignItems: 'center', 
        borderRadius: 5, 
        margin: 4,
    },
    signin_form_down_lay_phone_btn:{
        width: '100%', 
        height: 32, 
        justifyContent: 'center', 
        flexDirection: 'row',
        alignItems: 'center', 
        borderRadius: 5, 
        margin: 4, 
    },
    signin_form_down_lay_phone_ic:{
        width: 22, 
        height: 22,
    },
    signin_form_down_lay_phone_txt:{
        fontFamily: 'iransans', 
        fontSize: 10, 
        color: '#84C31E'
    },
    signin_form_down_lay_mid:{
        width: '42%',  
        justifyContent: 'center', 
        alignItems: 'center'
    },
    signin_form_signin_btn:{
        width: '100%', 
        height: 32, 
        justifyContent: 'center',
        alignItems: 'center', 
        borderRadius: 5, 
        margin: 4, 
        backgroundColor: '#84c31e'
    },
    signin_form_signin_txt:{
        fontFamily: 'iransans', 
        fontSize: 10, 
        color: 'white'
    },
    signin_form_signup_btn:{
        width: '100%', 
        height: 32, 
        justifyContent: 'center',
        alignItems: 'center', 
        borderRadius: 5, 
        margin: 4, 
        backgroundColor: '#bee9e7'
    },
    signin_form_signup_txt:{
        fontFamily: 'iransans', 
        fontSize: 10, 
        color: 'white' 
    }







})