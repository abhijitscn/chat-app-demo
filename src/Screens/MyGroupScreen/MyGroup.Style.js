import { StyleSheet } from "react-native";
import { responsiveHeight,responsiveWidth } from "../../Utils/Dimension";

const style=StyleSheet.create({
    main:{
        flex:1
    },
    Headerview:{
        flex:1,
    },
    headerSub1:{
        flex:1.5,
        // backgroundColor:'red',
        paddingLeft:responsiveWidth(2),
        paddingRight:responsiveWidth(2),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    headerSub2:{
        flex:1,
        // backgroundColor:'blue',
        paddingLeft:responsiveWidth(2),
        paddingRight:responsiveWidth(2),
        justifyContent:'center'
    },
    GroupView:{
        flex:4,
        // backgroundColor:'red',
        paddingLeft:responsiveWidth(3),
        paddingRight:responsiveWidth(3)

    },
    groupCard:{
        height:responsiveHeight(7),
        marginTop:responsiveHeight(2),
        flexDirection:'row',
        justifyContent:'space-between',
        // backgroundColor:'blue', 
    },
    gCardSub:{
        flexDirection:'row',
        alignItems:'center',
        // backgroundColor:'pink'
    },
    gCardText:{
        alignContent:'space-between',
        marginLeft:responsiveWidth(3),
        alignSelf:'flex-start',
        marginTop:responsiveHeight(0.7)
    },
    text1:{
        fontSize:responsiveHeight(1.9),
        color:'black',
        fontWeight:'400'
    },
    text2:{
        fontSize:responsiveHeight(1.7),
        color:'#8F92A1',
        fontWeight:'400'
    },
    text3:{
        fontSize:responsiveHeight(2),
        color:'black',
        fontWeight:'600'
    },
    butView:{
        height:responsiveHeight(5),
        width:responsiveHeight(5),
        borderRadius:responsiveHeight(2.5),
        borderWidth:responsiveWidth(0.5),
        borderColor:'rgba(143, 146, 161, 0.2)',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:responsiveWidth(2)
    },
    serachButView:{
        height:responsiveHeight(5),
        borderTopRightRadius:responsiveHeight(2.5),
        borderTopLeftRadius:responsiveHeight(2.5),
        borderBottomLeftRadius:responsiveHeight(2.5),
        borderBottomRightRadius:responsiveHeight(2.5),
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F3F6F8'
    }
});
export default style;