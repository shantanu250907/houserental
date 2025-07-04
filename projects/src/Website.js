import React from 'react'
import {Link} from 'react-router-dom';
import img from './images/6e270dec6f11931302918d797f0eef7a.jpg';
import img1 from './images/Burj-khalifa-shutterstock_590724563.jpg';
import img2 from './images/th (2).jpeg';
import img3 from './images/th (3).jpeg';
import img4 from './images/th(4).jpg';
import img5 from './images/th (6).jpeg';

const Website = () => {
    return (
        <>
            <table class="a" id="header" border="0" width="99.7%">
                <tr>
                    <td>
                        <table width="85%" cellpadding="15" align="center">
                            <tr>
                                <td className="b">
                                    Black Oasis
                                </td>
                                <td >
                                    &nbsp;
                                </td>
                                <td>
                                    <Link to="/" className='c'>Home</Link>
                                </td>
                                <td>
                                    <Link to="/Offers" className="c">Offers</Link>
                                </td>
                                <td>
                                    <Link to="/Gallery" className="c">Gallery</Link>
                                </td>

                                <td>
                                    <Link to="/Booking" className="c">Booking</Link>
                                </td>
                            </tr>
                        </table>
                    </td>

                </tr>
            </table>

            <div id="Home" class="image-container">
                <img src={img} alt="tours" />
                <div class="text-overlay">Black Oasis</div>
                <div class="text-overlay1">Tours & Travels</div>
            </div>

            <div class="container-fluid">
                <div class="card">
                    <img src={img1} alt="pic" />
                    <div class="card-content">
                        <h2 class="card-title">United Arab Emirates</h2>
                        <p class="card-text">from $24,999</p>
                    </div>
                </div>
                <div class="card">
                    <img src={img2} alt="pic" />
                    <div class="card-content">
                        <h2 class="card-title">United States of America </h2>
                        <p class="card-text">from $74,999</p></div>
                </div>
                <div class="card">
                    <img src={img3} alt="pic" />
                    <div class="card-content">
                        <h2 class="card-title">United Kingdom (UK)</h2>
                        <p class="card-text">from $69,999</p></div>
                </div>
                <div class="card">
                    <img src={img4} alt="pic" />
                    <div class="card-content">
                        <h2 class="card-title">Western Australia</h2>
                        <p class="card-text">from $55,999</p></div>
                </div>
                <div class="card">
                    <img src={img5} alt="pic" />
                    <div class="card-content">
                        <h2 class="card-title">Republic of South Africa</h2>
                        <p class="card-text">from $34,999</p></div>
                </div>
               
            </div>
            <footer className='aa'>
                <h6>
                    <p>© 2025-2026 Black Oasis, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
                </h6>
            </footer> 

        </>
    )
}

export default Website
