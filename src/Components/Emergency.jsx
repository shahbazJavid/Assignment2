const Emergency = () => {
  return (
    <div class="container"> 
        <div className="athinfo">
        <h4 className="font-weight-bold py-3 px-5"><u>Emergency Information</u></h4>
        </div>
        <form className="form">
            
            <div class="row mt-5">
            <h6 className="font-weight-bold col-6">Emergency Contact's Name</h6>
            <h6 className="font-weight-bold col-6">Relationship</h6>
            </div>
            <div class="row mb-5">
                <div className="col-3 pt-1">
                    <div className="outlines"> 
                    <input type="text" className="fcontrol"/>
                    <div className="form-text">First Name</div>
                </div>

            </div>
                <div className="col-3 pt-1">
                    <div className="outlines">
                        <input type="text" className="fcontrol"/>
                        <div className="form-text">Last Name</div>
                    </div>
                </div>
                
                <div className="col-6">
                
                    <div className="outlines">
                        <select type="text" className="form-select" placeholder="Please Select">
                        <option>Please Select</option>
                        <option>Brother</option>
                        <option>Sister</option>
                        <option>Friend</option>
                        </select>
                    </div>
                </div>

            </div>

            <div class="row my-5">
                <h6 className="font-weight-bold">Phone Number</h6>
                <div className="col-6 pt-1">
                    <div className="outlines"> 
                    <input type="text" className="fcontrol" placeholder="(000) 000-0000"/>
                </div>
            </div>
            </div>

            <div class="row my-5">
                <h6 className="font-weight-bold">Alt. Phone Number</h6>
                <div className="col-6 pt-1">
                    <div className="outlines"> 
                    <input type="text" className="fcontrol" placeholder="(000) 000-0000"/>
                </div>
            </div>
            </div>
               

        </form>
  </div>);
};
export default Emergency;

