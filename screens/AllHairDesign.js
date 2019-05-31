import React from 'react';
import {
    Button,
    TouchableWithoutFeedback,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    Text,
    View,
    Alert,
    Platform,
    TouchableOpacity
} from 'react-native';
import {Card} from 'react-native-paper';

export default class AllHairDesign extends React.Component {

    constructor(props) {
        super(props);
    }

    GetItem(item,index) {
        this.props.navigation.navigate('HairDesign', {item,index})
    }

    render() {
        return (

            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'Hair Style #1'},
                        {key: 'Hair Style #2'},
                        {key: 'Hair Style #3'},
                        {key: 'Hair Style #4'},
                        {key: 'Hair Style #5'},
                        {key: 'Hair Style #6'},
                        {key: 'Hair Style #7'},
                        {key: 'Hair Style #8'},
                        {key: 'Hair Style #9'},
                        {key: 'Hair Style #10'},
                    ]}
                    renderItem={({item,index}) => (
                        <TouchableWithoutFeedback
                            onPress={() => this.GetItem(item.key.toString(),index.toString())}>
                            <Card style={{marginBottom: 2, elevation: 10, backgroundColor: '#2AC062'}}>
                                <Card.Content>
                                    <Text
                                        style={styles.textViewContainer}>
                                        {item.key}
                                    </Text>
                                </Card.Content>
                            </Card>
                        </TouchableWithoutFeedback>)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        // Setting up View inside content in Vertically center.
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#EC4040',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0,
        padding: 2,

    },

    textViewContainer: {
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: 20,
        color: '#FFFFFF',
    }
});