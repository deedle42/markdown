import React from 'react';

class Editor extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <h6 className="editor-heading">Editor</h6>
                    <textarea rows="12" cols="75" className="editor-input" onChange={this.props.changeInput} value={this.props.value}/>
                </div>
                <div className="col-3"></div>
            </div>
        )
    }
};

export default Editor;