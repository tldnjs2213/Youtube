import React from 'react';
import VideoItem from '../videoItem/videoItem';
import './videoList.css'

const VideoList = (props) => (
	<ul className="videos">
		{props.videos.map((video) => (
			<VideoItem key={video.id} video={video} />
		))}
	</ul>
);

export default VideoList;
