import { createWrapper } from "next-redux-wrapper";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers";

//state + reducer = store
const configureStore = () => {
	const middlewares = [];
	const enhancer =
		process.env.NODE_ENV === "production"
			? compose(applyMiddleware(...middlewares))
			: composeWithDevTools(applyMiddleware(...middlewares));
	const store = createStore(reducer, enhancer);
	return store;
};
const wrapper = createWrapper(configureStore, {
	debug: process.env.NODE_ENV === "development",
});

export default wrapper;

// 규모가 어느정도 되는 프로젝트 > 저장소 필수
// redux, mobx, contextAPI, 아폴로
// redux는 에러가 나도 추적이 잘된다. 하지만 코드량이 늘어난다
// mobx는 코드량이 줄어서 좋지만 에러가 나면 추적이 상대적으로 어렵다.
// 비동기를 지원하기 쉽냐 아니냐 >> 서버에서 데이터를 가져온다 >> 비동기를 다룰때는 실패에 대비해야한다.
// contextAPI는 비동기 처리를 useEffect에서 처리해줘야하는데 이를 처리하다보면 redux, mobx와 형태가 비슷해진다. 그냥 redux, mobx 라이브러리 받아쓰는게 좋을듯?

//redux : reduce
