import React from 'react'
import './AppDownLoad.css'
import { assets } from '../../assets/frontend_assets/assets'

export const AppDownLoad = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download <br /> Tomato App </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} />
        <img src={assets.app_store} />
      </div>
    </div>
  )
}
