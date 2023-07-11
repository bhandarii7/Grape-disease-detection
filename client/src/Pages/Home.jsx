import React from 'react';
import About from './About/About';
import Form from './Form/Form';
import './home.css'
import plant from '../Images/plant.png'

const Home = () => {

 

    return (
        <>
            <div className='home' > 
            <div className='heading' >
                <h1>
                    Try our Deep Learning Powered <br />
                    Disease Detection
                </h1>
            </div>
            <Form/>    
            </div>

            <div className='info-section' >
                <img src={plant} alt="" />
                <div>
                    <h1>
                        Your Plants need you!
                    </h1>
                    <p>
                    Human society needs to increase food production by an estimated 70% by 2050 to feed an expected population size that is predicted to be over 9 billion people. Currently, infectious diseases reduce the potential yield by an average of 40%  with many farmer in developing world.
                    <br />
                    In this context, disease prediction in plants using deep learning can play a crucial role in increasing food production and addressing food security challenges. By accurately predicting and diagnosing plant diseases, farmers can take timely and effective measures to prevent crop losses and improve yields.
                    </p>
                </div>
            </div>
        
        
        </>

        
    );
};

export default Home;