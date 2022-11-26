import React from 'react';
import ServiceTabs from '../Card-Images/cardTabs';
import Card from 'react-bootstrap/Card';
import WorkFlow from '../Utilities/WorkFlow';
import CarouselExample from '../Carousel/Slider'
function HomeView() {

    return (
        
        <div flex className="container-fluid">
            <div className='container-fluid'>
                <CarouselExample/>
            </div>

            <div className='container-text'>
                <h1 className='text-muted p-3 text-larger text-center text-uppercase'>
                <b>All Steel Works (Pty) Ltd</b>
                </h1>
            </div>

            <section className='content' id="mottoTextContainer">

                <div className='container' id='mottoText'>
                    <h3 className='text-center  text-black-50'>
                        <i>" We provide a complete turnkey solution when working on structural
                            steel projects taking care of everything from the design of all
                            structural components, detailing and production of fabrication and
                            erection drawings, to the final fabrication and erection. "
                        </i>
                    </h3>
                </div>
                <hr />
            </section>


            <section className='container mt-0' id="serviceTabs">
                <h1 className='text-muted p-1 text-larger mb-0 text-uppercase '>
                    <b><code>Why work with</code> ASW ?</b>
                </h1>
                <div className="text-muted mt-0">
                    <h3 className='text-black-50 p-3 mt-0'>
                        Everything we work on is designed in as aesthetically pleasing manner
                        in order to blend with the surrounding building and environment - while
                        retaining its own unique individuality. To complete our turnkey offering,
                        we use our own transport fleet to deliver materials to various construction
                        sites in South Africa and the sub-Saharan area
                    </h3>
                </div>
                <div className='container-fluid pt-0 mb-0'>
                    <h1 className='text-black-50 p-3 text-larger text-uppercase'>
                        OUR SERVICES
                    </h1>

                    <div className="text-muted mt-0">
                        <p className='text-black-50 pt-1 mt-0'>
                            We start at the beginning of each project with your vision,
                            starting with design, moving onto detailing and production of
                            fabrication and then finally the erection of your steel structure.
                        </p>
                    </div>
                    <ServiceTabs className="container-flex b-0 mb-0 pb-0 " />

                    <div className="container-flex fit-content mt-0 pt-0" id='callToActionContainer'>
                        <Card className="container-flex img-fluid text-white">
                            <Card.Img height="150px" src="../images/cta.png" alt="Card image" className="responsive-image fluid" />
                            <Card.ImgOverlay className='container-flex justify-center t-0 pt-0 bg-dark bg-opacity-50 text-xlg border-radius-2'>
                                <Card.Title className='text-center p-1 ' >
                                   SPECIALISTS IN AFRICA
                                    AND 
                                    THE SUB-SAHARAN AREA....
                               
                                
                                </Card.Title>

                            </Card.ImgOverlay>
                        </Card>
                    </div>
                </div>
            </section>

<hr/>
            <section className='container mt-4' id="ProcessFlow">
                <div className='container-flex'>
                    <h1 className='text-center text-black-50 p-3 text-larger text-uppercase'>
                       OUR WORKFLOW PROCESS
                    </h1>
                    <WorkFlow/>
                </div>

            </section>

        </div>
    
    )
}

export default HomeView
