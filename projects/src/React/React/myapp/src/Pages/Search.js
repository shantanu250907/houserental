import React from 'react'
import './Search.css';

const Search = () => {
    return (
        <>
            <div className="c" style={{ backgroundColor: '#F2F2F2' }}>
                <div className="card" style={{ width: 400, height: 590, marginLeft: 50 }}>
                    <div className="card-body">
                        <h6 style={{ marginTop: 20, fontFamily: "sans-serif" }}>BHK Type</h6>
                        <div class="container" style={{ marginTop:20}}>
                            <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" />
                                <label class="btn btn-outline-primary" for="btncheck1">1 RK</label>

                                <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" />
                                <label class="btn btn-outline-primary" for="btncheck2">1 BHK</label>

                                <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" />
                                <label class="btn btn-outline-primary" for="btncheck3">2 BHK</label> 
                            </div>
                        </div>
                         <div class="container" style={{ marginTop:20}}>
                            <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" />
                                <label class="btn btn-outline-primary" for="btncheck1">3 BHK</label>

                                <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" />
                                <label class="btn btn-outline-primary" for="btncheck2">4 BHK</label>

                                <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" />
                                <label class="btn btn-outline-primary" for="btncheck3">4+ BHK</label> 
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Search
