import React, {Component} from 'react';
import {Button, Image, View} from 'react-native';
import {IndicatorViewPager, PagerDotIndicator} from 'rn-viewpager';

class Pager1 extends React.Component {
    render() {
        return (

            <View style={{flex: 1, marginTop: 30, justifyContent: 'center'}}>
                <IndicatorViewPager
                    style={{height: 400}}
                    indicator={this._renderDotIndicator()}>
                    <View
                        style={{
                            backgroundColor: '#C70039',
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Image
                            style={{width: 200, height: 200}}
                            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                        />
                    </View>
                    <View
                        style={{
                            backgroundColor: '#FF5733',
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Image
                            style={{width: 200, height: 200}}
                            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                        />
                    </View>
                    <View
                        style={{
                            backgroundColor: '#FFC300',
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Image
                            style={{width: 200, height: 200}}
                            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                        />
                    </View>
                </IndicatorViewPager>
                <Button title="Submit" onPress={() => this.props.navigation.navigate('Home')}/>
            </View>
        );
    }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3}/>;
    }
}
export default Pager1;