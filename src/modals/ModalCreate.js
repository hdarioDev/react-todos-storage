import React from 'react';
import ReactDOM from 'react-dom'
import '../assets/css/myStyle.css'

function ModalCreate({ children }) {
    return ReactDOM.createPortal(
        <div className="ModalBackground">

            {children}
        </div>,

        document.getElementById('modal')
    )

}
export { ModalCreate }