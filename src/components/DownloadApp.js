import React from 'react'

function DownloadApp() {
    return (
        <div>
                       <section className="download-app-section">
              <div className="download-app">
                  <div className='download-app-one'>
                       <h2 className="download-app__title">
                            Success is a journey. Together we Prospa.
                        </h2>
                        <p className="download-app__subtitle">
                            Prospa is available on iOS, Android and Web. Open 
                            an account today.
                        </p>
                        <div className="download-app__links">
                            <a className='download-app-link'>
                                <div className="apple-icon">
                                    <img src="./apple-store.svg"/>
                                </div>
                                <div>
                                    <div className="download-text">
                                        Download on the
                                    </div>
                                    <div className="apple-text">
                                        Apple Store
                                    </div>
                               </div>
                            </a>

                            <a className='download-app-link'>
                                <div className="apple-icon">
                                    <img src="./google-playstore.svg"/>
                                </div>
                                <div>
                                    <div className="download-text">
                                        Get it on
                                    </div>
                                    <div className="apple-text">
                                        Google Play
                                    </div>
                                </div>
                            </a>

                            <a className='download-app-link'>
                                <div className="apple-icon">
                                    <img className='web-icon' src="./web.png"/>
                                </div>
                                <div>
                                    <div className="download-text">
                                        On the web
                                    </div>
                                    <div className="apple-text">
                                        prospa
                                    </div>
                                </div>
                            </a>
                        </div>
                  </div>
                  <div className="download-app-two">
                     <img className="download-preview" src="./download-preview.png"/>
                  </div>
              </div>       
           </section>
        </div>
    )
}

export default DownloadApp
