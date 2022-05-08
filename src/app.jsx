import React, { useState, useEffect } from 'react';
import './app.css';
import SearchHeader from './components/searchHeader/searchHeader';
import VideoList from './components/videoList/videoList';

function App({ youtube }) {
	const [videos, setVideos] = useState([]);
	const search = (query) => {
		youtube
			.search(query) //
			.then((videos) => setVideos(videos));
	};

	useEffect(() => {
		youtube
			.mostPopular() //
			.then((videos) => setVideos(videos));
	}, []);
	// 마운트가 되었을 때 데이터를 받아올 때, 마운트가 되었거나 업데이트가 될 때 쓸 수 있는 우리가 콜백을 등록할 수 있는 게 useEffect
	// 컴포넌트가 마운트가 되었거나 업데이트 될 때마다 호출

	// 컴포넌트가 업데이트 될 때마다 다시 네트워크 통신을 하는 것은 좋지 않다. -> 두 번째 인자에 공배열([])을 전달하면 마운트가 되었을 때 한번만 호출된다.
	// videos가 바뀔 때마다 호출이 되었으면 할 때 두 번째 인자에 [videos]만 전달하면 된다.
	return (
		<div className="app">
			<SearchHeader onSearch={search} />
			<VideoList videos={videos} />
		</div>
	);
}

export default App;
