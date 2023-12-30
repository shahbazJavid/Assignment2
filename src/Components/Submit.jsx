const Submit = () => {
  return (
    <div class="container"> 
    <div className="athinfor">
    <h4 className="font-weight-bold py-3 px-5"><u>Submission</u></h4>
    </div>
    <form className="form">
        
        <div class="row mt-5">
        <h6 className="font-weight-bold col-6">Date</h6>
        <h6 className="font-weight-bold col-6">Signature</h6>
        </div>

        <div class="row mb-5">
            <div className="col-6 pt-1">
            <div class="outlines">
            <input placeholder="MM-DD-YYYY" type="date" class="form-control"/>
            </div>
            <div className="form-text">Date</div>
        </div>
            <div className="col-6 pt-1">
                <div className="outlines"> 
                <textarea class="fcontrol" id="textAreaExample1" rows="4"></textarea>
            </div>
        </div>
        </div>




        <hr className="hr up" />

        <div class="row my-5">
            <div className="col-12 justify-content-center d-flex mb-5">
            <button type="button" class="btn btn-success px-4">Submit Form</button>
        </div>
        </div>


    </form>
</div>);
};
export default Submit;

