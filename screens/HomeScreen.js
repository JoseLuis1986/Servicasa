/* eslint-disable max-len,global-require,no-useless-constructor,no-unused-vars */
import React from 'react';
import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
    Alert, ScrollView,
} from 'react-native';
// import Entypo from '@expo/vector-icons/Entypo';
//import { CategoryCard } from '../../containers/home/index';
// import { Header } from '../../components';
// import color from '../../config/colors';
// import { GlobalStorageInstance } from '../../config/storage';
import {Header} from "react-native-elements";
import {CategoryCardScreen} from "./CategoryCardScreen";


const data = [
    {
        key: 'plomeria', description: 'Plomeria', name: 'Temas con el agua?', imgSrc1: require('../assets/images/plomeria.png'),
    },
    {
        key: 'electricidad', description: 'Electricidad', name: 'No te electrocutes', imgSrc1: require('../assets/images/electricidad.png'),
    },
    {
        key: 'aire', description: 'Aire', name: 'Que calorazo!!!', imgSrc1: require('../assets/images/aire.png'),
    },
    {
        key: 'pintura', description: 'Pintura', name: 'Pinta, Pinta... Pintame.', imgSrc1: require('../assets/images/pintura.png'),
    },
    {
        key: 'otros', description: 'Otros', name: 'Instalación y otros.', imgSrc1: require('../assets/images/otros.png'),
    },
];

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);

    }

    static navigationOptions = {
        title: 'Home',
    };
    //
    // onNavigate(route){
    //     this.props.navigate(route)
    // }

    // onCloseSessionPressed() {
    //   Alert.alert('Cerrar Sesion', 'Desea Cerrar Session', [
    //     {
    //       text: 'Cancelar',
    //     },
    //     {
    //       onPress: () => this.closeSession(),
    //       text: 'Aceptar',
    //     },
    //   ]);
    // }
    //
    // async closeSession() {
    //   const {
    //     navigation,
    //   } = this.props;
    //   await GlobalStorageInstance.set('jwt', '');
    //   navigation.replace('Login');
    // }


    render() {
        return (
            <View style={{backgroundColor: 'white', flex:1}}>
              <Header
                  placement="left"
                  leftComponent={{ icon: 'menu', color: '#fff' }}
                  centerComponent={{ text: 'Home', style: { color: '#fff' } }}
                  rightComponent={{ icon: 'home', color: '#fff' }}
              />
              <ScrollView>
                <View>
                  <Text style={{
                      paddingTop: 20, textAlign: 'center', fontWeight: 'bold', fontSize: 20,
                  }}
                  >
                    Como podemos ayudarte?
                  </Text>
                </View>
                <FlatList
                    numColumns={2}
                    data={data}
                    renderItem={({ item }) => {
                        console.log('the current item =>', item);

                        return (
                            <View>
                              <View>
                                <CategoryCardScreen imgSrc={item.imgSrc1} desc={item.description} sub={item.name} navigation={this.props.navigation} imgWidth={110} imgHeight={110} />
                              </View>
                            </View>);
                    }}
                />
              </ScrollView>
            </View>
        );
    }
}
HomeScreen.navigationOptions = {
    header: null,
};










// import React from 'react';
// import {
//   Image,
//   Platform,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import { WebBrowser } from 'expo';
//
// import { MonoText } from '../components/StyledText';
//
// export default class HomeScreen extends React.Component {
//   static navigationOptions = {
//     header: null,
//   };
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
//           <View style={styles.welcomeContainer}>
//             <Image
//               source={
//                 __DEV__
//                   ? require('../assets/images/robot-dev.png')
//                   : require('../assets/images/robot-prod.png')
//               }
//               style={styles.welcomeImage}
//             />
//           </View>
//
//           <View style={styles.getStartedContainer}>
//             {this._maybeRenderDevelopmentModeWarning()}
//
//             <Text style={styles.getStartedText}>Get started by opening</Text>
//
//             <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
//               <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
//             </View>
//
//             <Text style={styles.getStartedText}>
//               Change this text and your app will automatically reload.
//             </Text>
//           </View>
//
//           <View style={styles.helpContainer}>
//             <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
//               <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
//             </TouchableOpacity>
//           </View>
//         </ScrollView>
//
//         <View style={styles.tabBarInfoContainer}>
//           <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>
//
//           <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
//             <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
//           </View>
//         </View>
//       </View>
//     );
//   }
//
//   _maybeRenderDevelopmentModeWarning() {
//     if (__DEV__) {
//       const learnMoreButton = (
//         <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
//           Learn more
//         </Text>
//       );
//
//       return (
//         <Text style={styles.developmentModeText}>
//           Development mode is enabled, your app will be slower but you can use useful development
//           tools. {learnMoreButton}
//         </Text>
//       );
//     } else {
//       return (
//         <Text style={styles.developmentModeText}>
//           You are not in development mode, your app will run at full speed.
//         </Text>
//       );
//     }
//   }
//
//   _handleLearnMorePress = () => {
//     WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
//   };
//
//   _handleHelpPress = () => {
//     WebBrowser.openBrowserAsync(
//       'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
//     );
//   };
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   developmentModeText: {
//     marginBottom: 20,
//     color: 'rgba(0,0,0,0.4)',
//     fontSize: 14,
//     lineHeight: 19,
//     textAlign: 'center',
//   },
//   contentContainer: {
//     paddingTop: 30,
//   },
//   welcomeContainer: {
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   welcomeImage: {
//     width: 100,
//     height: 80,
//     resizeMode: 'contain',
//     marginTop: 3,
//     marginLeft: -10,
//   },
//   getStartedContainer: {
//     alignItems: 'center',
//     marginHorizontal: 50,
//   },
//   homeScreenFilename: {
//     marginVertical: 7,
//   },
//   codeHighlightText: {
//     color: 'rgba(96,100,109, 0.8)',
//   },
//   codeHighlightContainer: {
//     backgroundColor: 'rgba(0,0,0,0.05)',
//     borderRadius: 3,
//     paddingHorizontal: 4,
//   },
//   getStartedText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     lineHeight: 24,
//     textAlign: 'center',
//   },
//   tabBarInfoContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     ...Platform.select({
//       ios: {
//         shadowColor: 'black',
//         shadowOffset: { height: -3 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//       },
//       android: {
//         elevation: 20,
//       },
//     }),
//     alignItems: 'center',
//     backgroundColor: '#fbfbfb',
//     paddingVertical: 20,
//   },
//   tabBarInfoText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     textAlign: 'center',
//   },
//   navigationFilename: {
//     marginTop: 5,
//   },
//   helpContainer: {
//     marginTop: 15,
//     alignItems: 'center',
//   },
//   helpLink: {
//     paddingVertical: 15,
//   },
//   helpLinkText: {
//     fontSize: 14,
//     color: '#2e78b7',
//   },
// });
