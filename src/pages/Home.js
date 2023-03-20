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
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service.png' alt="services" />
                  <div>
                    <h6> Free Shipping </h6>
                    <p className='mb-0'> From all orders over $5 </p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-02.png' alt="services" />
                  <div>
                    <h6> Daily Surprise Offers </h6>
                    <p className='mb-0'> Save up to 25% off </p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-03.png' alt="services" />
                  <div>
                    <h6> Support 24/7 </h6>
                    <p className='mb-0'> Shop with an expert </p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-04.png' alt="services" />
                  <div>
                    <h6> Affordable Prices </h6>
                    <p className='mb-0'> Get Factory Default Price </p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-05.png' alt="services" />
                  <div>
                    <h6> Secure Payments </h6>
                    <p className='mb-0'> 100% Protected </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-3 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6> Music & Gaming </h6>
                    <p> 10 Items </p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6> Cameras </h6>
                    <p> 10 Items </p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6> Smart Tv </h6>
                    <p> 10 Items </p>
                  </div>
                  <img src='images/tv.jpg' alt='smartTv' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6> Smart Watches </h6>
                    <p> 10 Items </p>
                  </div>
                  <img src='images/headphone.jpg' alt='headphone' />
                </div>

                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6> Music & Gaming </h6>
                    <p> 10 Items </p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6> Cameras </h6>
                    <p> 10 Items </p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6> Smart Tv </h6>
                    <p> 10 Items </p>
                  </div>
                  <img src='images/tv.jpg' alt='smartTv' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6> Smart Watches </h6>
                    <p> 10 Items </p>
                  </div>
                  <img src='images/headphone.jpg' alt='headphone' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home