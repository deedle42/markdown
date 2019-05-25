import React from 'react';
import Editor from './Editor';
import Previewer from './Previewer';
import '../App.css';

class App extends React.Component{
    constructor(props) {
        super(props);
        const placeholder = 
        `# Welcome to my React Markdown Previewer!`
        this.state = {input: `${placeholder}`};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    };

    render() {
        return (
            <div className="container">
                <Editor changeInput={this.handleChange} input={this.state.input} value={this.state.input} />
                <Previewer input={this.state.input} />
            </div>
            
        )
    }
}

export default App;