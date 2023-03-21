import React from 'react'
import "./contact.css"

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-bg">
            </div>
            <div className="contact-text">
                <div className="contact-text-title">
                    <h2>
                        GET STARTED WITH A <span> FREE</span> CONSULTATION
                    </h2>
                </div>
                <div className="contact-info">
                    <div className="contact-info-text">
                        <h2>
                            ONE FREE <span>WORKOUT</span>
                        </h2>
                        <p>
                            My Workouts are designed to overcome all plateaus.
                        </p>
                        <p>
                            It is a system that works every
                            time because I have stripped everything
                            that is arbitrary from it. In a nutshell,
                            I leave nothing to chance and cover every
                            single variable vital to achieving rapid
                            growth. It’s not easy, in fact if you want
                            to make great gains or lose weight it can be
                            extremely hard work, but if you work it properly
                            it always delivers.
                        </p>
                        <p>
                            Get started with a <span>FREE</span>  Consultation.
                        </p>
                        <p>
                            Matt Kiebach
                        </p>
                    </div>
                    <div className="contact-info-input">
                        <label for="name">name</label>
                        <input type="text" name='name' placeholder='Full Name' className='input-text' />
                        <label for="email">email</label>
                        <input type="text" name='email' placeholder='Email Adress' className='input-text' />
                        <label for="phone">phone</label>
                        <input type="text" name='phone' placeholder='Phone Number' className='input-text' />
                        <div className="contact-info-checkbox">
                            <div className="contact-info-checkbox-item">
                                <input type="checkbox" id="wloss" className='checkbox' />
                                <label for="wloss">weight loss</label>
                            </div>
                            <div className="contact-info-checkbox-item">
                                <input type="checkbox" id="bbuild" className='checkbox' />
                                <label for="bbuild">body building</label>
                            </div>
                            <div className="contact-info-checkbox-item">
                                <input type="checkbox" id="bcamp" className='checkbox' />
                                <label for="bcamp">boot camp</label>
                            </div>
                            <div className="contact-info-checkbox-item">
                                <input type="checkbox" id="ctrain" className='checkbox' />
                                <label for="ctrain">circuit training</label>
                            </div>
                            <div className="contact-info-checkbox-item">
                                <input type="checkbox" id="gtrain" className='checkbox' />
                                <label for="gtrain">group training</label>
                            </div>
                            <div className="contact-info-checkbox-item">
                                <input type="checkbox" id="nutrition" className='checkbox' />
                                <label for="nutrition">nutrition</label>
                            </div>
                        </div>
                        <label for="question">How Can I Help?</label>
                        <textarea type="text-area" name='question' placeholder='Have Questions?' className='input-text-area' />
                        <button className='contact-btn'>submit</button>
                    </div>
                </div>
                <p>
                    555-041-22-09
                </p>
                <p>
                    call me
                </p>
            </div>


        </div>
    )
}

export default Contact