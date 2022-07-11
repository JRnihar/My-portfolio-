import React from 'react';
import './Home.css'
// import img from '../../public/image/dog.glb'



const Home = () => {
    return (
        <div className='home-container mt-5 container  '>
            <div>
                {/* <img src='https://raw.githubusercontent.com/craftzdog/craftzdog-homepage/master/public/card.png' className='img-fluid' alt="img" srcset="" /> */}
                {/* <img src={require('../../public/image/dog.glb')} className='img-fluid' alt="img" srcset="" /> */}
            </div>
            <div className='heading container '>
                <h2>Hello, I'm an indie app developer based in Japan!o</h2>
            </div>
            <div className='row mt-3'>
                <div className='col-md-6'>
                    <h1>Takuya Matsuyama</h1>
                    <p>Digital Craftsman ( Artist / Developer / Designer )</p>
                </div>
                <div className='col-md-6'>
                    <img src="https://www.craftz.dog/_next/image?url=%2Fimages%2Ftakuya.jpg&w=128&q=75" alt="" srcset="" className='img-fluid rounded-circle' />
                </div>
            </div>

            {/* Work-section */}

            <div className=' mt-3'>
                <h3>Work</h3>
                <p className='lead'>
                    <span className='ms-4'>Takuya</span> is a freelance and a full-stack developer based in Osaka with a passion for building digital services/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his camera. Currently, he is living off of his own product called Inkdrop. He publishes content for marketing his products and his YouTube channel called "Dev as Life" has more than 100k subscribers.
                </p>
                <div className=' d-flex justify-content-center'>
                    <button className='btn  fw-bold'>My portfolio</button>
                </div>
            </div>

            {/* Bio-section */}

            <div className='mt-3'>
                <h3>Bio</h3>
                <p><span className='me-3 fw-bold' >1984</span> Born in Osaka (大阪), Japan.</p>
                <p><span className='me-3 fw-bold' >2010</span> Completed the Master's Program in the Graduate School of Information    Science at Nara Institute of Science and Technology (奈良先端科学技術 <span className='me-3'>大学院大学情報科学研究科修士課程</span>)</p>
                <p><span className='me-3 fw-bold' >2010</span>Worked at Yahoo! Japan (ヤフー株式会社入社)</p>
                <p><span className='me-3 fw-bold' >2012</span> to present  Working as a freelancer</p>
            </div>

            {/* Bio-section */}

            <div>
                <h3>Work</h3>
                <p className='lead'>
                    <span className='ms-4'>Art,</span> Music, Drawing, Playing Drums, Photography, Leica, Machine Learning
                </p>
            </div>

            {/* Web-section */}

            <div className='mt-3'>
                <h3>On the Web</h3>
                <div className='mt-3'>
                    <p><span className='me-3 fw-bold' ><i class="fa-brands fa-github"></i></span> @craftzdog</p>
                    <p><span className='me-3 fw-bold' ><i class="fa-brands fa-twitter"></i></span> @inkdrop_app (English)</p>
                    <p><span className='me-3 fw-bold' ><i class="fa-brands fa-twitter"></i></span>@craftzdog (日本語)</p>
                    <p><span className='me-3 fw-bold' ><i class="fa-brands fa-instagram"></i></span> @craftzdog</p> 
                </div>
            </div>


        </div>
    );
};

export default Home;