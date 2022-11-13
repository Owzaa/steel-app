import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function ServiceTabs() {
    return (
        <CardGroup className="container-fluid p-1 m-3 gap-2">
            <Card>
                <Card.Img variant="top" src="../images/d1.png" />
                <Card.Body>
                    <Card.Title className="text-muted text-center">
                    <h2 className='text-center'>
                    Steel Structure Design    
                    </h2> 
                    </Card.Title>
                    <Card.Text>
                        When we work with you to design your steel structure, our experienced team 
                        spends a substantial amount of time, prior to the commencement of your project,
                        understanding your needs... 
                    </Card.Text>
                </Card.Body>
          
            </Card>
            <Card>
                <Card.Img variant="top" src="../images/d2.png" />
                <Card.Body>
                    <Card.Title className="text-muted text-center">
                        <h2 className='text-center'>
                        Steel Structure Detailing
                        </h2>
                        </Card.Title>
                    <Card.Text>
                        We provide detailed structural steel fabrication and erection drawings including multi-disciplined
                        conceptual layouts and fabrication detailing of structures for the industrial, retail, mining and
                        agricultural sectors. 
                    </Card.Text>
                </Card.Body>
           
            </Card>
    
            <Card>
                <Card.Img variant="top" src="../images/d4.png" />
                <Card.Body>
                    <Card.Title className="text-muted text-center">
                    <h2 className='text-center'>
                    Steel Structure Erection
                    </h2>
                    </Card.Title>
                    <Card.Text>
                        Our experienced and dedicated teams ensure the erection of all steel structures are 
                        completed on time and according to strict All Steel Works specifications. Our installation 
                        teams are committed to ensuring your structure is a complete success. 
                    </Card.Text>
                </Card.Body>

            </Card>
        </CardGroup>
    );
}

export default ServiceTabs;