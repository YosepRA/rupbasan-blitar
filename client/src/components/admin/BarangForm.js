import React, { Component, createRef } from 'react';
import { DataTypes } from '../data/Types';
import { RestDataSource } from '../data/RestDataSource';
import { Urls } from '../data/Urls';
import { HTMLHead } from '../HTMLHead';
import { ImagePreview } from './ImagePreview';
import format from 'date-format';
import { generateRandomID } from '../../helpers';
import { ValidationMessages } from '../form/ValidationMessages';
import { validate } from '../form/validation';

const dataSource = new RestDataSource();

export class BarangForm extends Component {
  constructor(props) {
    super(props);
    // Main identifier for edit mode.
    this.isEdit = props.mode === 'edit';
    // State for create.
    this.state = {
      formData: {
        nama: '',
        tindakPidana: '',
        nomorRegister: '',
        tanggalRegister: '',
        instansi: '',
        jumlah: '',
        satuan: '',
        klasifikasi: '',
        golongan: '',
        kondisi: '',
      },
      imageFiles: [],
      imagePreviews: [],
      dataFetchCounter: 0,
      formFieldError: {},
    };
    this.fileInput = createRef();
    this.rules = {
      nama: { required: true },
      tindakPidana: { required: true },
      nomorRegister: { required: true },
      tanggalRegister: { required: true },
      instansi: { required: true },
      jumlah: { required: true },
      satuan: { required: true },
      klasifikasi: { required: true },
      golongan: { required: true },
      kondisi: { required: true },
    };
  }

