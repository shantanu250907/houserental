import { Button } from 'react-bootstrap';
import './Search.css';
import React, { useState } from 'react';

const Search = () => {
    const [selectedBHK, setSelectedBHK] = useState('');

    const handleSelect = (type) => {
        setSelectedBHK(type);
    };

    const propertyData = {
        "1 RK": [
            {
                id: 1,
                title: "1RK Apartment in Dhananjay Society in Govind Nagar",
                images: [
                    "https://images.nobroker.in/images/8a9fa28497e86b4b0197e8fa25ea4015/8a9fa28497e86b4b0197e8fa25ea4015_62427_831677_medium.jpg",
                    "https://images.nobroker.in/images/8a9f8c8390b459960190b46f694b025f/8a9f8c8390b459960190b46f694b025f_60245_695971_medium.jpg",
                    "https://images.nobroker.in/images/8a9f8c8390b459960190b46f694b025f/8a9f8c8390b459960190b46f694b025f_98726_966558_medium.jpg",
                    "https://images.nobroker.in/images/8a9f8c8390b459960190b46f694b025f/8a9f8c8390b459960190b46f694b025f_46020_141717_medium.jpg"
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹5,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹10,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>600 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                   </> 
            }, 
            {   
                id: 11,
                title: "1RK Apartment in Ampire Hights in Govind Nagar",
                images: [
                    "https://images.nobroker.in/images/8a9f8ea497fecf530197ff1bef7c1eb4/8a9f8ea497fecf530197ff1bef7c1eb4_88340_644504_medium.jpg",
                    "https://images.nobroker.in/images/8a9f8ea497fecf530197ff1bef7c1eb4/8a9f8ea497fecf530197ff1bef7c1eb4_96291_320211_medium.jpg",
                    "https://images.nobroker.in/images/8a9f8ea497fecf530197ff1bef7c1eb4/8a9f8ea497fecf530197ff1bef7c1eb4_77405_216634_medium.jpg",
                    "https://images.nobroker.in/images/8a9f8ea497fecf530197ff1bef7c1eb4/8a9f8ea497fecf530197ff1bef7c1eb4_20450_791803_medium.jpg"
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹7,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹20,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>800 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                   </> 
            }

        ],
        "1 BHK": [
            {
                id: 2,
                title: "1 BHK in Niket Colony ",
                images: [
                    "https://images.nobroker.in/images/ff80818164e0ee580164e1c37ba757d0/ff80818164e0ee580164e1c37ba757d0_3643_460080_medium.jpg",
                    "https://images.nobroker.in/images/ff80818164e0ee580164e1c37ba757d0/ff80818164e0ee580164e1c37ba757d0_4632_726792_medium.jpg",
                    "https://images.nobroker.in/images/ff80818164e0ee580164e1c37ba757d0/ff80818164e0ee580164e1c37ba757d0_31812_206171_medium.jpg",
                ],
                description: 
                  <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹9,500 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹25,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>890 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                   </> 
            },
            {
                id: 3,
                title: "1 BHK Avenue Building",
                images: [
                    "https://images.nobroker.in/images/8a9f0a838a4e8503018a4f7a00b30d4b/8a9f0a838a4e8503018a4f7a00b30d4b_60591_628794_medium.jpg",
                    "https://images.nobroker.in/images/8a9f0a838a4e8503018a4f7a00b30d4b/8a9f0a838a4e8503018a4f7a00b30d4b_42011_842973_medium.jpg",
                    "https://images.nobroker.in/images/8a9f0a838a4e8503018a4f7a00b30d4b/8a9f0a838a4e8503018a4f7a00b30d4b_96936_426125_medium.jpg",
                ],
                description: 
                  <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹10,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹30,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>850 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                   </> 
            }
        ],
        "2 BHK": [
            {
                id: 4,
                title: "2 BHK in Siddheshwar Heighst",
                images: [
                    "https://images.nobroker.in/images/8a9fce8283978247018397c0755231ad/8a9fce8283978247018397c0755231ad_858167_398117_medium.jpg",
                    "https://images.nobroker.in/images/8a9fce8283978247018397c0755231ad/8a9fce8283978247018397c0755231ad_86173_745211_medium.jpg",
                    "https://images.nobroker.in/images/8a9fce8283978247018397c0755231ad/8a9fce8283978247018397c0755231ad_80827_632857_medium.jpg",
                ],
                description:
                <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹12,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹30,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>900+ sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                   </> 
                
            },
            {
                id: 44,
                title: "2 BHK in Sudarshan Building",
                images: [
                    "https://images.nobroker.in/images/8a9f9a8e980df55b01980e03d3f404c4/8a9f9a8e980df55b01980e03d3f404c4_350785_44722_medium.jpg",
                    "https://images.nobroker.in/images/8a9f9a8e980df55b01980e03d3f404c4/8a9f9a8e980df55b01980e03d3f404c4_126808_842455_medium.jpg",
                    "https://images.nobroker.in/images/8a9f9a8e980df55b01980e03d3f404c4/8a9f9a8e980df55b01980e03d3f404c4_972292_927845_medium.jpg",
                ],
                description: 
                <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹13,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹35,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>950 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                   </> 
            }

        ],
        "3 BHK": [
            {
                id: 5,
                title: "3 BHK in Pushpanjali Heishts",
                images: [
                    "https://images.nobroker.in/images/8a9ff48284f0a58e0184f0b1bf57055c/8a9ff48284f0a58e0184f0b1bf57055c_48304_826985_medium.jpg",
                    "https://images.nobroker.in/images/8a9ff48284f0a58e0184f0b1bf57055c/8a9ff48284f0a58e0184f0b1bf57055c_19992_359257_medium.jpg",
                    "https://images.nobroker.in/images/8a9ff48284f0a58e0184f0b1bf57055c/8a9ff48284f0a58e0184f0b1bf57055c_66301_654086_medium.jpg",
                ],
                description: 
                 <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹20,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹50,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1200 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                   </>
            },
             {
                id: 55,
                title: "3 BHK in Nandini Apartment",
                images: [
                    "https://images.nobroker.in/images/8a9f8e9a980e9dd401980ea1c48f0045/8a9f8e9a980e9dd401980ea1c48f0045_20547_112420_medium.jpg",
                    "https://images.nobroker.in/images/8a9f8e9a980e9dd401980ea1c48f0045/8a9f8e9a980e9dd401980ea1c48f0045_56009_120959_medium.jpg",
                    "https://images.nobroker.in/images/8a9f8e9a980e9dd401980ea1c48f0045/8a9f8e9a980e9dd401980ea1c48f0045_3689_142586_medium.jpg",
                ],
                description: 
                <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹25,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹55,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1250 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                   </>

            }
        ],
        "4 BHK": [
            {
                id: 6,
                title: "4 BHK in Padmashri Buildings",
                images: [
                    "https://images.nobroker.in/images/8a9fbe83954786aa019547a871310b84/8a9fbe83954786aa019547a871310b84_86906_153589_medium.jpg",
                    "https://images.nobroker.in/images/8a9fbe83954786aa019547a871310b84/8a9fbe83954786aa019547a871310b84_393980_333549_medium.jpg",
                    "https://images.nobroker.in/images/8a9fbe83954786aa019547a871310b84/8a9fbe83954786aa019547a871310b84_104684_843932_medium.jpg",
                ],
                description: 
                 <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹32,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹60,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>2000 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                   </>
            },
            
        ],
        "4+ BHK": [
            {
                id: 7,
                title: "5 BHK Villa in Lonavala",
                images: [
                    "https://via.placeholder.com/300x200"
                ],
                description: "Spacious villa with garden & pool."
            }
        ]
    };

    return (
        <>
            <div className="c" style={{ display: 'flex', backgroundColor: '#F2F2F2', padding: '20px' }}>
                <div className="card" style={{ width: 400, Height: 590 }}>
                    <div className="card-body">
                        <h6 style={{ marginTop: 1, fontFamily: "sans-serif" }}>Preferred Type</h6>
                        <div class="form-check" style={{ display: 'flex', marginTop: 10 }}>
                            <input class="form-check-input " type="checkbox" value="" id="flexCheckDefault"
                            /> &nbsp; &nbsp;
                            <label class="form-check-label" for="flexCheckDefault" style={{ color: 'grey' }}>
                                Family
                            </label>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ marginLeft: 85 }} /> &nbsp; &nbsp;
                            <label class="form-check-label" for="flexCheckDefault" style={{ color: 'grey' }}>
                                Commercial
                            </label>
                        </div>
                        <div class="form-check" style={{ display: 'flex', marginTop: 10 }}>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" /> &nbsp; &nbsp;
                            <label class="form-check-label" for="flexCheckChecked" style={{ color: 'grey' }}>
                                Bachelor Male
                            </label>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" style={{ marginLeft: 30 }} /> &nbsp; &nbsp;
                            <label class="form-check-label" for="flexCheckChecked" style={{ color: 'grey' }}>
                                Bachelor Female
                            </label>
                        </div>

                        <h6 style={{ marginTop: 20, fontFamily: "sans-serif" }}>Property Type</h6>
                        <div class="form-check" style={{ display: 'flex', marginTop: 10 }}>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" /> &nbsp; &nbsp;
                            <label class="form-check-label" for="flexCheckChecked" style={{ color: 'grey' }}>
                                Apartment
                            </label>
                        </div>
                        <div class="form-check" style={{ display: 'flex', marginTop: 10 }}>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" /> &nbsp; &nbsp;
                            <label class="form-check-label" for="flexCheckChecked" style={{ color: 'grey' }}>
                                Independent House/Villa
                            </label>
                        </div>
                        <div class="form-check" style={{ display: 'flex', marginTop: 10 }}>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" /> &nbsp; &nbsp;
                            <label class="form-check-label" for="flexCheckChecked" style={{ color: 'grey' }}>
                                Gated Community Villa
                            </label>
                        </div>

                        <h6 style={{ marginTop: 20, fontFamily: "sans-serif" }}>Furnishing</h6>
                        <div class="form-check" style={{ display: 'flex', marginTop: 10 }}>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" /> &nbsp; &nbsp;
                            <label class="form-check-label" for="flexCheckChecked" style={{ color: 'grey' }}>
                                Full
                            </label>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" style={{ marginLeft: 50 }} /> &nbsp; &nbsp;
                            <label class="form-check-label" for="flexCheckChecked" style={{ color: 'grey' }}>
                                Semi
                            </label>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" style={{ marginLeft: 50 }} /> &nbsp; &nbsp;
                            <label class="form-check-label" for="flexCheckChecked" style={{ color: 'grey' }}>
                                None
                            </label>
                        </div>

                        <h6 style={{ marginTop: 20, fontFamily: "sans-serif" }}>BHK Type</h6>

                        <div className="container" style={{ marginTop: 15 }}>
                            <div role="group" className='a' aria-label="Checkbox toggle group">
                                <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off"
                                    checked={selectedBHK === "1 RK"}
                                    onChange={() => handleSelect("1 RK")} />
                                <label className="btn btn-outline-primary" style={{ width: 100 }} htmlFor="btncheck1">1 RK</label>
                                &nbsp;&nbsp;
                                <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off"
                                    checked={selectedBHK === "1 BHK"}
                                    onChange={() => handleSelect("1 BHK")} />
                                <label className="btn btn-outline-primary" style={{ width: 100 }} htmlFor="btncheck2">1 BHK</label>
                                &nbsp;&nbsp;
                                <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off"
                                    checked={selectedBHK === "2 BHK"}
                                    onChange={() => handleSelect("2 BHK")} />
                                <label className="btn btn-outline-primary" style={{ width: 100 }} htmlFor="btncheck3">2 BHK</label>
                            </div>
                        </div>
                        <div className="container" style={{ marginTop: 27, marginBottom: 25 }}>
                            <div role="group" className='a' aria-label="Checkbox toggle group">
                                <input type="checkbox" className="btn-check" id="btncheck4" autoComplete="off"
                                    checked={selectedBHK === "3 BHK"}
                                    onChange={() => handleSelect("3 BHK")} />
                                <label className="btn btn-outline-primary" style={{ width: 100 }} htmlFor="btncheck4">3 BHK</label>
                                &nbsp;&nbsp;
                                <input type="checkbox" className="btn-check" id="btncheck5" autoComplete="off"
                                    checked={selectedBHK === "4 BHK"}
                                    onChange={() => handleSelect("4 BHK")} />
                                <label className="btn btn-outline-primary" style={{ width: 100 }} htmlFor="btncheck5">4 BHK</label>
                                &nbsp;&nbsp;
                                <input type="checkbox" className="btn-check" id="btncheck6" autoComplete="off"
                                    checked={selectedBHK === "4+ BHK"}
                                    onChange={() => handleSelect("4+ BHK")} />
                                <label className="btn btn-outline-primary" style={{ width: 100 }} htmlFor="btncheck6">4+ BHK</label>
                            </div>
                        </div>

                    </div>
                </div>


                <div style={{ flex: 1, paddingLeft: '10px'}}>
                    {selectedBHK && (
                        <div>
                            <h5>Showing Results for: {selectedBHK}</h5>
                            {(propertyData[selectedBHK] || []).map((property) => (
                                <div key={property.id} style={{
                                    border: '1px solid #ccc',
                                    padding: '10px',
                                    width: '400px',
                                    marginTop: '10px',
                                    borderRadius: '8px',
                                    backgroundColor: '#fff',
                                }}>


                                    <div id={`carousel-${property.id}`} className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            {property.images.map((img, idx) => (
                                                <div className={`carousel-item ${idx === 0 ? 'active' : ''}`} key={idx}>
                                                    <img src={img} className="d-block w-100" style={{ height: '300px', objectFit: 'cover' }} alt={`Slide ${idx + 1}`} />
                                                </div>
                                            ))}
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${property.id}`} data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${property.id}`} data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>




                                    <h6 style={{ marginTop: '10px' }}>{property.title}</h6>
                                    <p>{property.description}</p>
                                </div>

                            ))}

                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Search;
