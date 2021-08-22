//next 에선 react import 있어도 되고 없어도 되고
import React from "react";
import propTypes from "prop-types";
import "antd/dist/antd.css";
//모든 페이지에서 공통인 애들은 _app.js에서 관리 한다.
//일부만 공통인 애들은 layout에서 관리한다.
//head를 관리하기 위해서는 head를 불러와야한다.
import Head from "next/head";
import wrapper from "../store/configureStore";

const NodeBird = ({ Component }) => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>NodeBird</title>
			</Head>
			<Component />
		</>
	);
};

// 점검하면 앱이 안정된다.
NodeBird.propTypes = {
	Component: propTypes.elementType.isRequired,
};

export default wrapper.withRedux(NodeBird);
