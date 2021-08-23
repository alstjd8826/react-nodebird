import React, { useState, useCallback, useMemo } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";
import propTypes from "prop-types";
import { useDispatch } from "react-redux";

import { loginAction } from "../reducers/user";
import useInput from "../hooks/useInput";

const ButtonWrapper = styled.div`
	margin-top: 10px;
`;

const FormWapper = styled(Form)`
	padding: 10px;
`;

const LoginForm = () => {
	const dispatch = useDispatch();
	const [id, onChangeId] = useInput("");
	const [password, onChangePassword] = useInput("");

	// 이걸 스타일에 적용 시켜도 리렌더링 안된다.
	const style = useMemo(() => ({ marginTop: 10 }), []);
	const onsubmitForm = useCallback(
		(e) => {
			// antd 에서는 이거 사용하면 안된다. onFinish에 자체 적용되어있다.
			// e.preventDefault()
			console.log(id, password);
			dispatch(loginAction({ id, password }));
		},
		[id, password]
	);
	return (
		<FormWapper onFinish={onsubmitForm}>
			<div>
				<label html="user-id">아이디</label>
				<br />
				<Input name="user-id" value={id} onChange={onChangeId} required />
			</div>
			<div>
				<label html="user-password">비밀번호</label>
				<br />
				<Input
					name="user-password"
					type="password"
					value={password}
					onChange={onChangePassword}
					required
				/>
			</div>
			{/* {}==={} false 이기 때문에 <div style={{ marginTop: 10 }}>이렇게 작성하면 리렌더링 된다. styled-component를 적용하면 이를 방지할 수 있다. */}
			<ButtonWrapper>
				<Button type="primary" htmlType="submit" loading={false}>
					로그인
				</Button>
				<Link href="/signup">
					<a>
						<Button>회원가입</Button>
					</a>
				</Link>
			</ButtonWrapper>
		</FormWapper>
	);
};

LoginForm.propTypes = { setIsLoggedIn: propTypes.func.isRequired };

export default LoginForm;
