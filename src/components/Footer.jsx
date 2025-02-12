import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10 mt-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold">BuildMend</h3>
                        <p className="mt-3 text-gray-400">
                            Your trusted AI-powered home repair assistant. Connect with experts and get solutions instantly.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold">Quick Links</h3>
                        <ul className="mt-3 space-y-2">
                            <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
                            <li><Link to="/chat" className="text-gray-400 hover:text-white transition">Chat</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
                            <li><Link to="/profile" className="text-gray-400 hover:text-white transition">Profile</Link></li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h3 className="text-xl font-bold">Follow Us</h3>
                        <div className="mt-3 flex space-x-4">
                            <a href="https://facebook.com" className="text-gray-400 hover:text-white transition">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://twitter.com" className="text-gray-400 hover:text-white transition">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://instagram.com" className="text-gray-400 hover:text-white transition">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500">
                    &copy; {new Date().getFullYear()} BuildMend. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
