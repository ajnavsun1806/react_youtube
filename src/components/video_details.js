import React from 'react';

const VideoDetail = (props) => {
    if(!props.video){
        return <div>Loading...</div>;
;    }
    const videoId = props.video.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className='video-details col-md-8'>
            <div className='embed-responsive embed-responsive-16by9'>
                <iframe className="embed-responsive-item" src={videoUrl}></iframe>
            </div>
            <div className='details'>
                <div></div>
                <div></div>
            </div>
        </div>

    );
}

export default VideoDetail;
