// src/store/mutation-types.js

// 增加总时间或者减少总时间
export const ADD_TOTAL_TIME = 'ADD_TOTAL_TIME';
export const DEC_TOTAL_TIME = 'DEC_TOTAL_TIME';

// 新增和删除一条计划
export const SAVE_PLAN = 'SAVE_PLAN';
export const DELETE_PLAN = 'DELETE_PLAN';
// src/store/mutations.js
import * as types from './mutation-types'

export default {
    // 增加总时间
  [types.ADD_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime + time
  },
  // 减少总时间
  [types.DEC_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime - time
  },
  // 新增计划
  [types.SAVE_PLAN] (state, plan) {
    // 设置默认值，未来我们可以做登入直接读取昵称和头像
    const avatar = 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256';

    state.list.push(
      Object.assign({ name: '二哲', avatar: avatar }, plan)
    )
  },
  // 删除某计划
  [types.DELETE_PLAN] (state, idx) {
    state.list.splice(idx, 1);
  }
};
