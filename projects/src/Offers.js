import React from 'react'
import img from './images/thai.jpeg';
import img1 from './images/swis.jpeg';
import img2 from './images/saudi.jpeg';
import img3 from './images/france.jpeg';
import img4 from './images/amsterdam.jpeg';
import img5 from './images/japan.jpeg';
import img6 from './images/portugal.jpeg';
import img7 from './images/brazil.jpeg';
import img8 from './images/barbados.jpeg';
import img9 from './images/los-angeles-attractions-feature.jpg';
import img10 from './images/russia.jpeg';
import img11 from './images/spain.jpeg';
import img12 from './images/denmark.jpeg';
import img13 from './images/eyjept.jpeg';
import img14 from './images/antartica.jpeg';
import { Link } from 'react-router-dom';

const Offers = () => {
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

            <h1 class="d">Offers</h1>
            <div class="container1">
                <div class="card1">
                    <img src={img} class="e" alt="pic" />
                    <div class="card-content1">
                        <h2 class="card-title1">Thailand</h2>
                        <p class="card-text1">from $24,999</p>
                        <p class="card-text2">from $19,999</p>

                    </div>
                </div>
                <div class="card1">
                    <img src={img1} alt="pic" />
                    <div class="card-content1">
                        <h2 class="card-title1">Switzerlnad</h2>
                        <p class="card-text1">from $79,999</p>
                        <p class="card-text2">from $69,999</p>
                    </div>
                </div>
                <div class="card1">
                    <img src={img2} alt="pic" />
                    <div class="card-content1">
                        <h2 class="card-title1">Saudi Arabia</h2>
                        <p class="card-text1">from $59,999</p>
                        <p class="card-text2">from $54,999</p>
                    </div>
                </div>
                <div class="card1">
                    <img src={img3} alt="pic" />
                    <div class="card-content1">
                        <h2 class="card-title1">France</h2>
                        <p class="card-text1">from $59,999</p>
                        <p class="card-text2">from $55,999</p>
                    </div>
                </div>
                <div class="card1">
                    <img src={img4} alt="pic" />
                    <div class="card-content1">
                        <h2 class="card-title1">Amsterdam</h2>
                        <p class="card-text1">from $54,999</p>
                        <p class="card-text2">from $49,999</p>
                    </div>
                </div>
            </div>
            <div class="container2">
                <div class="card1">
                    <img src={img5} class="e" alt="pic" />
                    <div class="card-content1">
                        <h2 class="card-title1">Japan</h2>
                        <p class="card-text1">from $55,999</p>
                        <p class="card-text2">from $51,999</p>
                    </div>
                </div>
                <div class="card1">
                    <img src={img6} alt="pic" />
                    <div class="card-content1">
                        <h2 class="card-title1">Portugal</h2>
                        <p class="card-text1">from $34,999</p>
                        <p class="card-text2">from $24,999</p>
                    </div>
                </div>
                <div class="card1">
                    <img src={img7} alt="pic" />
                    <div class="card-content1">
                        <h2 class="card-title1">Brazil</h2>
                        <p class="card-text1">from $89,999</p>
                        <p class="card-text2">from $79,999</p>
                    </div>
                </div>
                <div class="card1">
                    <img src={img8} alt="pic" />
                    <div class="card-content1">
                        <h2 class="card-title1">Barbados</h2>
                        <p class="card-text1">from $99,999</p>
                        <p class="card-text2">from $84,999</p>
                    </div>
                </div>
                <div class="card1">
                    <img src={img9} alt="pic" />
                    <div class="card-content1">
                        <h2 class="card-title1">California</h2>
                        <p class="card-text1">from $99,999</p>
                        <p class="card-text2">from $94,999</p>
                    </div>
                </div>
            </div>

            <div class="container1">
                <div class="card1">
                    <img src={img10} class="e" alt="pic" />
                    <div class="card-content1">
                        <h2 class="card-title1">Russia</h2>
                        <p class="card-text1">from $24,999</p>
                        <p class="card-text2">from $19,999</p>

                    </div>
                </div>
                <div class="card1">
                    <img src={img11} alt="pic" />
                    <div class="card-content1">
                        <h2 class="card-title1">Spain</h2>
                        <p class="card-text1">from $79,999</p>
                        <p class="card-text2">from $69,999</p>
                    </div>
                </div>
                <div class="card1">
                    <img src={img12} alt="pic" />
                    <div class="card-content1">
                        <h2 class="card-title1">Denmark</h2>
                        <p class="card-text1">from $59,999</p>
                        <p class="card-text2">from $54,999</p>
                    </div>
                </div>
                <div class="card1">
                    <img src={img13} alt="pic" />
                    <div class="card-content1">
                        <h2 class="card-title1">Egypt</h2>
                        <p class="card-text1">from $59,999</p>
                        <p class="card-text2">from $55,999</p>
                    </div>
                </div>
                <div class="card1">
                    <img src={img14} alt="pic" />
                    <div class="card-content1">
                        <h2 class="card-title1">Antartica</h2>
                        <p class="card-text1">from $54,999</p>
                        <p class="card-text2">from $49,999</p>
                    </div>
                </div>
            </div>

            <footer className='aa1'>
                <h6>
                    <p>© 2025-2026 Black Oasis, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
                </h6>
            </footer> 

        </>
    )
}

export default Offers
