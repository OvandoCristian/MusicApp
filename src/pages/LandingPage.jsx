import { Navigate, useNavigate } from 'react-router-dom';
import "../assets/styles/LandingPage.css"


function LandingPage() {
    const navigate = useNavigate();
    return (  
       
       <>
        <div className='div-landing-content'>
            <div>
                <div className='container'>
                    <div className='container-text'>
                        <h4>“Escoge como quieres 
                            desconectarte del mundo”</h4>
                    </div>
                    <div className='div-botton'>
                    <button onClick={()=>{navigate('/Login')}}>INICIAR SESION</button>
                    </div>
                </div>
            </div>
        </div>
       </>
    );
}

export default LandingPage;