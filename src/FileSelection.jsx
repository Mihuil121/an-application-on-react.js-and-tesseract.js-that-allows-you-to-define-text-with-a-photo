import React, { Component } from 'react'
import UploadSolid from './ghj.png'
import FileSelectioncss from './FileSelectioncss.css'
import copy from './copy.png'



export default class FileSelection extends Component {

  constructor(props) {
    super(props)

    this.state = {
      input: "",
      port: true,
      imageSrc: UploadSolid,
      teser: require('tesseract.js'),
      text: null,
      copy: null,
      loading: null,

    }
    this.donwload = this.donwload.bind(this);
    this.rend = this.rend.bind(this);
    this.copy = this.copy.bind(this);

  }

  componentDidMount() {
    this.rend();

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.imageSrc !== this.state.imageSrc) {
      this.rend();
    }

  }


  donwload(event) {

    let file = event.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = function () {
        this.setState({
          port: false,
          imageSrc: reader.result,
          copy: copy,
          text: "загрузка...",
        });
        this.rend();
      }.bind(this);
    } else {
      this.setState({ imageSrc: UploadSolid });
    }


  };
  rend() {

    this.state.teser.recognize(this.state.imageSrc, 'rus', {
      logger: e => {
        console.log(e);
      }
    })
      .then((out) => {
        this.setState({ text: out.data.text.replace(/\n/g, ' ').replace(/[^a-zA-Zа-яА-Я0-9 ]/g, '') });
        console.log('вот что я прочитал :', this.state.text);
      })
  };

  copy() {
    navigator.clipboard.writeText(this.state.text)
      .then(function () {
        console.log('скопировано');
      })
      .catch(function (error) {
        console.error('ошибка');
        console.error(error);
      });
  }

  render() {

    let textText = null;
    let text2 = null;
    let files = null;
    const cursore = {
      cursor: "pointer",
    };
    const x = 1;
    const y = 6.5 * 16
    if (this.state.text === null || this.state.text === " ") {
      files = {
        width: 5 * 16,
        display: "block",
        marginLeft: 13 * 16,
        marginRight: "auto",
        transform: `translate(${x}px, ${y}px )`,
        cursor: "pointer",
      };
      const self = this.state;
      (function () {
        if (self.port === false && (self.text === null || self.text === " " || self.text === "загрузка...")) {
          console.log("привет");
          const x = 1.5 * 16
          const y = 1 * 16
          files = {
            width: "90%",
            display: "block",
            transform: `translate(${x}px, ${y}px )`,
            cursor: "pointer",
            cursor: "pointer",
            filter: 'blur(5px)',
          };
        }

        else {
          console.log("gjrf");
        }

      })()
    }
    else {
      text2 = {
        borderRadius: 3 * 16,
        background: "white",
        position: 'static',
        top: 0,
        marginLeft: 5 * 16,
        border: '0.5px solid #000000',
      };

      textText = {
        textAlign: "center",

      };
      const x = 1.5 * 16
      const y = 1 * 16
      files = {
        width: "90%",
        display: "block",
        transform: `translate(${x}px, ${y}px )`,
        cursor: "pointer",
      };
    }


    return (
      <div>
        <div className='file-selection' style={FileSelectioncss}>
          <input type="file" name="myFile" id="myFile" style={{ display: 'none' }} onChange={this.donwload} />
          <label htmlFor="myFile">
            <img src={this.state.imageSrc} style={files} onClick={this.rend} />
            {this.state.loading}
          </label>
        </div>
        <div style={text2} >
          <p style={textText}>
            <img src={this.state.copy} onClick={this.copy} style={cursore} />
            {this.state.text}
          </p>
        </div>
      </div>

    )
  }
}