  fileToDataURL(file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.addEventListener('load', event => resolve(event.target.result));
      reader.readAsDataURL(file);
    });
  }

  handleChange = ({ target: { name, value } }) =>
    this.setState(state => {
      return {
        formData: {
          ...state.formData,
          [name]: value,
        },
      };
    });

  handleFileChange = async event => {
    event.persist();
    const {
      target: { files },
    } = event;

    let imageURLs = [];
    for (const file of files) {
      let id = await generateRandomID(8);

      file.id = id;
      imageURLs.push({
        id,
        name: file.name,
        url: await this.fileToDataURL(file),
      });
    }
    // Add more into the image array.
    this.setState({
      imageFiles: [...this.state.imageFiles, ...files],
      imagePreviews: [...this.state.imagePreviews, ...imageURLs],
    });
  };

  handleFilePrompt = event => {
    event.preventDefault();
    event.stopPropagation();
    this.fileInput.current.click();
  };

  handleRemoveImage = id =>
    this.setState({
      imageFiles: this.state.imageFiles.filter(image => image.id !== id),
      imagePreviews: this.state.imagePreviews.filter(image => image.id !== id),
    });

  handleCancel = () => this.props.history.push('/admin/barang/1');

  handleFormSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
  };

  handleSubmit = () => {
    let formFieldError = validate(this.state.formData, this.rules);
    this.setState({ formFieldError }, () => {
      if (Object.keys(this.state.formFieldError).length === 0) {
        let form = new FormData();
        for (const [field, value] of Object.entries(this.state.formData)) {
          form.append(field, value);
        }
        for (const image of this.state.imageFiles) {
          form.append('gambar', image);
        }
        // If it's an edit mode, then add old images that will still be in the next data update so that the ~
        // ~ server will only delete the removed old images from Cloudinary.
        if (this.isEdit) {
          // What we need is Cloudinary assets, and not new one generated in DataURL format.
          let cloudinaryData = this.state.imagePreviews.filter(img =>
            img.url.startsWith(
              'https://res.cloudinary.com/rupbasan-blitar/image/upload'
            )
          );
          if (cloudinaryData.length === 0) {
            form.append('oldGambar', JSON.stringify([]));
          } else {
            form.append('oldGambar', JSON.stringify(cloudinaryData));
          }
        }

        let method = this.isEdit ? 'put' : 'post';
        let url = `${Urls[DataTypes.BARANG]}${
          this.isEdit ? '/' + this.props.barangDetail._id : ''
        }`;
        dataSource.sendRequest(method, url, {}, form).then(() => {
          this.props.history.push('/admin/barang/1');
          // Force data refresh.
          this.props.loadData(
            DataTypes.BARANG,
            this.props[`${DataTypes.BARANG}__params`]
          );
          this.props.getFilters();
        });
        this.props.setLoadingState(true);
      }
    });
  };

  render() {
    return (
      <main className="main-container container">
        <HTMLHead title="Buat Barang Baru | Rumah Penyimpanan Benda Sitaan Negara Kelas II Blitar" />
        <header className="page-title">
          <h1>
            {this.isEdit
              ? `Ubah data barang "${this.state.formData.nama}"`
              : 'Buat Barang Baru'}
          </h1>
        </header>

        <div className="row justify-content-center">
          <div className="form col-12 col-md-8">
            {/* <form onSubmit={this.handleFormSubmit}> */}
            <div className="form-group form__nama">
              <label htmlFor="nama" className="form__label">
                Nama barang
              </label>
              <input
                type="text"
                name="nama"
                id="nama"
                className="form-control form__input form__input--text form__input__nama"
                value={this.state.formData.nama}
                onChange={this.handleChange}
                placeholder="Motor Honda AG-2080-QJ"
              />

              <ValidationMessages errors={this.state.formFieldError.nama} />
            </div>
            <div className="form-group form__tindak-pidana">
              <label htmlFor="tindak-pidana" className="form__label">
                Jenis tindak pidana
              </label>
              <input
                type="text"
                name="tindakPidana"
                id="tindak-pidana"
                className="form-control form__input form__input--text form__input__tindak-pidana"
                value={this.state.formData.tindakPidana}
                onChange={this.handleChange}
                placeholder="Umum"
              />

              <ValidationMessages
                errors={this.state.formFieldError.tindakPidana}
              />
            </div>
            <div className="form-group form__nomor-register">
              <label htmlFor="nomor-register" className="form__label">
                Nomor register
              </label>
              <input
                type="text"
                name="nomorRegister"
                id="nomor-register"
                className="form-control form__input form__input--text form__input__nomor-register"
                value={this.state.formData.nomorRegister}
                onChange={this.handleChange}
                placeholder="RBB.2/262/V/2006"
              />

              <ValidationMessages
                errors={this.state.formFieldError.nomorRegister}
              />
            </div>
            <div className="form-group form__tanggal-register">
              <label htmlFor="tanggal-register" className="form__label">
                Tanggal register
              </label>
              <input
                type="date"
                name="tanggalRegister"
                id="tanggal-register"
                className="form-control form__input form__input--date form__input__tanggal-register"
                value={this.state.formData.tanggalRegister}
                onChange={this.handleChange}
              />

              <ValidationMessages
                errors={this.state.formFieldError.tanggalRegister}
              />
            </div>
            <div className="form-group form__instansi">
              <label htmlFor="instansi" className="form__label">
                Instansi
              </label>
              <input
                type="text"
                name="instansi"
                id="instansi"
                className="form-control form__input form__input--text form__input__instansi"
                value={this.state.formData.instansi}
                onChange={this.handleChange}
                placeholder="Polres Blitar"
              />

              <ValidationMessages errors={this.state.formFieldError.instansi} />
            </div>
            <div className="form-group form__jumlah">
              <label htmlFor="jumlah" className="form__label">
                Jumlah
              </label>
              <input
                type="text"
                name="jumlah"
                id="jumlah"
                className="form-control form__input form__input--text form__input__jumlah"
                value={this.state.formData.jumlah}
                onChange={this.handleChange}
                placeholder="1"
              />

              <ValidationMessages errors={this.state.formFieldError.jumlah} />
            </div>
            <div className="form-group form__satuan">
              <label htmlFor="satuan" className="form__label">
                Satuan
              </label>
              <input
                type="text"
                name="satuan"
                id="satuan"
                className="form-control form__input form__input--text form__input__satuan"
                value={this.state.formData.satuan}
                onChange={this.handleChange}
                placeholder="Buah"
              />

              <ValidationMessages errors={this.state.formFieldError.satuan} />
            </div>
            <div className="form-group form__klasifikasi">
              <label htmlFor="klasifikasi" className="form__label">
                Klasifikasi
              </label>
              <input
                type="text"
                name="klasifikasi"
                id="klasifikasi"
                className="form-control form__input form__input--text form__input__klasifikasi"
                value={this.state.formData.klasifikasi}
                onChange={this.handleChange}
                placeholder="Umum"
              />

              <ValidationMessages
                errors={this.state.formFieldError.klasifikasi}
              />
            </div>
            <div className="form-group form__golongan">
              <label htmlFor="golongan" className="form__label">
                Golongan
              </label>
              <input
                type="text"
                name="golongan"
                id="golongan"
                className="form-control form__input form__input--text form__input__golongan"
                value={this.state.formData.golongan}
                onChange={this.handleChange}
                placeholder="KBM"
              />

              <ValidationMessages errors={this.state.formFieldError.golongan} />
            </div>
            <div className="form-group form__kondisi">
              <label htmlFor="kondisi" className="form__label">
                Kondisi
              </label>
              <input
                type="text"
                name="kondisi"
                id="kondisi"
                className="form-control form__input form__input--text form__input__kondisi"
                value={this.state.formData.kondisi}
                onChange={this.handleChange}
                placeholder="Baik"
              />

              <ValidationMessages errors={this.state.formFieldError.kondisi} />
            </div>
            <div className="form-group form__gambar">
              <label htmlFor="gambar" className="form__label">
                Gambar
              </label>
              <button
                className="btn btn-light form__file-prompt-btn"
                title="Masukkan gambar"
                onClick={this.handleFilePrompt}
              >
                <i className="far fa-image"></i>
              </button>
              <input
                type="file"
                name="gambar"
                id="gambar"
                className="form-control-file form__input form__input--file form__input__gambar"
                accept="image/*"
                multiple
                onChange={this.handleFileChange}
                ref={this.fileInput}
              />
              <div className="form__image-previews row">
                {this.state.imagePreviews.map(image => (
                  <ImagePreview
                    key={image.id}
                    image={image}
                    handleRemoveImage={this.handleRemoveImage}
                  />
                ))}
              </div>
            </div>

            <div className="form-group form__controls">
              <button
                className="btn btn-default form__submit-btn"
                onClick={this.handleSubmit}
              >
                {this.isEdit ? 'Ubah' : 'Buat'}
              </button>
              <button
                className="btn btn-default form__cancel-btn"
                onClick={this.handleCancel}
              >
                Batalkan
              </button>
            </div>
            {/* </form> */}
          </div>
        </div>
      </main>
    );
  }

  static getDerivedStateFromProps(props, state) {
    if (
      props.mode === 'edit' &&
      props.barangDetail &&
      state.dataFetchCounter === 0
    ) {
      const {
        _id,
        nama,
        tindakPidana,
        nomorRegister,
        tanggalRegister,
        instansi,
        jumlah,
        satuan,
        klasifikasi,
        golongan,
        kondisi,
        gambar,
      } = props.barangDetail;

      return {
        formData: {
          id: _id,
          nama,
          tindakPidana,
          nomorRegister,
          tanggalRegister: format('yyyy-MM-dd', new Date(tanggalRegister)),
          instansi,
          jumlah,
          satuan,
          klasifikasi,
          golongan,
          kondisi,
        },
        imageFiles: [],
        imagePreviews: gambar.map(({ _id, public_id, url }) => ({
          id: _id,
          name: public_id,
          url,
        })),
        dataFetchCounter: state.dataFetchCounter + 1,
      };
    } else {
      return state;
    }
  }

  componentDidMount() {
    document.body.classList.add('page-barang-form');

    // Getting barang details if form's mode is on "edit".
    if (this.props.mode === 'edit') {
      const { id } = this.props.match.params;
      this.props.getBarangDetail(id);
    }
  }

  componentWillUnmount() {
    document.body.classList.remove('page-barang-form');
    this.props.resetParameters();
  }
}
