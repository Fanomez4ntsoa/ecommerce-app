import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative'>
                <img src='images/main-banner-1.jpg' className='img-fluid rounded-3' alt='main banner' />
                <div className='main-banner-content position-absolute '>
                  <h4> SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From to $999 or $41.62/mo.</p>
                  <Link className='button'> BUY NOW  </Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                <div className='small-banner position-relative'>
                  <img src='images/catbanner-01.jpg' className='img-fluid rounded-3' alt='small banner' />
                  <div className='small-banner-content position-absolute '>
                    <h4> FOR PROS TECH.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From to $999 <br/> or $41.62/mo.</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img src='images/catbanner-02.jpg' className='img-fluid rounded-3' alt='main banner' />
                  <div className='small-banner-content position-absolute '>
                    <h4> NEW ARRIVAL.</h4>
                    <h5>Apple Watch serie 8</h5>
                    <p>From to $2950 <br/> or $241.62/mo.</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img src='images/catbanner-03.jpg' className='img-fluid rounded-3' alt='main banner' />
                  <div className='small-banner-content position-absolute '>
                    <h4> BEST TECH.</h4>
                    <h5>Ipad Air.</h5>
                    <p>From to $1999 <br/> or $241.62/mo.</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img src='images/catbanner-04.jpg' className='img-fluid rounded-3' alt='main banner' />
                  <div className='small-banner-content position-absolute '>
                    <h4> POPULAR TECH.</h4>
                    <h5>Airpods Max</h5>
                    <p>From to $1599 <br/> or $171.62/mo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>

      </section>
    </>
  )
}

export default Home