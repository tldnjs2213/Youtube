import React, { useState, useEffect } from 'react';
import './app.css';
import VideoList from './components/videoList/videoList';

function App() {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		const requestOptions = {
			method: 'GET',
			redirect: 'follow',
		}; // fetch를 할 때, request를 할 때 옵션을 전달

		fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyANNd1kZDf-g4wZMyRRUM5zGLCsTExJDQo', requestOptions)
			.then((response) => response.json()) // 받아온 데이터를 작업하기 편하게 하려면 text보다 json
			.then((result) => setVideos(result.items))
			.catch((error) => console.log('error', error));
	}, []);
	// 마운트가 되었을 때 데이터를 받아올 때, 마운트가 되었거나 업데이트가 될 때 쓸 수 있는 우리가 콜백을 등록할 수 있는 게 useEffect
	// 컴포넌트가 마운트가 되었거나 업데이트 될 때마다 호출

	// 컴포넌트가 업데이트 될 때마다 다시 네트워크 통신을 하는 것은 좋지 않다. -> 두 번째 인자에 공배열([])을 전달하면 마운트가 되었을 때 한번만 호출된다.
	// videos가 바뀔 때마다 호출이 되었으면 할 때 두 번째 인자에 [videos]만 전달하면 된다.
	return <VideoList videos={videos} />;
}

export default App;
