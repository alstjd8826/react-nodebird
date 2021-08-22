import { HYDRATE } from "next-redux-wrapper";

const initialState = {
	user: { isLoggedIn: false, user: null, signUpData: {}, loginData: {} },
	post: { mainPosts: [] },
};

//action >> 반복되는 액션이 많아지면 불편하다 > 액션 크리에이터를 만들면 편하다
// const changeNickname = {
// 	type: "CHANGE_NICKNAME",
// 	data: "zl존민성",
// };

//action creator
export const loginAction = (data) => {
	return { type: "LOG_IN", data };
};

export const logOutAction = () => {
	return { type: "LOG_OUT" };
};

const changeNickname = (data) => {
	return { type: "CHANGE_NICKNAME", data };
};

// 리듀서는 (이전상태, 액션) => 다음상태를 만들어 내는 함수!
const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "HYDRATE":
			console.log("HYDRATE", action);
			return { ...state, ...action.payload };
		case "LOG_IN":
			return {
				...state,
				user: {
					...state.user,
					isLoggedIn: true,
					user: action.data,
				},
			};
		case "LOG_OUT":
			return {
				...state,
				user: { ...state.user, isLoggedIn: false, user: null },
			};
		default:
			return state;
	}
};

export default rootReducer;
