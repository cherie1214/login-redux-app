import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { requestLogin, requestLogout } from '../actions';

class Home extends Component { 
	
	render() {
		return (
			<View style={styles.container}>
					<Text>{this.props.status}</Text>
					<TouchableOpacity
						onPressOut={this.props.requestLogin}>                  
						<Text style={{color:'blue'}}>LOGIN</Text>
					</TouchableOpacity>
					<TouchableOpacity 
						onPressOut={this.props.requestLogout}>
						<Text style={{color:'red'}}>LOGOUT</Text>
					</TouchableOpacity>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        status: state.auth.login.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestLogin: () => { 
            return dispatch(requestLogin()); 
        },
        requestLogout: () => { 
            return dispatch(requestLogout()); 
        }
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);