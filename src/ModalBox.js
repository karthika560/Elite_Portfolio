import {React,useState} from 'react'
import './ModalBox.css'
import image from'./appricot img1.jpeg'

function ModalBox() {
    const[Modal,setModal]=useState(false)
  
  
    {/*<div className='text'>ModalBox</div>*/}
    {/* {Modal ?
    <div className='modal'>
    <span>Are you sure, do you want to continue?</span><br/><br/>
    <button className='ok' onClick={()=>setModal(false)}>ok</button>{/*for opening the user input */}
{/*</div>:""
}*/}
    {/*<button className='confirm' onClick={()=>setModal(true)}>confirm</button>{/*it won't open or close again only open*/}
    return(
        <>
        <div className="mainPage">

        <div className="text">
          ModalBox
        </div>

        <button
          className="confirm"
          onClick={() => setModal(true)}
        >
          Confirm
        </button>

      </div>

{Modal &&(<div className='overlay'>
<div className='popup'>
    <button className='xButton' onClick={() => setModal(false)}>x</button>
    <img  className='img'src={image} alt="secure device"/>
    <h1>Secure all your devices</h1>
    <p>Ensure your,mobile phone,laptop and other<br/>
    devics are protected online</p>
    <button className='premium'>Purchase premium</button>
    </div>
</div>
)}
    </>
  )
}

export default ModalBox