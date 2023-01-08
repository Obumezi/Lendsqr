import '../Styles/Usercards.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function Usercards() {
    return (

    <div className="cardContainer">
        <MDBCard style={{width:'240px'}}>
            <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </MDBCardText>
                <MDBBtn>Button</MDBBtn>
            </MDBCardBody>
        </MDBCard>
            <MDBCard style={{ width: '240px' }}>
                <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn>Button</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            <MDBCard style={{ width: '240px' }}>
                <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn>Button</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            

            <MDBCard style={{ width: '240px' }}>
                <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn>Button</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            

        

        </div>
    );
}