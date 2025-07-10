import React from 'react'
import img from './images/Queen-Room.jpg';
import img1 from './images/5655441.webp';
import img2 from './images/room3.jpg';
import img3 from './images/1749719374Balcony2.jpg';
import img4 from './images/1749719356Balcony1.jpg';
import img5 from './images/pool2.jpg';
import img6 from './images/The-Loop-Pool-Bar-Restaurant-via-Tropical-Life-1-1920x960.jpg';
import img7 from './images/trave.jpg';
import { Link } from 'react-router-dom';

const Gallery = () => {
    return (
        <>
            <table class="a" id="header" border="0" width="99.7%">
                <tr>
                    <td>
                        <table width="85%" cellpadding="15" align="center">
                            <tr>
                                <td className="b">
                                    Black Mamba
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

            <h1 id="Gallery" class="d">Gallery</h1>
            <div class="grid-container">
                <div class="i1"><img src={img} width="500" height="400" /></div>
                <div class="i2"><img src={img1} width="500" height="400" /></div>
                <div class="i3"><img src={img2} width="500" height="400" /></div>
            </div>
            <div class="grid-container1">
                <div class="i4"><img src={img3} width="500" height="400" /></div>
                <div class="i5"><img src={img4} width="500" height="400" /></div>
                <div class="i6"><img src={img5} width="500" height="400" /></div>
            </div>
            <div class="grid-container1">
                <div class="i7"><img src={img6} width="126%"
                    height="600" /></div>
            </div>

            &nbsp;
            <table class="s">
                <tbody>
                    <tr>
                        <td>
                            <img class="s1" src={img7} height="400" width="490" />
                        </td>
                        <td>
                            <p class="A1">Traveling around the world with <b>Black Oasis Tours and
                                Travels</b> is an unforgettable experience filled with adventure, comfort, and cultural discovery. Whether
                                you're
                                exploring the ancient wonders of Egypt, the bustling streets of Tokyo, or the serene beaches of
                                the Maldives,
                                Black Oasis ensures every detail is taken care of with professionalism and personalized service.
                                Their expertly
                                crafted itineraries combine luxury, authenticity, and local flavor, allowing you to immerse
                                yourself fully in
                                each destination. With a passion for travel and a commitment to excellence, Black Oasis Tours
                                and Travels transforms
                                every journey into a lifetime memory.</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <footer className='aa1'>
                <h6>
                    <p>© 2025-2026 Black Oasis, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
                </h6>
            </footer>

        </>
    )
}

export default Gallery
