import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import user from "./user";
import post from "./post";

//action >> 반복되는 액션이 많아지면 불편하다 > 액션 크리에이터를 만들면 편하다
// const changeNickname = {
// 	type: "CHANGE_NICKNAME",
// 	data: "zl존민성",
// };

// 리듀서는 (이전상태, 액션) => 다음상태를 만들어 내는 함수!
const rootReducer = combineReducers({
	//ssr을 위해서 hydrate 추가
	index: (state = {}, action) => {
		switch (action.type) {
			case HYDRATE:
				console.log("HYDRATE", action);
				return { ...state, ...action.payload };
			default:
				return state;
		}
	},
	user,
	post,
});

export default rootReducer;
