/* eslint-disable max-len,no-use-before-define,react/destructuring-assignment */
import React, { Component } from 'react';
import {
    View, StyleSheet, Text, Image, TouchableOpacity, Alert,
} from 'react-native';
// import { GlobalStorageInstance } from '../../config/storage';


export class CategoryCardScreen extends Component {
    constructor(props) {
        super(props);
        console.log('the props im receiving => ', this.props);

        this.onAddPressed = this.onAddPressed.bind(this);
        // this.onNextPage = this.onNextPage.bind(this);

        this.state = {
            imgSrc: this.props.imgSrc,
            desc: this.props.desc,
            sub: this.props.sub,
            imgWidth: this.props.imgWidth,
            imgHeight: this.props.imgHeight,
        };
    }


    onAddPressed() {
        const { desc } = this.props;
        const { navigation } = this.props;
        if (desc === 'Plomeria') {
            navigation.navigate('IssueCreator', { desc });
            Alert.alert(
                'AVISO',
                'Debe estar registrado para continuar',
                [
                    {
                        text: 'Aceptar',
                        onPress: () => {
                            navigation.navigate('ProfileView');
                        },
                    },
                ],
                { cancelable: false },
            );
            console.log(CategoryCard);
        } else if (desc === 'Electricidad') {
            navigation.navigate('IssueCreator', { desc });
            Alert.alert(
                'AVISO',
                'Debe estar registrado para continuar',
                [
                    {
                        text: 'Aceptar',
                        onPress: () => {
                            navigation.navigate('ProfileView');
                        },
                    },
                ],
                { cancelable: false },
            );
            console.log('pressed1');
        } else if (desc === 'Aire') {
            navigation.navigate('IssueCreator', { desc });
            Alert.alert(
                'AVISO',
                'Debe estar registrado para continuar',
                [
                    {
                        text: 'Aceptar',
                        onPress: () => {
                            navigation.navigate('ProfileView');
                        },
                    },
                ],
                { cancelable: false },
            );
            console.log('pressed2');
        } else if (desc === 'Pintura') {
            navigation.navigate('IssueCreator', { desc });
            Alert.alert(
                'AVISO',
                'Debe estar registrado para continuar',
                [
                    {
                        text: 'Aceptar',
                        onPress: () => {
                            navigation.navigate('ProfileView');
                        },
                    },
                ],
                { cancelable: false },
            );
            console.log('pressed3');
        } else if (desc === 'Otros') {
            navigation.navigate('IssueCreator', { desc });
            Alert.alert(
                'AVISO',
                'Debe estar registrado para continuar',
                [
                    {
                        text: 'Aceptar',
                        onPress: () => {
                            navigation.navigate('ProfileView');
                        },
                    },
                ],
                { cancelable: false },
            );
            console.log(CategoryCard);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <View>
                        <TouchableOpacity onPress={this.onAddPressed}>
                            <View style={[styles.card, { width: this.state.imgWidth, height: this.state.imgHeight }]}>
                                <Image source={this.state.imgSrc} style={[styles.img, { width: this.state.imgWidth, height: this.state.imgHeight }]} />
                                <Text style={styles.text1}>
                                    {this.state.desc}
                                </Text>
                                <Text style={styles.text2}>
                                    {this.state.sub}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        marginLeft: 45,
    },
    card: {
        flex: 1,
        marginTop: 25,
        marginLeft: 1,
        marginBottom: 1,
        marginRight: 1,

    },
    img: {
        flex: 1,
        resizeMode: 'contain',
    },

    text1: {
        textAlign: 'center',
        color: 'black',
        fontSize: 16,
    },

    text2: {
        textAlign: 'center',
        color: 'gray',
        fontSize: 10,
    },
});
