// styles
import '../styles/page.css'
import '../styles/homePage.css'

// components
import PrimaryButton from "../components/UI/PrimaryButton";

// helper functions
import useWindowDimensions from "../customHooks/useWindowDimensions";

// navigation
import { useNavigate } from "react-router-dom";

export default function HomePage(props) {

    const { height, width } = useWindowDimensions();

    const navigate = useNavigate();

    return (
        <>
            <div className='page' style={{height: height - 100, width: width}}>
                <div className="home-page">

                    <p className='home-page-welcome'>
                        Welcome to Team Sport
                    </p>
                    
                    <PrimaryButton
                        buttonText="Register"
                        handlePress={() => navigate('/sports-club/register')}
                        />

                </div>
            </div>
        </>

    );
}
