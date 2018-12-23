import _ from 'lodash';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
const API_KEY = 'AIzaSyDtLYGJMUWHALmYABXjUNIEgJJCiT8qCR4';

class App extends Component{
    constructor(props){
        super(props);
        this.state = { videos : [] , selectedVideo : null};
        this.videoSearch('sunnyleone');
    }

    videoSearch(term){
        //In react, flux or new frameworks dataflow is unidirectional, so basically 
        //top down approach where the highest component has the data and it is boiled down to the lowest component
        YTSearch({key: API_KEY, term : term}, (videos) => {
            this.setState({ videos, selectedVideo: videos[0] });
        });
    }

    
    render(){
        const videoSearch = _.debounce(term => this.videoSearch(term), 500);
        return (
            <div>
                <SearchBar 
                    onSearchTermChanged={videoSearch}  />
                
                <VideoDetail video={this.state.selectedVideo} />
                
                <VideoList 
                 onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) } 
                 videos = {this.state.videos} />
            </div>
        );
    }
}   


ReactDom.render(<App />, document.querySelector('.container'));