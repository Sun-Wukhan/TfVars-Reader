import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Rows from './component/Rows'

export default function Home() {
  return (
    <Container>
      <FieldContainer>
      <Rows rp={"LX, ZX, PX"} cn={"McDonalds"} ml={"Canada East"} tz={"EST"} ip={"0.0.0.0"} ct={"Bills"} env={"dev"}/>
      <Divider/>
      </FieldContainer>
    </Container>
  )
}

const Container = styled.div`
display: flex;
flex-direction: column; 
justify-content: center;
align-items: center;
z-index: -10;
background-image: url('https://images.template.net/93820/white-line-background-gssh5.jpg');
background-size: cover; 
background-position: center center; 
height: 100%; 
width: 100%; 
`

const Divider = styled.div`
margin: 2rem; 
`

const FieldContainer = styled.div`
display: flex;
flex-direction: row; 
justify-content: center;
align-items: center;
height: 100%;
`