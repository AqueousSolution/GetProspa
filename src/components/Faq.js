import React from 'react'

function Faq() {
    return (
        <div>
             <section className="faq">
                <div className="faq-bg">
                <img alt="background" src="./section-bg-faq.svg"/>
                </div>
                <h2 className="faq-title">
                    Frequently asked questions
                </h2>
                <div className="faq-answers">
                    <div className="faq-answers__item item-one">
                       <div className="question">
                          What is Prospa?
                       </div> 
                       <div className="answer">
                            <p>Prospa is a business account for entrepreneurs. 
                            Your account comes with:</p>
                            <p>Bank account number in your business name</p>
                            <p>Receive transfers from all Nigerian banks</p>
                            <p>Send transfers to all Nigerian banks</p>
                            <p>Pay bills</p>
                            <p>International transfers</p>
                            <p>Powerful tools & features to keep your business on autopilot</p>   
                       </div>
                    </div>
                    <div className="faq-answers__item item-two">
                       <div className="question">
                       Do you have a physical branch?
                       </div> 
                       <div className="answer">
                           
                            <p>No. We do not have a physical branch, however if you’re interested in becoming a member and want to confirm, you can visit our office address:</p>
                            <p>4b Fatai Idowu Arobieke, Lekki Phase 1, Lagos, Nigeria.</p>  
                       </div>
                      
                    </div>
                    <div className="faq-answers__item item-three">
                       <div className="question">
                       How does the bank account work?
                       </div> 
                       <div className="answer">
                            <p>Your account number will be with one of our partner banks. 
                                E.g (Your business name) - Providus Bank. When you want to 
                                receive transfers, you give your customers your account number 
                                and the bank name. You receive all credits directly in Prospa.
                            </p>
                       </div>
                      
                    </div>

                    <div className="faq-answers__item item-four">
                       <div className="question">
                       How long does it take?
                       </div> 
                       <div className="answer">
                            <p>It takes 5 minutes to sign up and on average it takes 20 minutes for
                                 your account to be approved once you’ve submitted your application, 
                                however it can take up to 48 hours if we need more information from you..
                            </p>
                       </div>
                      
                    </div>

                    <div className="faq-answers__item item-five">
                       <div className="question">
                       Is there an inflow limit?
                       </div> 
                       <div className="answer">
                            <p>There is no limit to the amount of credits
                                 you can receive into your Prospa account.
                            </p>
                       </div>
                      
                    </div>

                    <div className="item-six">
                       
                      <a href="#" className='swag-button'>View More</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Faq
