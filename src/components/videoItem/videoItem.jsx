import React from 'react';
import './videoItem.css';

// const VideoItem = (props) => (
// 	<li>
// 		<img src={props.video.snippet.thumbnails.medium.url} alt="video thumbnail" />
//     <div>
//       <p>{props.video.snippet.title}</p>
//       <p>{props.video.snippet.channelTitle}</p>
//     </div>
// 	</li>
// );

// export default VideoItem;

// -> deconstructing

const VideoItem = ({ video: { snippet } }) => (
	<li className="container">
		<div className="video">
			<img className="thumbnail" src={snippet.thumbnails.medium.url} alt="video thumbnail" />
			<div className="metadata">
				<p className="title">{snippet.title}</p>
				<p className="channel">{snippet.channelTitle}</p>
			</div>
		</div>
	</li>
);

export default VideoItem;
