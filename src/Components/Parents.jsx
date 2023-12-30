const Parents= () => {
    
    return (
    <div class="container"> 
        <div className="athinformation">
        <h4 className="font-weight-bold py-3 px-5"><u>Parent/Guardian Information</u></h4>
        </div>
        <form className="form">
            <div class="row my-5">
                <h6 className="font-weight-bold">Name</h6>
                <div className="col pt-1">
                    <div className="outlines"> 
                    <input type="text" className="fcontrol"/>
                    <div className="form-text">First Name</div>
                </div>

            </div>
                <div className="col pt-1">
                    <div className="outlines">
                        <input type="text" className="fcontrol"/>
                        <div className="form-text">Last Name</div>
                    </div>
                </div>
            </div>

            

            <div class="row my-5">
                <h6 className="font-weight-bold">Home Number</h6>
                <div className="col-6 pt-1">
                    <div className="outlines"> 
                    <input type="text" className="fcontrol" placeholder="(000) 000-0000"/>
                </div>
            </div>
            </div>

            <div class="row my-5">
                <h6 className="font-weight-bold">Cell Number</h6>
                <div className="col-6 pt-1">
                    <div className="outlines"> 
                    <input type="text" className="fcontrol" placeholder="(000) 000-0000"/>
                </div>
            </div>
            </div>

            <div class="row my-5">
                <h6 className="font-weight-bold">E-mail</h6>
                <div className="col-6 pt-1">
                    <div className="outlines"> 
                    <input type="text" className="fcontrol" placeholder="ex:myname@example.com"/>
                    <div className="form-text">example@example.com</div>
                </div>
            </div>
            </div>
        </form>
  </div>);
};
export default Parents;
