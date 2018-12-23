import React, { Component} from 'react';
import PropTypes from 'prop-types';

class VideoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <li className='list-group-item' onClick={ () => this.props.onVideoSelect(this.props.video) }>
                <div className='video-item media'>
                    <div className='media-left'>
                        <img className='mediaObject' src={this.props.video.snippet.thumbnails.default.url} />
                    </div>
                    <div className='media-body'>
                        <div className='media-heading'>
                            {this.props.video.snippet.title}
                        </div>
                    </div>
                </div>

            </li>
        );
    }
}

export default VideoItem;
