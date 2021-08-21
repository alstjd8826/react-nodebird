import { useState, useCallback } from "react";

//컴포넌트에 props를 넘겨주는 함수는 useCallback을 써줘야 최적화된다.
//함수를 캐싱하는 것 > useCallback
//값을 캐싱하는 것 > useMemo
export default (initValue = null) => {
	const [value, setter] = useState(initValue);
	const handler = useCallback((e) => {
		setter(e.target.value);
	}, []);
	return [value, handler];
};
