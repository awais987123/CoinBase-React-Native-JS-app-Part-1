import { StyleSheet,Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../../resources/colors";

export default StyleSheet.create({
  container:
  {
      flex:1,
      backgroundColor:colors.primaryBlue,
      paddingTop: Platform.OS === 'android' ? 25 : 0,

  },
  mainView:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
  },
  textStyle:{
color:colors.white,
fontWeight:"bold",
fontSize:RFValue(35),


  },
  btnStyle:{
    backgroundColor:colors.white,
  },
  btnStyle2:{
    marginTop:20,
  },
  btnTextStyle:{
    color:colors.primaryBlue,
  },
  bottomView:{
position:"absolute",
bottom:30,
left:20,
right:20,
  }
})
