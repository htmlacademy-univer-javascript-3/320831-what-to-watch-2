import Logo from '../logo/Logo';
import LOCALE from './Footer.locale';

const Footer: React.FC = () => (
  <footer className="page-footer">
    <Logo/>
    <div className="copyright">
      <p>{LOCALE.COPYRIGHT}</p>
    </div>
  </footer>
);

export default Footer;
