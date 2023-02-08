
// styles
import '../styles/page.css'
import '../styles/coachesPage.css'  

// helper functions
import useWindowDimensions from "../customHooks/useWindowDimensions";


export default function AboutPage(props) {


    const { height, width } = useWindowDimensions();


    return (
        <>
            <div className='page' style={{height: height - 100, width: width}}>
                <div className="coaches-page">
                    <div className='page-content-container'>
                    
                        <p className='heading1'>
                            Welcome to our Sports Club!    
                        </p>

                        <p className='page-paragraph'>
                        We are a dynamic and inclusive community of athletes and sports enthusiasts, dedicated to promoting healthy lifestyles, fostering teamwork, and encouraging personal growth through physical activity. Our club offers a wide range of sports and recreational activities for all ages and skill levels, including soccer, basketball, volleyball, tennis, and many more.

                        Our state-of-the-art facilities, experienced coaches, and supportive environment provide the perfect setting for athletes to achieve their goals and reach their full potential. Whether you are a seasoned pro, just starting out, or simply looking for a fun and engaging way to stay active, our club has something for everyone.

                        Join us today and be a part of our passionate and dedicated community of athletes and sports enthusiasts!

                        </p>
                    
                    </div>
                </div>
            </div>
        </>

    );
}


