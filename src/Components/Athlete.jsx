const Athlete = () => {
    
    return (
    <div class="container"> 
        <div className="athlete_info">
        <hr className="hr up" />
        <h4 className="font-weight-bold py-3 px-5">Athlete Information</h4>
        <hr className="hr down" />
        </div>
        <form className="formy">
            <div class="row my-5">
                <h6 className="font-weight-bold">Athlete's Name</h6>
                <div className="col pt-1">
                    <div className="form-outline"> 
                    <input type="text" className="form-control"/>
                    <div className="form-text">First Name</div>
                </div>

            </div>
                <div className="col pt-1">
                    <div className="form-outline">
                        <input type="text" className="form-control"/>
                        <div className="form-text">Last Name</div>
                    </div>
                </div>
            </div>

            <div class="row my-5">
                <h6 className="font-weight-bold">Birth Date</h6>
                <div className="col pt-1">
                    <div className="form-outline"> 
                    <select type="text" className="form-select">
                        <option value="1">Select Month</option>
                        <option value="2">January</option>
                        <option value="3">February</option>
                        <option value="4">March</option>
                        <option value="5">April</option>
                        <option value="6">May</option>
                        <option value="7">June</option>
                        <option value="8">July</option>
                        <option value="9">August</option>
                        <option value="10">September</option>
                        <option value="11">October</option>
                        <option value="12">November</option>
                        <option value="13">December</option>
                    </select>
                    <div className="form-text">Month</div>
                </div>
            </div>
                <div className="col pt-1">
                    <div className="form-outline">
                        <select type="text" className="form-select">  
                        <option value="1">Select Day</option>
                        <option value="2">Monday</option>
                        <option value="3">Tuesday</option>
                        <option value="4">Wednesday</option>
                        <option value="5">Thursday</option>
                        <option value="6">Friday</option>
                        <option value="7">Saturday</option>
                        <option value="8">Sunday</option>
                        </select> 
                        <div className="form-text">Day</div>
                    </div>
                </div>

                <div className="col pt-1">
                    <div className="form-outline">
                        <select type="text" className="form-select">
                        <option value="1">Select Year</option>
                        <option value="2">2000</option>
                        <option value="3">2001</option>
                        <option value="4">2002</option>
                        <option value="5">2003</option>
                        <option value="6">2004</option>
                            </select>
                        <div className="form-text">Year</div>
                    </div>
                </div>
            </div>

            <div class="row my-5">
                <h6 className="font-weight-bold">Grade</h6>
                <div className="col-6 pt-1">
                    <div className="form-outline"> 
                    <input type="text" className="form-control" placeholder="ex:4"/>
                </div>
            </div>
            </div>

            <div class="row mt-5">
                <h6 className="font-weight-bold">Gender</h6>
                <div className="col-12 pt-1">
                    <div className="form-check"> 
                    <input class="form-check-input" type="radio" name="gender" id="male" value="male"/>
                    <label class="form-check-label" for="male">Male</label>
                    </div>
                </div>

                <div className="col-12 pt-1">
                    <div className="form-check"> 
                    <input class="form-check-input" type="radio" name="gender" id="female" value="female"/>
                    <label class="form-check-label" for="female">Female</label>
                    </div>
                </div>

            </div>
           

            <div class="row my-5">
                <h6 className="font-weight-bold">Address</h6>
                <div className="col-12 pt-1">
                    <div className="form-outline"> 
                    <input type="text" className="form-control"/>
                    <div className="form-text">Street Address</div>
                    </div>
                </div>

                <div className="col-12 pt-4">
                    <div className="form-outline">
                        <input type="text" className="form-control"/>
                        <div className="form-text">Street Address Line 2</div>
                    </div>
                </div>

                <div className="col pt-4">
                    <div className="form-outline">
                        <input type="text" className="form-control"/>
                        <div className="form-text">City</div>
                    </div>
                </div>
                <div className="col pt-4">
                    <div className="form-outline">
                        <input type="text" className="form-control"/>
                        <div className="form-text">State / Province</div>
                    </div>
                </div>

                <div className="col-12 pt-4">
                    <div className="form-outline">
                        <input type="text" className="form-control"/>
                        <div className="form-text">Postal / ZipCode</div>
                    </div>
                </div>
            </div>

        </form>
  </div>);
};
export default Athlete;
