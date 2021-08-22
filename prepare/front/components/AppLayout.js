import React, { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
// next에서 라우터의 역할을 한다.
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import styled from "styled-components";
// import "antd/dist/antd.css";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";

const SearchInput = styled(Input.Search)`
	vertical-align: middle;
`;
const AppLayout = ({ children }) => {
	// redux가 있어서 useState를 사용할일이 줄어든다.
	// const [isLoggedIn, setIsLoggedIn] = useState(false);

	const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
	return (
		<div>
			<Menu mode="horizontal">
				<Menu.Item>
					<Link href="/">노드버드</Link>
				</Menu.Item>
				<Menu.Item>
					<Link href="/profile">프로필</Link>
				</Menu.Item>
				<Menu.Item>
					<SearchInput enterButton />
				</Menu.Item>
				<Menu.Item>
					<Link href="/signup">회원가입</Link>
				</Menu.Item>
			</Menu>
			{/* xs:모바일, sm:태블릿, md:작은 데스크탑 24이면 100% 반응형 페이지 구현 완료 */}
			<Row gutter={8}>
				<Col xs={24} md={6}>
					{isLoggedIn ? (
						//더이상 이렇게 할 필요가 없다.
						// <UserProfile setIsLoggedIn={setIsLoggedIn} />
						<UserProfile />
					) : (
						// <LoginForm setIsLoggedIn={setIsLoggedIn} />
						<LoginForm />
					)}
				</Col>
				<Col xs={24} md={12}>
					{children}
				</Col>
				<Col xs={24} md={6}>
					{/* target='_blank' : 새창에서 띄우기 */}
					{/* rel="noreferrer noopener" 이거까지 적어줘야 보안위협이 사라진다. 누가 열고, 누가 참조했는지 못알아보게 하는듯?*/}
					<a
						href="https://velog.io/@alstjd8826"
						target="_blank"
						rel="noreferrer noopener"
					>
						Made by Misnung KIM
					</a>
				</Col>
			</Row>
		</div>
	);
};

AppLayout.prototype = {
	children: PropTypes.node.isRequired,
};

export default AppLayout;
