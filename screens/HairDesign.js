import React, {Component} from 'react';
import {Avatar, Card, Title, Paragraph} from 'react-native-paper';
import {Platform, Button, Image, ScrollView, StyleSheet, TextInput, Text, View} from 'react-native';
import {IndicatorViewPager, PagerDotIndicator} from "rn-viewpager";

export default class HairDesign extends Component {
    constructor() {
        super();
    }

    render() {

        switch (this.props.navigation.state.params.index) {
            case '0':
                return (
                    <View style={{flex: 0.8}}>
                        <Text style={{
                            fontSize: 30,
                            color: '#000',
                            alignItems: 'center'
                        }}>{this.props.navigation.state.params.item}</Text>

                        <View style={{flex: 1, justifyContent: 'center'}}>
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
                                        style={{width: 420, height: 400}}
                                        source={{uri: 'https://www.updatepedia.com/wp-content/uploads/2016/09/4c6fa04564cf12dd7f08e443ddb15edb.jpg'}}
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
                                        style={{width: 270, height: 450}}
                                        source={{uri: 'https://www.updatepedia.com/wp-content/uploads/2016/09/1fbe628fa317e53b9cb7148379940ee7.jpg'}}
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
                                        style={{width: 300, height: 400}}
                                        source={{uri: 'https://www.updatepedia.com/wp-content/uploads/2016/09/17cc940254ba0c1fcbe5cd2316d60989.jpg'}}
                                    />
                                </View>
                            </IndicatorViewPager>

                            <Button title="Submit" onPress={() => this.props.navigation.navigate('Home')}/>
                        </View>
                    </View>
                );
            case '1':
                return (
                    <View style={{flex: 0.8}}>
                        <Text style={{
                            fontSize: 30,
                            color: '#000',
                            alignItems: 'center'
                        }}>{this.props.navigation.state.params.item}</Text>

                        <View style={{flex: 1, justifyContent: 'center'}}>
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
                                        style={{width: 420, height: 400}}
                                        source={{uri: 'data:image/jpeg;base64,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'}}
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
                                        style={{width: 270, height: 450}}
                                        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYoVQDGDZKf5ZLAkjrdL8Dq2Ik58ZkeOoRYikZPw_siHlEI0pr'}}
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
                                        style={{width: 300, height: 400}}
                                        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF5JD3KZoQdGqi2z-7AOHCSPe1FjzIH5FwMrjAGO4weJdR0WW3'}}
                                    />
                                </View>
                            </IndicatorViewPager>

                            <Button title="Submit" onPress={() => this.props.navigation.navigate('Home')}/>
                        </View>
                    </View>
                );

            case '2':
                return (
                    <View style={{flex: 0.8}}>
                        <Text style={{
                            fontSize: 30,
                            color: '#000',
                            alignItems: 'center'
                        }}>{this.props.navigation.state.params.item}</Text>

                        <View style={{flex: 1, justifyContent: 'center'}}>
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
                                        style={{width: 420, height: 400}}
                                        source={{uri: 'https://media-api.xogrp.com/images/e58f5a20-4553-4364-bea8-87484ff2591a~rs_768.h'}}
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
                                        style={{width: 270, height: 450}}
                                        source={{uri: 'http://hairstylezz.com/wp-content/uploads/2016/07/Pretty-Braided-Crown-with-Flowers.jpg'}}
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
                                        style={{width: 300, height: 400}}
                                        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShmlIygivdtTCwGj90xSHP3Qes-6WbgYU1hii_-ssbAedB_8XN'}}
                                    />
                                </View>
                            </IndicatorViewPager>

                            <Button title="Submit" onPress={() => this.props.navigation.navigate('Home')}/>
                        </View>
                    </View>
                );

            case '3':
                return (
                    <View style={{flex: 0.8}}>
                        <Text style={{
                            fontSize: 30,
                            color: '#000',
                            alignItems: 'center'
                        }}>{this.props.navigation.state.params.item}</Text>

                        <View style={{flex: 1, justifyContent: 'center'}}>
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
                                        style={{width: 420, height: 400}}
                                        source={{uri: 'https://i.pinimg.com/236x/41/dd/ff/41ddff738b6a17a8625909a7bbb367ae--lotus-flowers-kelli-ohara.jpg'}}
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
                                        style={{width: 270, height: 450}}
                                        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOLuokfduN_RR0WZdaMwm0xN8jGp71g4Dwail4E00SF3ARO1U'}}
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
                                        style={{width: 300, height: 400}}
                                        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThHbPmR7LU8iAd3j8Y2Nud-foJH1gFTXBdFSg0tEfJPeoGlOdR'}}
                                    />
                                </View>
                            </IndicatorViewPager>

                            <Button title="Submit" onPress={() => this.props.navigation.navigate('Home')}/>
                        </View>
                    </View>
                );

            case '4':
                return (
                    <View style={{flex: 0.8}}>
                        <Text style={{
                            fontSize: 30,
                            color: '#000',
                            alignItems: 'center'
                        }}>{this.props.navigation.state.params.item}</Text>

                        <View style={{flex: 1, justifyContent: 'center'}}>
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
                                        style={{width: 420, height: 400}}
                                        source={{uri: 'https://i.pinimg.com/736x/d0/a3/54/d0a354fb82bb8090e668f2662d5fc58b--hairstyles-for-round-faces-hairstyles-.jpg'}}
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
                                        style={{width: 270, height: 450}}
                                        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7v5Xa15hZgenox5BjekaJiTZ0hKWkUUMMGdsxRDW9sT7-9mBF'}}
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
                                        style={{width: 300, height: 400}}
                                        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeim3dGov3_7-4JdTcHgGVziki5O0nyM5HV3OGWKgnoAP6S2Ib'}}
                                    />
                                </View>
                            </IndicatorViewPager>

                            <Button title="Submit" onPress={() => this.props.navigation.navigate('Home')}/>
                        </View>
                    </View>
                );

            case '5':
                return (
                    <View style={{flex: 0.8}}>
                        <Text style={{
                            fontSize: 30,
                            color: '#000',
                            alignItems: 'center'
                        }}>{this.props.navigation.state.params.item}</Text>

                        <View style={{flex: 1, justifyContent: 'center'}}>
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
                                        style={{width: 420, height: 400}}
                                        source={{uri: 'https://i.pinimg.com/originals/c0/ae/46/c0ae468f5987770797fc856203e18883.jpg'}}
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
                                        style={{width: 270, height: 450}}
                                        source={{uri: 'https://i.pinimg.com/originals/9f/5e/ae/9f5eaeb6bae45fdc9894180073f0ddab.jpg'}}
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
                                        style={{width: 300, height: 400}}
                                        source={{uri: 'https://i.pinimg.com/originals/75/eb/6b/75eb6b5aa5db3e326943d0c3c8fd8d76.jpg'}}
                                    />
                                </View>
                            </IndicatorViewPager>

                            <Button title="Submit" onPress={() => this.props.navigation.navigate('Home')}/>
                        </View>
                    </View>
                );

            case '6':
                return (
                    <View style={{flex: 0.8}}>
                        <Text style={{
                            fontSize: 30,
                            color: '#000',
                            alignItems: 'center'
                        }}>{this.props.navigation.state.params.item}</Text>

                        <View style={{flex: 1, justifyContent: 'center'}}>
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
                                        style={{width: 420, height: 400}}
                                        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Qgz0wliYBXtpYoGmwGTuklP5G6IhOW7c_DB64FOtwEU_jZSG'}}
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
                                        style={{width: 270, height: 450}}
                                        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeHeD_T4qTPeuYl3oDEryMj_uWqSIi6R9_JCSEs7dPtDY0jCeb'}}
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
                                        style={{width: 300, height: 400}}
                                        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdKNnoKYi9g_LA693BT2gPrPDfcP11WOauioD70ya0eJKjxWJl'}}
                                    />
                                </View>
                            </IndicatorViewPager>

                            <Button title="Submit" onPress={() => this.props.navigation.navigate('Home')}/>
                        </View>
                    </View>
                );

            case '7':
                return (
                    <View style={{flex: 0.8}}>
                        <Text style={{
                            fontSize: 30,
                            color: '#000',
                            alignItems: 'center'
                        }}>{this.props.navigation.state.params.item}</Text>

                        <View style={{flex: 1, justifyContent: 'center'}}>
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
                                        style={{width: 420, height: 400}}
                                        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ypKrlVV8SNkCJLSDPcbuprfnNegYQn_itR5kVOmSu6HQggMX'}}
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
                                        style={{width: 270, height: 450}}
                                        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQCckRP65ckS700v67S3oSvo1M3McSpYI3sGdIANref1GLPlXh'}}
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
                                        style={{width: 300, height: 400}}
                                        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD6-vaxHiYC7U-U5NCtusY83PVsdcwMluzbKV85PiI7W_Rz1ZG'}}
                                    />
                                </View>
                            </IndicatorViewPager>

                            <Button title="Submit" onPress={() => this.props.navigation.navigate('Home')}/>
                        </View>
                    </View>
                );

            case '8':
                return (
                    <View style={{flex: 0.8}}>
                        <Text style={{
                            fontSize: 30,
                            color: '#000',
                            alignItems: 'center'
                        }}>{this.props.navigation.state.params.item}</Text>

                        <View style={{flex: 1, justifyContent: 'center'}}>
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
                                        style={{width: 420, height: 400}}
                                        source={{uri: 'https://i.pinimg.com/236x/1b/fb/aa/1bfbaa580527da96b749234a19f6a14a--romantic-wedding-hairstyles-updo-wedding-hair-styles-for-bridesmaids-updo.jpg'}}
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
                                        style={{width: 270, height: 450}}
                                        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKH6sKaxbH9MRHoruj5LIzHYBIdgPT2I6Agc635gVb_kgDKyHi'}}
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
                                        style={{width: 300, height: 400}}
                                        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQmURAzJVe0F84e1sttmplLFwucnWDFR8Sb9lWbKMP3l08bEfXvQ'}}
                                    />
                                </View>
                            </IndicatorViewPager>

                            <Button title="Submit" onPress={() => this.props.navigation.navigate('Home')}/>
                        </View>
                    </View>
                );

            case '9':
                return (
                    <View style={{flex: 0.8}}>
                        <Text style={{
                            fontSize: 30,
                            color: '#000',
                            alignItems: 'center'
                        }}>{this.props.navigation.state.params.item}</Text>

                        <View style={{flex: 1, justifyContent: 'center'}}>
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
                                        style={{width: 420, height: 400}}
                                        source={{uri: 'https://www.updatepedia.com/wp-content/uploads/2016/09/4c6fa04564cf12dd7f08e443ddb15edb.jpg'}}
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
                                        style={{width: 270, height: 450}}
                                        source={{uri: 'https://www.updatepedia.com/wp-content/uploads/2016/09/1fbe628fa317e53b9cb7148379940ee7.jpg'}}
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
                                        style={{width: 300, height: 400}}
                                        source={{uri: 'https://www.updatepedia.com/wp-content/uploads/2016/09/17cc940254ba0c1fcbe5cd2316d60989.jpg'}}
                                    />
                                </View>
                            </IndicatorViewPager>

                            <Button title="Submit" onPress={() => this.props.navigation.navigate('Home')}/>
                        </View>
                    </View>
                );

            case '10':
                return (
                    <View style={{flex: 0.8}}>
                        <Text style={{
                            fontSize: 30,
                            color: '#000',
                            alignItems: 'center'
                        }}>{this.props.navigation.state.params.item}</Text>

                        <View style={{flex: 1, justifyContent: 'center'}}>
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
                                        style={{width: 420, height: 400}}
                                        source={{uri: 'https://www.updatepedia.com/wp-content/uploads/2016/09/4c6fa04564cf12dd7f08e443ddb15edb.jpg'}}
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
                                        style={{width: 270, height: 450}}
                                        source={{uri: 'https://www.updatepedia.com/wp-content/uploads/2016/09/1fbe628fa317e53b9cb7148379940ee7.jpg'}}
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
                                        style={{width: 300, height: 400}}
                                        source={{uri: 'https://www.updatepedia.com/wp-content/uploads/2016/09/17cc940254ba0c1fcbe5cd2316d60989.jpg'}}
                                    />
                                </View>
                            </IndicatorViewPager>

                            <Button title="Submit" onPress={() => this.props.navigation.navigate('Home')}/>
                        </View>
                    </View>
                );

            default:
                return (
                    <View style={{fontSize: 30}}>
                        <Text>Null</Text>
                    </View>
                );
        }
    }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3}/>;
    }
}