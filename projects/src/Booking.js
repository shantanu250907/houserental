import React from 'react'
import { Link } from 'react-router-dom'

const Booking = () => {
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
            <h1 class="d" >Book a Tickets</h1>
            <form className='z'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Enter your Email Address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Enter your Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Enter your Destination</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Email your Age</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Enter a Passport No</label>
                    <input type="tel" class="form-control" id="exampleInputPassword1" />
                </div>
                
               
                &nbsp;<button type="submit" class="btn btn-primary">Book</button>

            </form>
        </>
    )
}

export default Booking
