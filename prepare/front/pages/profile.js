import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowerList from "../components/FollowerList";
import FollowingList from "../components/FollowingList";

const Profile = () => {
	const followerList = [
		{ nickname: "김민성" },
		{ nickname: "zl존간zl" },
		{ nickname: "노드버드" },
	];
	const followingList = [
		{ nickname: "김민성" },
		{ nickname: "zl존간zl" },
		{ nickname: "노드버드" },
	];
	return (
		<>
			<Head>
				<title>내 프로필 | NodeBird</title>
			</Head>
			<AppLayout>
				<NicknameEditForm />
				<FollowerList header="팔로잉 목록" data={followerList} />
				<FollowingList header="팔로워 목록" data={followingList} />
			</AppLayout>
		</>
	);
};

export default Profile;
