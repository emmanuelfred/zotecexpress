import React from 'react'
import { Link } from 'react-router-dom'
import pic_404 from '../Component/Assets/site-image/404.png'
import './Css/Error.css'

function Error() {
  return (
    <div className="">
      <div className="banner">

      </div>
      <section className="container page-not-found section-b-space">
      
            
                
                    <div class="page-image">
                        <img src={pic_404} className="img-fluid blur-up lazyload" alt=""/>
                    </div>
                

                <div >
                    <div className="page-container pass-forgot">
                        <div>
                            <h2>page not found</h2>
                            <p>The page you are looking for doesn't exist or an other error occurred. Go back, or head
                                over to choose a new direction.</p>
                            <Link className="btn btn-solid-default">Back Home Page</Link>
                        </div>
                    </div>
                </div>
            
        
    </section>
    </div>
  )
}

export default Error