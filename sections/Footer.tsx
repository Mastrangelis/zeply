'use client';

import { Container, Divider } from '@/components';

const Footer = () => (
    <div className="footer" data-cy="footer">
        <Container>
            <Divider />
            <div className="footer__wrapper" data-cy="footer-wrapper">
                <span>Assignement for Zeply | FullStack JS Role</span>
                <span>@All rights reserved | BTCScan</span>
            </div>
        </Container>
    </div>
);

export default Footer;
