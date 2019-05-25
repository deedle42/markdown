import React from 'react';
import ReactMarkdown from 'react-markdown';

class Previewer extends React.Component {

    render() {
        return (
            <div id="preview">
                <ReactMarkdown source={this.props.input} />
            </div>
        )
    }
};

export default Previewer;