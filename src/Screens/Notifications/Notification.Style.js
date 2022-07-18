import { StyleSheet } from "react-native";
import { responsiveHeight,responsiveWidth } from "../../Utils/Dimension";

const style=StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    HeaderView:{
        flex:1,
        // backgroundColor:'yellow',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:responsiveWidth(6),
        paddingRight:responsiveWidth(6)
    },
    HeaderText1:{
        fontSize:responsiveHeight(2.8),
        fontWeight:'600',
        color:'black'
    },
    HeaderText2:{
        fontSize:responsiveHeight(2),
        fontWeight:'600',
        color:'#8F92A1'
    },
    contentView:{
        flex:6,
        backgroundColor:'#F3F6F8'
    },
    notCardView:{
        padding:responsiveWidth(2.8),
        margin:responsiveWidth(3),
        backgroundColor:'#FFFFFF',
        borderRadius:responsiveWidth(3),
        flexDirection:'row',
        alignItems:'center'
    },
    notText1:{
        fontSize:responsiveHeight(1.6),
        fontWeight:'600',
        color:'black',
    },
    notText2:{
        fontSize:responsiveHeight(1.5),
        fontWeight:'400',
        color:'#8F92A1'
    },
    butView:{
        height:responsiveHeight(3.6),
        width:responsiveWidth(15),
        backgroundColor:'#0002FC',
        borderRadius:responsiveHeight(1.8),
        justifyContent:'center',
        alignItems:'center'
    },
    butText:{
        color:'white',
        fontWeight:'600',
        fontSize:responsiveHeight(1.5)
    }
});
export default style;