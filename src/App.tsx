/* eslint-disable */

// import React from 'react';
import React, { useState, useEffect } from 'react'
import { oidcLog,  AuthenticationProvider} from '@axa-fr/react-oidc-context';
import './scss/style.scss';
import { carEntranceId} from "./configs/carEntranceIdConfig";

import { CCard, CCardBody, CCardHeader, CButtonToolbar, CButton,  CForm, CLabel, CInput, CSelect,  CFormGroup, CInvalidFeedback, CValidFeedback } from '@coreui/react'
import styles from './Style.module.css'
import { REACT_APP_APIURL, SERVER_URL } from './configs/apiConfig';
import image from './assets/images/image.png'
import { useServerTimeHub } from './services/server-time-hub';


const App = () => {

  const id = carEntranceId;
  
  const {message, sound, isConnected} = useServerTimeHub(id, SERVER_URL);
  console.log("page Loaded:--------------------------------> ", isConnected);
  const [time, setTime] = useState('message');

  return (
    <>
          <div className="row float-left" style={{width:'100%'}}>
            {
              message.length > 0 && JSON.parse(message).templateId !== 1 ? <div className="col-md-12 mt-2" id="template1">
              <CCard className="border-0">
                <CCardHeader className="m-auto">
                  {/* <h4>name1</h4> */}
                </CCardHeader>
                <CCardBody className=""  style={{border:'15px solid', minHeight:'220px', borderColor: message.length > 0 && JSON.parse(message).templateId == 5? '#F11': '#1C1'}}>
                  <div className="h5 mb-4">
                    <span>{message.length > 0 && JSON.parse(message).messageEN !== null? JSON.parse(message).messageEN:'Please Exit'}</span>
                  </div>
                  <div className="h5 mb-4">
                    <span>{message.length > 0 && JSON.parse(message).messageCN !== null? JSON.parse(message).messageCN:'Chinese letter'}</span>
                  </div>
                  <div>
                    <span>{message.length > 0 && JSON.parse(message).entryTime !== null? (`Enter time: ${JSON.parse(message).entryTime}`) :''}</span>
                  </div>
                  <div>
                    <span>{message.length > 0 && JSON.parse(message).exitTime !== null && JSON.parse(message).exitTime !== undefined? (`Exit time: ${JSON.parse(message).exitTime}`):''}</span>
                  </div>
                  <div>
                    <span>{message.length > 0 && JSON.parse(message).parkingTime !== 0 && JSON.parse(message).parkingTime !== undefined? (`Parking time: ${JSON.parse(message).parkingTime}`):''}</span>
                  </div>
                  <div>
                    <span>{message.length > 0 && JSON.parse(message).octopusData !==null && JSON.parse(message).octopusData !==undefined ? (`RemainedValue: ${JSON.parse(message).octopusData.RemainValue}`):''}</span>
                  </div>
                  <div>
                    <span>{message.length > 0 && JSON.parse(message).estTime !== 0 ? (`Est time: ${JSON.parse(message).estTime}`):''}</span>
                  </div>
                </CCardBody>
              </CCard>
            </div>:<div className="col-12 mt-4"><img src={image} alt='image' style={{width:'99%'}} /></div>
            }
          </div>
    </>
  )
}



export default App;
