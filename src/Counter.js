/**
 * Created by liaoye on 2017/4/14.
 */
import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreator from './ActionCreator';


class Counter extends Component{
    render(){
        const {state,actions} = this.props;
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{state.count}</Text>
                <TouchableOpacity onPress={actions.increment} style={styles.button}>
                    <Text>up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={actions.decrement} style={styles.button}>
                    <Text>down</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

//读取status
const readStatus = state => ({
    state:{
        count:state.count
    }
});

//使用 dispatch 把每个 action creator 包围起来，这样可以直接调用它们
const dispatchAction = (dispatch) => ({
    actions:bindActionCreators(ActionCreator,dispatch)
});

//任何一个从 connect() 包装好的组件都可以得到一个 dispatch 方法作为组件的 props，以及得到全局 state 中所需的任何内容
export default connect(
    readStatus,
    dispatchAction
)(Counter);




const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 30,
        padding: 10,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3
    }
});
