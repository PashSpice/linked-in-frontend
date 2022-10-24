import { Spinner } from 'react-bootstrap'

const Loader = ()=>{
    return(
      <div className='spinnerContainer'>

        <div >
          <img className='loadLogo' src="https://blog.waalaxy.com/wp-content/uploads/2021/01/LinkedIn-Symbole.png" alt='logo for loading'/>

        <Spinner animation="border" role="status">
      </Spinner>
      </div>
        </div>
      
    )
    }
    export default Loader