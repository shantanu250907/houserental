import { Button } from 'react-bootstrap';
import './Search.css';
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';


const Search = () => {
    const [selectedBHK, setSelectedBHK] = useState('');

    const handleSelect = (type) => {
        setSelectedBHK(type);
    };

    const propertyData = {
        "1 RK": [
            {
                id: 1,
                title:
                    <label>1 RK Flat, In Sai Villa Apartment for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Sai Villa , Govind Nagar Near Prakash Petrol Pump, Nashik</h6>
                    </label>,
                images: [

                    "https://images.nobroker.in/images/8a9fa28497e86b4b0197e8fa25ea4015/8a9fa28497e86b4b0197e8fa25ea4015_62427_831677_medium.jpg",
                    "https://images.nobroker.in/images/8a9f8c8390b459960190b46f694b025f/8a9f8c8390b459960190b46f694b025f_60245_695971_medium.jpg",
                    "https://images.nobroker.in/images/8a9f8c8390b459960190b46f694b025f/8a9f8c8390b459960190b46f694b025f_98726_966558_medium.jpg",
                    "https://images.nobroker.in/images/8a9f8c8390b459960190b46f694b025f/8a9f8c8390b459960190b46f694b025f_46020_141717_medium.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            marginRight: '1px',
                            justifyContent: 'space-between',
                            backgroundColor: '#f9f9f9',
                            padding: '1px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            height: '70px',

                        }}>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold', }}>₹10,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666', }}>Rent</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold', }}>₹40,000</div>
                                <div style={{ fontSize: '12px', color: '#666', }}>Deposit</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold', }}>1000 sqft</div>
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

                id: 1.2,
                title:
                    <label>1 RK Flat, In Shivlila Apartment for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Shivlila, Indira Nagar Behind City Garden Jogging Track, Nashik</h6>
                    </label>,
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
                            marginRight: '1px',
                            // width: '450px',
                            justifyContent: 'space-between',
                            // marginTop: '80px',
                            backgroundColor: '#f9f9f9',
                            padding: '1px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            // marginLeft: 'auto',
                            height: '70px'
                        }}>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹10,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹40,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>900 sqft</div>
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
                id: 1.3,
                title:
                    <label>1 RK Flat, In Shiv Shrushti Apartment for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Shiv Shrushti, Pushpanjali, Rane Nagar, Mahamarg, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9f88838eb38273018eb3e7ce412f00/8a9f88838eb38273018eb3e7ce412f00_32325_403535_medium.jpg",
                   "https://images.nobroker.in/images/8a9f88838eb38273018eb3e7ce412f00/8a9f88838eb38273018eb3e7ce412f00_16781_891750_large.jpg",
                   "https://images.nobroker.in/images/8a9f88838eb38273018eb3e7ce412f00/8a9f88838eb38273018eb3e7ce412f00_77426_988672_large.jpg",
                   "https://images.nobroker.in/images/8a9f88838eb38273018eb3e7ce412f00/8a9f88838eb38273018eb3e7ce412f00_48534_969280_large.jpg",
                   "https://images.nobroker.in/images/8a9f88838eb38273018eb3e7ce412f00/8a9f88838eb38273018eb3e7ce412f00_89492_867908_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            marginRight: '1px',
                            // width: '450px',
                            justifyContent: 'space-between',
                            // marginTop: '80px',
                            backgroundColor: '#f9f9f9',
                            padding: '1px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            // marginLeft: 'auto',
                            height: '70px'
                        }}>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹8,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹20,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div style={{ margin: '10px' }}>
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
            },
            {
                id: 1.4,
                title:
                    <label>1 RK Flat, In Aashirwad Apartment For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Aashirwad, Satpur Colony,Near Satpur Bus-Stand, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9fa28497e86b4b0197e8fa25ea4015/8a9fa28497e86b4b0197e8fa25ea4015_62427_831677_medium.jpg",
                   "https://images.nobroker.in/images/8a9f82ed716311b201716336d16307cf/8a9f82ed716311b201716336d16307cf_16644_552381_large.jpg",
                    "https://images.nobroker.in/images/8a9f82ed716311b201716336d16307cf/8a9f82ed716311b201716336d16307cf_12223_860593_large.jpg",
                     "https://images.nobroker.in/images/8a9f82ed716311b201716336d16307cf/8a9f82ed716311b201716336d16307cf_23921_70295_large.jpg",

                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            marginRight: '1px',
                            // width: '450px',
                            justifyContent: 'space-between',
                            // marginTop: '80px',
                            backgroundColor: '#f9f9f9',
                            padding: '1px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            // marginLeft: 'auto',
                            height: '70px'
                        }}>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹7,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹20,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>650 sqft</div>
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
                id: 1.5,
                title:
                    <label>1 RK Flat, In Sonamrut Heights For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Sonamrut, Govind Nagar, Unthwadi Road, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9f8b8597de2cb60197de92348a3631/8a9f8b8597de2cb60197de92348a3631_48312_256182_large.jpg",
                    "https://images.nobroker.in/images/8a9f8b8597de2cb60197de92348a3631/8a9f8b8597de2cb60197de92348a3631_11893_47822_large.jpg",
                    "https://images.nobroker.in/images/8a9f8b8597de2cb60197de92348a3631/8a9f8b8597de2cb60197de92348a3631_59898_600682_large.jpg",
                    "https://images.nobroker.in/images/8a9f8b8597de2cb60197de92348a3631/8a9f8b8597de2cb60197de92348a3631_48305_528523_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            marginRight: '1px',
                            // width: '450px',
                            justifyContent: 'space-between',
                            // marginTop: '80px',
                            backgroundColor: '#f9f9f9',
                            padding: '1px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            // marginLeft: 'auto',
                            height: '70px'
                        }}>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹8,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹25,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>700 sqft</div>
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
                id: 1.6,
                title:
                    <label>1 RK Flat, In Abhinav Heights For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Abhinav, Govind Nagar, Unthwadi Road, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9f8c91982c505d01982c72fe670d81/8a9f8c91982c505d01982c72fe670d81_35270_146275_medium.jpg",
                    "https://images.nobroker.in/images/8a9f94899796ef6c019796fee1ae0601/8a9f94899796ef6c019796fee1ae0601_61030_948945_large.jpg",
                    "https://images.nobroker.in/images/8a9f94899796ef6c019796fee1ae0601/8a9f94899796ef6c019796fee1ae0601_4798_510494_large.jpg",
                    "https://images.nobroker.in/images/8a9f94899796ef6c019796fee1ae0601/8a9f94899796ef6c019796fee1ae0601_53204_146946_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            marginRight: '1px',
                            // width: '450px',
                            justifyContent: 'space-between',
                            // marginTop: '80px',
                            backgroundColor: '#f9f9f9',
                            padding: '1px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            // marginLeft: 'auto',
                            height: '70px'
                        }}>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹7,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹20,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>650 sqft</div>
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
                id: 1.7,
                title:
                    <label>1 RK Flat, Tirupati Apartment For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Tirupati, Indira Nagar Cannel, Mumbai-Agra Highway, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9f8203901521ff0190154c34e712ca/8a9f8203901521ff0190154c34e712ca_84024_460192_large.jpg",
                    "https://images.nobroker.in/images/8a9fb08283409b23018340f91dfd40df/8a9fb08283409b23018340f91dfd40df_436908_579196_large.jpg",
                    "https://images.nobroker.in/images/8a9fb08283409b23018340f91dfd40df/8a9fb08283409b23018340f91dfd40df_651012_152603_large.jpg",
                    "https://images.nobroker.in/images/8a9fb08283409b23018340f91dfd40df/8a9fb08283409b23018340f91dfd40df_540979_153457_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            marginRight: '1px',
                            // width: '450px',
                            justifyContent: 'space-between',
                            // marginTop: '80px',
                            backgroundColor: '#f9f9f9',
                            padding: '1px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            // marginLeft: 'auto',
                            height: '70px'
                        }}>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹9,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹25,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>750 sqft</div>
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
                id: 1.8,
                title:
                    <label>1 RK Flat, In Roongta Heights For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Roongta Bellavista, Kamod Nagar, Mumbai-Agra Highway, Nashik</h6>
                    </label>,
                images: [
                  "https://images.nobroker.in/images/8a9f858897f0454e0197f087b8b109e3/8a9f858897f0454e0197f087b8b109e3_30242_135709_large.jpg",
                  "https://images.nobroker.in/images/8a9fae83825ecf2901825f29ccfa3633/8a9fae83825ecf2901825f29ccfa3633_395133_803377_large.jpg",
                  "https://images.nobroker.in/images/8a9fae83825ecf2901825f29ccfa3633/8a9fae83825ecf2901825f29ccfa3633_789682_401384_large.jpg",
                  "https://images.nobroker.in/images/8a9fae83825ecf2901825f29ccfa3633/8a9fae83825ecf2901825f29ccfa3633_750583_34742_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            marginRight: '1px',
                            // width: '450px',
                            justifyContent: 'space-between',
                            // marginTop: '80px',
                            backgroundColor: '#f9f9f9',
                            padding: '1px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            // marginLeft: 'auto',
                            height: '70px'
                        }}>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹7,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹20,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div style={{ margin: '10px' }}>
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
            },
            





        ],
        "1 BHK": [
            {
                id: 2,
                title: 
                    <label>1 BHK Flat, In Siddhhivinayak Apartment For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Siddhhivinayak, Renuka Nagar, Near Mahamarg Bus-Stand, Mumbai Naka, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9fa2849823a43c019823b795f90390/8a9fa2849823a43c019823b795f90390_69980_379772_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹12,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹40,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1000 sqft</div>
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
                id: 2.2,
                title: 
                <label>1 BHK Flat, In Abhishek Apartment For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Abhishek, Renuka Nagar, Near Mahamarg Bus-Stand, Mumbai Naka, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/ff80818164e0ee580164e1c37ba757d0/ff80818164e0ee580164e1c37ba757d0_16552_262615_large.jpg",
                    "https://images.nobroker.in/images/ff80818164e0ee580164e1c37ba757d0/ff80818164e0ee580164e1c37ba757d0_13401_530658_large.jpg",
                    "https://images.nobroker.in/images/ff80818164e0ee580164e1c37ba757d0/ff80818164e0ee580164e1c37ba757d0_47266_64380_large.jpg",
                    "https://images.nobroker.in/images/ff80818164e0ee580164e1c37ba757d0/ff80818164e0ee580164e1c37ba757d0_89487_757318_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹30,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1100 sqft</div>
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
                id: 2.3,
                title: 
                 <label>1 BHK Flat, In Aashiyana Apartment For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Aashiyana, Lekha Nagar, Near Grand Rio Hotel, Mahamarg, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9f9187980d8f5c01980dc8e2ad18a8/8a9f9187980d8f5c01980dc8e2ad18a8_96223_718539_medium.jpg",
                    "https://images.nobroker.in/images/8a9f0a838a4e8503018a4f7a00b30d4b/8a9f0a838a4e8503018a4f7a00b30d4b_60591_94426_large.jpg",
                    "https://images.nobroker.in/images/8a9f0a838a4e8503018a4f7a00b30d4b/8a9f0a838a4e8503018a4f7a00b30d4b_13137_941837_large.jpg",
                    "https://images.nobroker.in/images/8a9f0a838a4e8503018a4f7a00b30d4b/8a9f0a838a4e8503018a4f7a00b30d4b_96936_752182_large.jpg",
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
                id: 2.4,
                title: 
                 <label>1 BHK Flat, In Chandravel Apartment For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Chandravel, Indira Nagar, Near Jogging Track, Mumbai-Agra Highway, Nashik</h6>
                    </label>,
                images: [
                   "https://images.nobroker.in/images/8a9fb28278a4b7c00178a52f89010d19/8a9fb28278a4b7c00178a52f89010d19_2153_70881_large.jpg",
                   "https://images.nobroker.in/images/8a9fb28278a4b7c00178a52f89010d19/8a9fb28278a4b7c00178a52f89010d19_23124_533983_large.jpg",
                   "https://images.nobroker.in/images/8a9fb28278a4b7c00178a52f89010d19/8a9fb28278a4b7c00178a52f89010d19_91217_202854_large.jpg",
                   "https://images.nobroker.in/images/8a9fb28278a4b7c00178a52f89010d19/8a9fb28278a4b7c00178a52f89010d19_8211_622870_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹15,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
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
                id: 2.5,
                title: 
                 <label>1 BHK Flat, In Dhananjay Building For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Dhananjay, Rane Nagar, Ambadgaon Poilce Station, Mahamarg, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9fa9859758486101975944df5e7096/8a9fa9859758486101975944df5e7096_21744_852911_large.jpg",
                    "https://images.nobroker.in/images/8a9fa9859758486101975944df5e7096/8a9fa9859758486101975944df5e7096_90302_409188_large.jpg",
                    "https://images.nobroker.in/images/8a9fa9859758486101975944df5e7096/8a9fa9859758486101975944df5e7096_58488_335493_large.jpg",
                    "https://images.nobroker.in/images/8a9fa9859758486101975944df5e7096/8a9fa9859758486101975944df5e7096_58467_760625_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹9,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
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
            },
             {
                id: 2.6,
                title: 
                 <label>1 BHK Flat, In Gokuldham Residency For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Gokuldham Residency, Pathardi Phata, Pathardi Road, Mumbai-Agra Highway, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/ff808181527970bd015281fe60fb318e/ff808181527970bd015281fe60fb318e_82636_682493_large.jpg",
                    "https://images.nobroker.in/images/ff808181527970bd015281fe60fb318e/ff808181527970bd015281fe60fb318e_60699_529674_large.jpg",
                    "https://images.nobroker.in/images/ff808181527970bd015281fe60fb318e/ff808181527970bd015281fe60fb318e_86051_983499_large.jpg",
                    "https://images.nobroker.in/images/ff808181527970bd015281fe60fb318e/ff808181527970bd015281fe60fb318e_59754_665740_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>900 sqft</div>
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
                id: 2.7,
                title: 
                 <label>1 BHK Flat, In Vinay Apartment For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Vinay, Pathardi Phata, Pathardi Road, Mumbai-Agra Highway, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9fac8497fd725f0197fdd8fa4b36b6/8a9fac8497fd725f0197fdd8fa4b36b6_89245_379809_large.jpg",
                    "https://images.nobroker.in/images/8a9fac8497fd725f0197fdd8fa4b36b6/8a9fac8497fd725f0197fdd8fa4b36b6_45536_820639_large.jpg",
                    "https://images.nobroker.in/images/8a9fac8497fd725f0197fdd8fa4b36b6/8a9fac8497fd725f0197fdd8fa4b36b6_80985_785053_large.jpg",
                    "https://images.nobroker.in/images/8a9fac8497fd725f0197fdd8fa4b36b6/8a9fac8497fd725f0197fdd8fa4b36b6_13059_810827_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹45,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1,250 sqft</div>
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
                id: 2.8,
                title: 
                 <label>1 BHK Flat, In Avenue Building For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Avenue, Govind Nagar, Near Four-Points, Mumbai-Agra Highway, Nashik</h6>
                    </label>,
                images: [
                   "https://images.nobroker.in/images/8a9fa08282687bf10182689b91a9139b/8a9fa08282687bf10182689b91a9139b_35023_573369_large.jpg",
                   "https://images.nobroker.in/images/8a9fb6827f0d9424017f0e2e6c372baf/8a9fb6827f0d9424017f0e2e6c372baf_28361_378616_large.jpg",
                   "https://images.nobroker.in/images/8a9fb6827f0d9424017f0e2e6c372baf/8a9fb6827f0d9424017f0e2e6c372baf_84733_43723_large.jpg",
                   "https://images.nobroker.in/images/8a9fb6827f0d9424017f0e2e6c372baf/8a9fb6827f0d9424017f0e2e6c372baf_47887_746563_large.jpg",                ],
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
                                <div style={{ fontWeight: 'bold' }}>900 sqft</div>
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
                id: 2.9,
                title: 
                 <label>1 BHK Flat, In Shrinivas Heights For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Shrinivas, Ekta Nagar, Jatra Hotel, Mumbai-Agra Highway, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9f85838ce82320018ce83867650bde/8a9f85838ce82320018ce83867650bde_24861_938098_medium.jpg",
                    "https://images.nobroker.in/images/8a9f91eb735b430001735bf3621f4b92/8a9f91eb735b430001735bf3621f4b92_20472_584785_large.jpg",
                    "https://images.nobroker.in/images/8a9f91eb735b430001735bf3621f4b92/8a9f91eb735b430001735bf3621f4b92_78891_276152_large.jpg",
                    "https://images.nobroker.in/images/8a9f91eb735b430001735bf3621f4b92/8a9f91eb735b430001735bf3621f4b92_8189_881970_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹8,500 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
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
            },
             {
                id: 2.10,
                title: 
                 <label>1 BHK Flat, In Nova Residency For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Nova, Keshavrao More Marg, Near Movie-Max Theater, College Road, Nashik</h6>
                    </label>,
                images: [
                   "https://images.nobroker.in/images/ff80818151920543015194c88cfa0b1f/ff80818151920543015194c88cfa0b1f_55846_316414_medium.jpg",
                   "https://images.nobroker.in/images/8a9fee82872474660187249cbb160412/8a9fee82872474660187249cbb160412_72412_198222_large.jpg",
                   "https://images.nobroker.in/images/8a9fee82872474660187249cbb160412/8a9fee82872474660187249cbb160412_80956_486961_large.jpg",
                   "https://images.nobroker.in/images/8a9fee82872474660187249cbb160412/8a9fee82872474660187249cbb160412_43494_469724_large.jpg",        
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
                                <div style={{ fontWeight: 'bold' }}>₹80,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1,000 sqft</div>
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
                <div className="card" style={{ width: 400, height: 590, minWidth: 400, minHeight: 590, maxWidth: 400, maxHeight: 590, overflow: 'hidden', boxSizing: 'border-box' }}>
                    <div className="card-body">
                        <h6 style={{ marginTop: 1, fontFamily: "sans-serif" }}>Preferred Type</h6>
                        <div class="form-check" style={{ display: 'flex', marginTop: 10 }}>
                            <input class="form-check-input " type="checkbox" value="" id="flexCheckDefault"
                            /> &nbsp; &nbsp;
                            <label class="form-check-label" for="flexCheckDefault" style={{ color: 'grey' }}>
                                Family
                            </label>
                            &nbsp;&nbsp;
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ marginLeft: 75 }} /> &nbsp; &nbsp;
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
                            <div className="row g-2" >
                                <div className="col-4">
                                    <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off"
                                        checked={selectedBHK === "1 RK"}
                                        onChange={() => handleSelect("1 RK")} />
                                    <label className="btn btn-outline-primary w-100" htmlFor="btncheck1">1 RK</label>
                                </div>
                                <div className="col-4">
                                    <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off"
                                        checked={selectedBHK === "1 BHK"}
                                        onChange={() => handleSelect("1 BHK")} />
                                    <label className="btn btn-outline-primary w-100" htmlFor="btncheck2">1 BHK</label>
                                </div>
                                <div className="col-4">
                                    <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off"
                                        checked={selectedBHK === "2 BHK"}
                                        onChange={() => handleSelect("2 BHK")} />
                                    <label className="btn btn-outline-primary w-100" htmlFor="btncheck3">2 BHK</label>
                                </div>


                                <div className="col-4">
                                    <input type="checkbox" className="btn-check" id="btncheck4" autoComplete="off"
                                        checked={selectedBHK === "3 BHK"}
                                        onChange={() => handleSelect("3 BHK")} />
                                    <label className="btn btn-outline-primary w-100" htmlFor="btncheck4">3 BHK</label>
                                </div>
                                <div className="col-4">
                                    <input type="checkbox" className="btn-check" id="btncheck5" autoComplete="off"
                                        checked={selectedBHK === "4 BHK"}
                                        onChange={() => handleSelect("4 BHK")} />
                                    <label className="btn btn-outline-primary w-100" htmlFor="btncheck5">4 BHK</label>
                                </div>
                                <div className="col-4">
                                    <input type="checkbox" className="btn-check" id="btncheck6" autoComplete="off"
                                        checked={selectedBHK === "4+ BHK"}
                                        onChange={() => handleSelect("4+ BHK")} />
                                    <label className="btn btn-outline-primary w-100" htmlFor="btncheck6">4+ BHK</label>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '20px',
                        marginLeft: '30px',
                    }}
                >
                    {(propertyData[selectedBHK] || []).map((property) => (
                        <div
                            key={property.id}
                            style={{
                                border: '1px solid #ccc',
                                borderRadius: '8px',
                                width: '400px',
                                backgroundColor: '#fff',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                                overflow: 'hidden',
                                textAlign: 'left',

                            }}
                        >
                            <Carousel fade indicators={false} style={{ margin: '10px', borderRadius: '5px' }}>
                                {property.images.map((img) => (
                                    <Carousel.Item key={img}>
                                        <img
                                            src={img}
                                            className="d-block w-100"
                                            alt={`Property ${img}`}
                                            style={{ height: '200px', objectFit: 'cover' }}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>

                            <div style={{ padding: '10px' }}>
                                <h5> {property.title}</h5>
                                <p>{property.location}</p>
                                <p> {property.price}</p>
                                <p> {property.description}</p>
                                <p> {property.contact}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
};

export default Search;
