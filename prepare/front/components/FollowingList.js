import React from "react";
import PropTypes from "prop-types";
import { Card, Button, List } from "antd";
import { StopOutlined } from "@ant-design/icons";

const FollowingList = ({ header, data }) => {
	//객체들을 따로 빼서 넣어주어야한다 아니면 리렌더링 된다.
	return (
		<List
			style={{ marginTop: 20 }}
			grid={{ gutter: 4, xs: 2, md: 3 }}
			header={<div>{header}</div>}
			loadMore={
				<div style={{ textAlign: "center", margin: "18px 8" }}>
					<Button>더보기</Button>
				</div>
			}
			bordered
			dataSource={data}
			renderItem={(item) => (
				<List.Item style={{ marginTop: 28 }}>
					<Card actions={[<StopOutlined key="stop" />]}>
						<Card.Meta description={item.nickname} />
					</Card>
				</List.Item>
			)}
		/>
	);
};

FollowingList.propTypes = {
	header: PropTypes.string.isRequired,
	data: PropTypes.array.isRequired,
};

export default FollowingList;
