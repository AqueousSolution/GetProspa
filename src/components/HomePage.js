import React from 'react'
import Faq from './Faq'
import DownloadApp from './DownloadApp'
import LetsProspa from './LetsProspa'

function HomePage() {
    return (
        <div>
            <section className="businesshub">
                <div className="faq-bg">
                <img alt="background" src="./section-bg-faq.svg"/>
                </div>
                <div className="businesshub-flex">
                    <div className="businesshub-flex__img">
                        <img src="./businesshub.png" alt="screenshot" className="screenshot1"/>
                    </div>
                    <div className="businesshub-flex__content">
                        <h2 className="title">Business hub</h2>
                        <p>
                            The heart of your business, in an app. Manage your customers, 
                            employees, products and suppliers. Get insights on your best
                            selling products and highest spending customers.
                        </p>
                    </div>
                </div>
            </section>
           <LetsProspa/>
           <Faq/>
           <DownloadApp/>
        </div>
    )
}

export default HomePage
