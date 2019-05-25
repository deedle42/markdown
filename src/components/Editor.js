import React from 'react';

class Editor extends React.Component {

    render() {
        return (
            <div>
                <textarea rows="20" cols="100" className="editor-input" onChange={this.props.changeInput} />
            </div>
        )
    }
};

export default Editor;