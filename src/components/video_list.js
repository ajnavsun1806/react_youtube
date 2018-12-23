import React, { Component } from 'react';
import VideoListItem from './video_list_item';

// const VideoList = (props) => {
//     return (
//         <ul className = 'col-md-4 list-group'>
//             {props.videos.length}
//         </ul>
//     );
// }
class VideoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className = 'col-md-4 list-group'>
                {this.props.videos.map((video) =>{
                    return <VideoListItem 
                        key={video.etag} 
                        onVideoSelect={this.props.onVideoSelect}
                        video={video} />;
                }) }
            </ul>
        );
    }
}

export default VideoList;
