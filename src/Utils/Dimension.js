import { Dimensions } from "react-native";

const responsiveWidth = params => {
      return (Dimensions.get('window').width * params) / 100
  };

  const responsiveHeight = params => {
    
    return (Dimensions.get('window').height * params) / 100
      
  };

  export  { responsiveWidth, responsiveHeight};