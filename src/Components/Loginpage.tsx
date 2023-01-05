import Logo from "../assets/Lendsqr.svg";
import companyName from "../assets/companyName.svg";
import "../Styles/Loginpage.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Loginpage() {
    return (
        <Container>
            <Col>
                <div className='left_side'>
                    <img className='companyName' src={companyName} alt='' />
                    <img className='companylogo' src={Logo} />
                </div>
            </Col>

            <Col>
                <div className='right_side'>
                    <h1 className='Welcometext'>Welcome!</h1>
                    <span className='details'>Enter Details to Login</span>

                    <Form>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Control
                                style={{ marginTop: 60 }}
                                type='email'
                                placeholder='Email'
                            />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicPassword'>
                            <Form.Control type='password' placeholder='Password' />
                        </Form.Group>
                        <Form.Text style={{ color: "#39CDCC" }} className='text-muted'>
                            FORGOT PASSWORD?
                        </Form.Text>
                        <Button
                            className='submitButton'
                            style={{ background: "#39CDCC", border: "none" }}
                            type='submit'>
                            Submit
                        </Button>
                    </Form>
                </div>
            </Col>
        </Container>
    );
}
