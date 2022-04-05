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
import ArrowCircleUpIcon from '@material-ui/icons/ArrowUpward';

const Footer = () => {
    return (
        <Box className='footer'>
            <FooterLink href="/">
                <img src={"/logo.svg"} alt="logo"/>
            </FooterLink>
            <Container>
                <Row className='footer-links' >
                    <Column>
                        <FooterLink href="/announcement">Announcement</FooterLink>
                    </Column>

                    <Column>
                        <FooterLink href="/gallery">Gallery</FooterLink>
                    </Column>
                    <Column>
                        <FooterLink href="/blog">Blog</FooterLink>
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
                 <FooterLink href="#top" className='footerIconRow' >
                        <ArrowCircleUpIcon className='footerIcon' />
                 </FooterLink>
            </Container>
        </Box>
    )
}

export default Footer;