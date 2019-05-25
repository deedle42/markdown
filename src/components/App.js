import React from 'react';
import Editor from './Editor';
import Previewer from './Previewer';
import '../App.css';
import ReactMarkdown from 'react-markdown';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {input: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    };

    render() {
        return (
            <div>
                App
                <Editor changeInput={this.handleChange} input={this.state.input} value={this.state.input} />
                <Previewer input={this.state.input} />
            </div>
            
        )
    }
}

export default App;