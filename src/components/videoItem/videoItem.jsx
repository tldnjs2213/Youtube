import React from 'react';
import styles from './videoItem.module.css';

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
	<li className={styles.container}>
		<div className={styles.video}>
			<img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt="video thumbnail" />
			<div className={styles.metadata}>
				<p className={styles.title}>{snippet.title}</p>
				<p className={styles.channel}>{snippet.channelTitle}</p>
			</div>
		</div>
	</li>
);

export default VideoItem;
