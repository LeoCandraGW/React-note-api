import React from 'react';
import PropTypes from 'prop-types';

class NoteCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      availableTitleLength: 50
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    if (event.target.value.length <= 50) {
      this.setState({
        title: event.target.value,
        availableTitleLength: 50 - event.target.value.length
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState({
      body: event.target.value,
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({
        title: '',
        body:''
    });
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <div className="input-title">
          <input
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
            maxLength={50}
          />
        </div>
        <p className="input-length">Sisa Karakter : {this.state.availableTitleLength}</p>
        <div className="input-catatan">
          <textarea
            placeholder="Catatan"
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
            rows="4"
          />
        </div>
        <button type="submit">Tambah Note</button>
      </form>
    );
  }
}

NoteCreate.propTypes = {
    addNote: PropTypes.func.isRequired, 
};

export default NoteCreate;
