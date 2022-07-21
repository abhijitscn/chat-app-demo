import { StyleSheet } from "react-native";
import { responsiveHeight,responsiveWidth } from "../../Utils/Dimension";

const Style=StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    HeaderView:{
        flex:1,
        // backgroundColor:'yellow',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    contentView:{
        flex:10,
        // backgroundColor:'red'
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
    listCardView:{
        backgroundColor:'white',
        height:responsiveHeight(10),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:responsiveWidth(3),
        paddingRight:responsiveWidth(3)
    }
});
export default Style
