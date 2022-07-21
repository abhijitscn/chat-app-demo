import { StyleSheet } from "react-native";
import { responsiveHeight,responsiveWidth } from "../../Utils/Dimension";

const style=StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#ffa500',
        justifyContent:'center',
        alignItems:'center'
    },
    picture:{
        height:responsiveHeight(20),
        width:responsiveHeight(20)

    }
})
export default style;