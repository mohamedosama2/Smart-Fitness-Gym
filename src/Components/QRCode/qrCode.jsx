import React, { useState, useEffect } from 'react';
import style from './qrCode.module.css';
import QRCode from 'qrcode';
import axios from 'axios';
import { ContactSupportOutlined } from '@material-ui/icons';

const QRcode = () => {

  const [text, setText] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [imageId, setImageId] = useState('');
  const [videoSrc, setVideoSrc] = useState('');
  const [QrURL, setQrURL] = useState('');


  const generateQRCode = async ()=> {
    try {
      
      const response = await QRCode.toDataURL(QrURL);
      const img = document.getElementById('img');

      img.src = response;
    

      console.log(img.src)
      console.log(imageId)

      const _form = new FormData()
      _form.append('id',imageId)
      _form.append('image',imageSrc)
      axios.post(`/add-video-qr`, _form)
        .then((res) => {
          console.log(res);
        }).catch((err) => {
          console.error(err);
        })

    } catch (e) {
      console.log(e);
    }
  }

  const defaultBtnActive = () => {
    const defaultBtn = document.getElementById("defaultBtn");
    defaultBtn.click();
  }

  const getVideoSrc = () => {

    const videoEl = document.getElementById("video");
    const file = document.getElementById("defaultBtn").files[0];
    

    if (file) {
      const reader = new FileReader();
      reader.onload =  ()=> {
        const result = reader.result;
        videoEl.src = result;
      }
      reader.readAsDataURL(file);   
    }

    const form = new FormData()
    form.append('title',text)
    form.append('video',videoSrc)
    axios.post(`/add-video-qr`, form)
      .then((res) => {
        console.log(res.data.video);
        setQrURL(res.data.video)
        setImageId(res.data.id)
      }).catch((err) => {
        console.error(err);
      })
    
  }

  const cancelBtn = () => {
    const video = document.getElementById("video");
    video.src = "";
  }


  return (
    <React.Fragment>
      <div className="container">
        <div className={style.qrCode}>
          <div className={style.qr__left}>

          <h2 className={style.qr__title}>Create QR-Code</h2>
            <input type="text" placeholder="video name" className={style.qr__inputName} onChange={(e)=> setText(e.target.value) }/>
            <input type="text" placeholder="description" className={style.qr__inputDescription} />
            <input type="file" id="defaultBtn" onChange={(e) => setVideoSrc(e.target.files[0])} onClick={()=>getVideoSrc()} hidden/>
            <button id="customBtn" className={style.qr__btn} onClick={()=>defaultBtnActive()}>Add Video</button>
            
            <div className={style.qr__videoWrapper}>
                <span className={style.qr__cancelBtn} onClick={()=>cancelBtn()}>&times;</span>
                <video id="video" src="" controls></video>
            </div>

          </div>

          <div className={style.qr__right}>
            <div className={style.qr__imageWrapper}>
              <img id="img" src="" alt="QR-img" />
            </div>
            <button className={style.qr__print} onClick={() => generateQRCode()} onChange={(e)=>setImageSrc(e.target.files[0])}>Create</button>
            <button className={style.qr__print} onClick={() => window.print()}>Print</button>
          </div>
          

        </div>
      </div>
    </React.Fragment>
  )
}

export default QRcode;
