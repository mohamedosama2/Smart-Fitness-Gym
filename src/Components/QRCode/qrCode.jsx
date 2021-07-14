import React, { useState } from 'react';
import style from './qrCode.module.css';
import QRCode from 'qrcode';

const QRcode = () => {

  const [text, setText] = useState('');
  const [imageSrc, setImageSrc] = useState('');



  const generateQRCode = async ()=> {
    try {
      const response = await QRCode.toDataURL(text);
      setImageSrc(response);
    } catch (e) {
      console.log(e);
    }
  }

  const defaultBtnActive = () => {
    const defaultBtn = document.getElementById("defaultBtn");
    defaultBtn.click();
  }

  const getVideoSrc = () => {
    const video = document.getElementById("video");
    const file = document.getElementById("defaultBtn").files[0];
    
    // console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onload =  ()=> {
        const result = reader.result;
        video.src = result;
        // video.setAttribute("controls","controls") 
      }
      reader.readAsDataURL(file);
    }
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
            <input type="file" id="defaultBtn" onChange={()=> getVideoSrc()} hidden/>
            <button id="customBtn" className={style.qr__btn} onClick={()=>defaultBtnActive()}>Add Video</button>
            
            <div className={style.qr__videoWrapper}>
                <span className={style.qr__cancelBtn} onClick={()=>cancelBtn()}>&times;</span>
                <video id="video" src="" controls></video>
            </div>

          </div>

          <div className={style.qr__right}>
            <div className={style.qr__imageWrapper}>
              {imageSrc ? (<img src={imageSrc} alt="QR-img"/>) : (<p className={style.qr__noImg}>NO QR YET !</p>)}
            </div>
            <button className={style.qr__print} onClick={() => generateQRCode()}>Create</button>
            <button className={style.qr__print} onClick={() => window.print()}>Print</button>
          </div>
          

        </div>
      </div>
    </React.Fragment>
  )
}

export default QRcode;
