import React, {useState, useEffect } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';

function Rows(props) {
  const {rp, cn, ml, tz, ip, ct, env} = props;
  const [allValues, setAllValues] = useState({
    resourceprefix: '', 
    customer: '', 
    location: '', 
    timezone: '', 
    iprange: '', 
    commontags: '', 
    environment: ''
  });

  const changeHandler = (e) => {
    setAllValues({...allValues, [e.target.name]: e.target.value})
 }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(allValues)
  }

  return (
    <FormContainer>
    <Form onSubmit={handleSubmit}>
      <RowContainer>
      <Row>
        <Col>
        <Title>Resource Prefix</Title>
          <Form.Control type="text" id="resourceprefix" name="resourceprefix" value={allValues.resourceprefix} onChange={changeHandler} placeholder={rp} />
        </Col>
      </Row>
      </RowContainer>
      <RowContainer>
      <Row>
        <Col>
        <Title>Customer Name</Title>
          <Form.Control type="text" id="customer" name="customer" onChange={changeHandler} placeholder={cn}/>
        </Col>
      </Row>
      </RowContainer>
      <RowContainer>
      <Row>
        <Col>
        <Title>Main Location</Title>
          <Form.Control type="text" id="location" name="location" onChange={changeHandler} placeholder={ml}/>
        </Col>
      </Row>
      </RowContainer>
      <RowContainer>
      <Row>
        <Col>
        <Title>Timezone</Title>
          <Form.Control type="text" id="timezone" name="timezone" onChange={changeHandler} placeholder={tz}/>
        </Col>
      </Row>
      </RowContainer>
      <RowContainer>
      <Row>
        <Col>
        <Title>Authorized IP Ranges</Title>
          <Form.Control type="text" id="iprange" name="iprange" onChange={changeHandler} placeholder={ip}/>
        </Col>
      </Row>
      </RowContainer>
      <RowContainer>
      <Row>
        <Col>
        <Title>Common tags</Title>
          <Form.Control type="text" id="commontags" name="commontags" onChange={changeHandler} placeholder={ct}/>
        </Col>
      </Row>
      </RowContainer>
      <RowContainer>
      <Row>
        <Col>
        <Title>Environment</Title>
          <Form.Control type="text" id="environment" name="environment" onChange={changeHandler} placeholder={env}/>
        </Col>
      </Row>
      </RowContainer>
      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
 </FormContainer>
  )
}

export default Rows

const FormContainer = styled.div`
display: flex; 
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 0.5rem;
margin-bottom: 0.5rem;
z-index: 1;
background-color: white;
height: 48rem;
width: 20rem; 
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.25) 
0px 54px 55px, 
rgba(0, 0, 0, 0.12) 0px -12px 30px, 
rgba(0, 0, 0, 0.12) 0px 4px 6px, 
rgba(0, 0, 0, 0.17) 0px 12px 13px, 
rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

const RowContainer = styled.div`
margin-bottom: 20px;
border-radius: 1px solid black;
`

const Title = styled.p`
font-weight: 700; 
border-bottom: 1px solid black;
`

const SubmitButton = styled.button`
display: flex; 
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid black;
border-radius: 10px;
height: 40px;
width: 100%;
background-color: white;

&:hover {
  background-color: black;
  color: white;
}
`