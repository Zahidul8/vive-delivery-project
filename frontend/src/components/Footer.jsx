import Logo from './Logo';

function Footer() {
  return (
    <footer className="bg-base-300 text-base-content py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Logo className="w-8 h-8 mr-2" />
              <h3 className="font-bold text-lg">Vive Delivery</h3>
            </div>
            <p>Your trusted partner for fast and reliable parcel delivery.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="link link-hover">Express Delivery</a></li>
              <li><a href="#" className="link link-hover">Standard Shipping</a></li>
              <li><a href="#" className="link link-hover">International</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="link link-hover">Help Center</a></li>
              <li><a href="#" className="link link-hover">Track Package</a></li>
              <li><a href="#" className="link link-hover">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="btn btn-circle btn-ghost">FB</a>
              <a href="#" className="btn btn-circle btn-ghost">TW</a>
              <a href="#" className="btn btn-circle btn-ghost">IG</a>
            </div>
          </div>
        </div>
        <div className="border-t border-base-content/20 mt-8 pt-8 text-center">
          <p>&copy; 2023 Vive Delivery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
