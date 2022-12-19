import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="lg:p-12 p-8 bg-neutral px-4">
                <div className="footer  text-neutral-content grid-cols-2 md:grid-cols-3">
                    <div>
                        <span className="footer-title">Services</span>
                        <Link to="/" className="link link-hover">Home</Link>
                        <Link to="" className="link link-hover">Design</Link>
                        <Link to="" className="link link-hover">Marketing</Link>
                        <Link to="" className="link link-hover">Advertisement</Link>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <Link to="" className="link link-hover">About us</Link>
                        <Link to="" className="link link-hover">Contact</Link>
                        <Link to="" className="link link-hover">Jobs</Link>
                        <Link to="" className="link link-hover">Press kit</Link>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <Link to="" className="link link-hover">Terms of use</Link>
                        <Link to="" className="link link-hover">Privacy policy</Link>
                        <Link to="" className="link link-hover">Cookie policy</Link>
                    </div>
                </div>
                <div className="text-center my-12 text-white">
                    <p>Copyright &copy; 2022 - All right reserved by REACT CALENDER</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;