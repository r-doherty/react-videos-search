import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyCCHr3cyKtDYlYNrLd-iwFCFMtblQfs6G0';

class App extends React.Component {
    
    onTermSubmit = term => {
        youtube.get("/search", {
            params: {
                q: term,
                part: "snippet",
                maxResults: 5,
                key: KEY
            }
        });
    }
    

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
        );
    }
}

export default App;