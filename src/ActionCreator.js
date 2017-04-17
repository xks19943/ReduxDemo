/**
 * Created by liaoye on 2017/4/17.
 */

//Action的创建函数，不做数据处理，根据对应的类型创建对应的action对象。生产action但不分发
import * as types from './ActionTypes';

export function increment() {
    return {
        type: types.INCREMENT
    };
}

export function decrement() {
    return {
        type: types.DECREMENT
    };
}