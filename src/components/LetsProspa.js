import React from 'react'

function LetsProspa() {
    return (
        <div>
                        <section className="prospa-together">
                <h2 className="prospa-together-title">
                    Let's Prospa Together
                </h2>
                <div className="prospa-together-features">
                    <div className="prospa-together-feature">
                        <img className="prospa-together-feature__icon" src="./community.png" alt="Community"/>
                        <h3 className='prospa-together-feature__title'>
                            Community
                        </h3>
                        <p className='prospa-together-feature__content'> 
                           Prospa members have access to our community of experts,
                           excited about helping you start and scale your business.
                        </p>
                    </div>

                    <div className="prospa-together-feature">
                        <img className="prospa-together-feature__icon" src="./securityp.png" alt="Community"/>
                        <h3 className='prospa-together-feature__title'>
                            Security
                        </h3>
                        <p className='prospa-together-feature__content'> 
                         Bank grade security, insured deposits and ring fenced accounts.
                         We take the responsibility of helping you protect and grow your 
                         business seriously.
                        </p>
                    </div>

                    <div className="prospa-together-feature">
                        <img className="prospa-together-feature__icon" src="./control.png" alt="Community"/>
                        <h3 className='prospa-together-feature__title'>
                            Control
                        </h3>
                        <p className='prospa-together-feature__content'> 
                         Easy to set up, Intuitive to use and transparent with fees. 
                         Prospa puts business owners in control of their finances.
                        </p>
                    </div>
                </div>
                
            </section>
        </div>
    )
}

export default LetsProspa
