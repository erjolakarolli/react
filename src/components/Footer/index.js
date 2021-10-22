import React from 'react';
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink
} from './FooterStyles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Footer = () => {
    return (
        <Box>
            <FooterLink href="/">
                <img src={"/logo.png"} alt="logo"/>
            </FooterLink>
            <Container>
                <Row>
                    <Column>
                        <FooterLink href="/releases">News</FooterLink>
                    </Column>
                    <Column>
                        <FooterLink href="/models">Models</FooterLink>
                    </Column>
                    <Column>
                        <FooterLink href="/gallery">Gallery</FooterLink>
                    </Column>
                    <Column>
                        <FooterLink href="/about">About</FooterLink>
                    </Column>
                    <Column>
                        <FooterLink href="/contact">Contacts</FooterLink>
                    </Column>
                </Row>
                <Row className="footer-social">
                   
                    <FooterLink href="#">
                        <FacebookIcon />
                    </FooterLink>
                
                    <FooterLink href="#">
                        <InstagramIcon />
                    </FooterLink>
            
                    <FooterLink href="#">
                        <TwitterIcon />
                    </FooterLink>
                
                    <FooterLink href="#">
                        <YouTubeIcon />
                    </FooterLink>
             
                </Row>
            </Container>
        </Box>
    )
}

export default Footer;