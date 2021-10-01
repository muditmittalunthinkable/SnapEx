import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import * as Animatable from 'react-native-animatable' 
import { connect } from 'react-redux'
import { initializeApp } from './login_actions'

class IntroPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentWillMount() {
        setTimeout(() => this.props.initializeApp(), 2000)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.authenticated) {
          this.props.navigation.navigate('WeLoggedIn')
        }
    }

    render() {
        const { 
          container,
          appName,
          image, 
          text 
        } = styles
        return (
            <View style={container}>
                    <Image
                        style={image}
                        source={require('./logo.png')}
                    />
                    <Text style={appName}>
                        SnapEx
                    </Text>
                    <Text>Hello World</Text>
                      <Text>Contact Us</Text>
                    <Animatable.Text
                        style={text}
                        duration={1500}
                        animation="rubberBand"
                        easing="linear"
                        iterationCount="infinite"
                    >
                        L.o.a.d.i.n.g...
                    </Animatable.Text>
                    <Text> {(this.props.authenticated) ? 'LOGGED IN' : 'NOT LOGGED IN'} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F0F0'
    },
    appName: {
      fontSize: 25,
      resizeMode: 'contain',
      color: '#000000'
    },
    image: {
        height: 110,
        resizeMode: 'contain'
    },
    text: {
        marginTop: 50,
        fontSize: 15,
        color: '#1A1A1A'
    },

    
panel: {
  margintop: 0,
  marginbottom: 0,
  fontsize: 16,
  color: 'inherit'
},
pageContent:  {
    marginbottom: 10
},

p: {
    fontfamily: 'Open Sans', 'sans-serif'
},
btn: {
    textshadow: 'none'
}    
    
})

const mapStateToProps = ({ auth }) => {
    return {
        authenticated: auth.isAuthenticated
    }
}

export default connect(mapStateToProps, { initializeApp })(IntroPage)
