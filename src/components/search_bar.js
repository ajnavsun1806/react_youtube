import React, {Component} from 'react';
import { timingSafeEqual } from 'crypto';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        //State of the component. Most confusing concept of react
        //Once the state is changed React component will rerender itself
        //The change in state is done like this only in constructor and
        //setState method should be used to change the state of Component later on
        this.state = {term : ''};
    }

    render() {
        //To change the state always use setState method
        //this.state.term = '4' // Bad Code and the code wont work as the React component 
        //would never know the state is changed
        return (
            <div className='search-bar'>
                <input 
                    onChange={ event => this.onInputChange(event.target.value) } 
                    value={this.state.term} />
            </div>
            
        );
    } 

    onInputChange(term){
        this.setState({ term });
        this.props.onSearchTermChanged(term);
    }

}

//SearchBar.propTypes = {};

export default SearchBar;
