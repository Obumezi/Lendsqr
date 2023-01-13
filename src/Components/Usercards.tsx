import '../Styles/Usercards.css'
import users from '../assets/users.png'
import active from '../assets/active.png'
import loans from '../assets/loans.png'
import savings from '../assets/savings.png'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    
} from 'mdb-react-ui-kit';

export default function Usercards() {
    return (

        <div className="cardContainer" >
            
            <MDBCard style={{ width: '240px' }}>
                <MDBCardBody>
                    <MDBCardTitle><img src={users} /></MDBCardTitle>
                    <MDBCardText className='users' >
                        USERS
                    </MDBCardText>
                    <MDBCardText className='count'>
                        2,453
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>


            <MDBCard style={{ width: '240px' }}>
                <MDBCardBody>
                    <MDBCardTitle><img src={active} /></MDBCardTitle>
                    <MDBCardText className='users'>
                        ACTIVE USERS
                    </MDBCardText>
                    <MDBCardText className='count'>
                        2,453
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>


            <MDBCard style={{ width: '240px' }}>
                <MDBCardBody>
                    <MDBCardTitle><img src={loans} /></MDBCardTitle>
                    <MDBCardText className='users'>
                        USERS WITH LOANS
                    </MDBCardText>
                    <MDBCardText className='count'>
                        12,453
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>


            <MDBCard style={{ width: '240px' }}>
                <MDBCardBody>
                    <MDBCardTitle><img src={savings} /></MDBCardTitle>
                    <MDBCardText className='users'>
                        USERS WITH SAVINGS
                    </MDBCardText>
                    <MDBCardText className='count'>
                        102,453
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>




        </div>
    );
}