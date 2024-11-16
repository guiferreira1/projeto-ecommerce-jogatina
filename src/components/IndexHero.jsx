import minecraft from '../assets/carousel-minecraft.jpg'
import darksouls from '../assets/carousel-darksouls.jpg'
import devilmaycry from '../assets/carousel-devilmaycry.jpg'
import rdr2 from '../assets/carousel-rdr2.jpg'
import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';


function IndexHero() {
    return(
        <>
            <div className="s-hero">
                <div className="container">
                    <div className="carousel">
                        <Carousel fade>
                            <Carousel.Item>
                                <img src={minecraft} alt="" className='carousel-img' />
                                <Carousel.Caption className='carousel-text'>
                                <h3>Minecraft</h3>
                                <p>De <s>R$249,90</s> por R$59,90</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={darksouls} alt="" className='carousel-img' />
                                <Carousel.Caption className='carousel-text'>
                                <h3>Dark Souls Remastered</h3>
                                <p>De <s>R$199,90</s> por R$89,90</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={devilmaycry} alt="" className='carousel-img' />
                                <Carousel.Caption className='carousel-text'>
                                <h3>Devil May Cry 5</h3>
                                <p>De <s>R$159,90</s> por R$39,90</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={rdr2} alt="" className='carousel-img' />
                                <Carousel.Caption className='carousel-text'>
                                <h3>Red Dead Redemption 2</h3>
                                <p>De <s>R$299,90</s> por R$69,90</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
            
            
        </>
    );
}

export default IndexHero;