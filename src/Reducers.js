/**
 * Created by liaoye on 2017/4/17.
 */
import * as types from './ActionTypes';

const initialState = {
    count: 0
};
//根据对应的Action从而改变状态并且返回对应的状态
export default function counter(state = initialState, action) {
    switch (action.type) {
        case types.INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case types.DECREMENT:
            if(state.count==0){
                return state;
            }
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state;
    }
}