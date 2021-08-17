import PropTypes from "prop-types";
// next에서 라우터의 역할을 한다.
import Link from "next/link";

const AppLayout = ({ children }) => {
	return (
		<div>
			<div>
				<Link href="/">노드버드</Link>
				<Link href="/profile">프로필</Link>
				<Link href="/signup">회원가입</Link>
			</div>
			{children}
		</div>
	);
};

AppLayout.prototype = {
	children: PropTypes.node.isRequired,
};

export default AppLayout;
