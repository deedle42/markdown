import React from 'react';
import ReactMarkdown from 'react-markdown';

class Previewer extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <h6 className="preview-heading">Preview</h6>
                    <ReactMarkdown className="preview" source={this.props.input} />
                </div>
                <div className="col-2"></div>
            </div>
        )
    }
};

export default Previewer;