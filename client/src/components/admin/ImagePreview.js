import React, { Component } from 'react';

export class ImagePreview extends Component {
  render() {
    const {
      image: { id, name, url },
      handleRemoveImage,
    } = this.props;

    return (
      <div className="form__image-preview-container col-6 col-lg-4">
        <img src={url} alt={name} className="form__image-preview" />
        <button
          className="btn btn-danger btn-sm form__image-remove-btn"
          onClick={() => handleRemoveImage(id)}
          title="Hapus gambar"
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    );
  }
}
