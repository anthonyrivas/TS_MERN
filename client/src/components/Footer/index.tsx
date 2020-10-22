import {copyFile} from 'fs';
import React from 'react';

const Footer: React.FC = () => (
    <footer className="footer">
        <div></div>
        <h4>
            copyright&copy;{new Date().getFullYear()}
            <span>RTOMB</span> all rights reserved
        </h4>
    </footer>
);

export default Footer;
