import { StyleSheet } from "react-native";
import { responsiveHeight,responsiveWidth } from "../../Utils/Dimension";

const style=StyleSheet.create({
    main:{
        flex:1,
        paddingLeft:responsiveWidth(5),
        paddingRight:responsiveWidth(5)
    },
    HeaderView:{
        flex:1,
        // backgroundColor:'red',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    Headersub:{
        height:responsiveWidth(10),
        width:responsiveWidth(10),
        borderRadius:responsiveWidth(5),
        alignItems:'center',
        justifyContent:'center',
        
    },
    Headersub1:{
        height:responsiveHeight(4),
        width:responsiveWidth(40),
        borderRadius:responsiveHeight(2),
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#8f92a133'
    },
    contentView:{
        flex:6,
    },
    contentViewText:{
        fontSize:responsiveHeight(3.6),
        color:'black',
        fontWeight:'600'
    },
    cardView:{
        height:responsiveHeight(8),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    cardsubView:{
        flexDirection:'row'
    },
    cardsubView2:{
        height:responsiveHeight(4),
        width:responsiveHeight(4),
        borderRadius:responsiveHeight(2),
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center'
    },
    cardText1:{
        fontSize:responsiveWidth(4),
        fontWeight:'600',
        color:'black'
    },
    cardText2:{
        fontSize:responsiveWidth(3.5),
        fontWeight:'400',
        color:'#8F92A1',
        textAlign:'left'
    }

})
export default style;