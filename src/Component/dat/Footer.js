import '../../css/Footer.css';
function Footer() {
  return (
    <div className="footer py-2 lh-lg pt-5">
        <div className="container">
            <div className="row text-dark col-12">
                <div className="col-3">
                    <ul className="list-unstyled">
                        <li>Earn VIP Fifts</li>
                        <li>Purchase history</li>
                        <li>Learn about installment purchase</li>
                        <li>Warranty Policy</li>
                        <li>See more</li>
                    </ul>
                </div>
                <div className="col-3">
                    <ul className="list-unstyled">
                        <li>Company introduction</li>
                        <li>Recruitment</li>
                        <li>Send Suggestions, complaints</li>
                        <li>Find supermarkets</li>
                        <li>View mobile version</li>
                    </ul>
                </div>
                <div className="col-3">
                    <ul className="list-unstyled">
                        <li className="fw-bold">Call center( Free Call)</li>
                        <li>Call to buy: 1800.1060 (7:30 - 22:00)</li>
                        <li>Technique: 1800.1763 (7:30 - 22:00)</li>
                        <li>Complain: 1800.1062 (8:00 - 21:30)</li>
                        <li>Guarantee: 1800.1064 (8:00 - 21:00)</li>
                    </ul>
                </div>
                <div className="col-3">
                    <ul className="list-unstyled">
                        <li  className="fw-bold">Follow us on social media</li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>  
  );
}

export default Footer;
