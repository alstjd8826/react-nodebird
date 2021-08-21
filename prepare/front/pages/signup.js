import { useCallback, useState } from "react";
import Head from "next/head";
import { Form, Input, Checkbox, Button } from "antd";
import styled from "styled-components";

import useInput from "../hooks/useInput";
import AppLayout from "../components/AppLayout";

const ErrorMessage = styled.div`
	color: red;
`;

const Signup = () => {
	const [id, onChangeId] = useInput("");
	const [nickname, onChangeNickname] = useInput("");
	const [password, onChangePassword] = useInput("");
	const [passwordCheck, setPasswordCheck] = useState("");
	const [passwordError, setPasswordError] = useState(false);
	const onChangePasswordCheck = useCallback(
		(e) => {
			setPasswordCheck(e.target.value);
			setPasswordError(e.target.value !== password);
		},
		[password]
	);
	const [term, setTerm] = useState(false);
	const [termError, setTermError] = useState(false);
	const onChangeTerm = useCallback((e) => {
		setTerm(e.target.checked);
		setTermError(false);
	});

	const onsubmit = useCallback(() => {
		//onFinish에는 preventdefault가 설정되어있다. 따로 설정할 필요 없음
		//termError는 제출할 때 true가 된다.
		//한번더 체크
		if (password !== passwordCheck) {
			return setPasswordError(true);
		}
		if (!term) {
			return setTermError(true);
		}
		console.log(id, nickname, password);
	}, [password, passwordCheck, term]);
	return (
		<AppLayout>
			<Head>
				<title>회원가입 | NodeBird</title>
			</Head>
			<Form onFinish={onsubmit}>
				<div>
					<label htmlFor="user-id">아이디</label>
					<br />
					<Input name="user-id" value={id} required onChange={onChangeId} />
				</div>
				<div>
					<label htmlFor="user-nick">닉네임</label>
					<br />
					<Input
						name="user-nick"
						value={nickname}
						required
						onChange={onChangeNickname}
					/>
				</div>
				<div>
					<label htmlFor="user-password">비밀번호</label>
					<br />
					<Input
						name="user-password"
						value={password}
						required
						onChange={onChangePassword}
					/>
				</div>
				<div>
					<label htmlFor="user-password">비밀번호체크</label>
					<br />
					<Input
						name="user-password-check"
						value={passwordCheck}
						required
						onChange={onChangePasswordCheck}
					/>
					{passwordError && (
						<ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
					)}
				</div>
				<div>
					<Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
						좋은 말 할 때 약관동의합니다.
					</Checkbox>
				</div>
				{termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
				<div style={{ marginTop: 10 }}>
					<Button type="primary" htmlType="submit">
						가입하기
					</Button>
				</div>
			</Form>
		</AppLayout>
	);
};

export default Signup;
