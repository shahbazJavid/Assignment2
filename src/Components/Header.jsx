import image from './image.png'


const Header = () => {
  return (
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                       <img src={image} alt='Camp in Summmer' height="400px" className=''/>
                      <h1 className='p-4 font-weight-bold'>Athlete Registration in Summer Camp</h1>
                    </div>
                </div>
            </div>
        );
};
export default Header;
