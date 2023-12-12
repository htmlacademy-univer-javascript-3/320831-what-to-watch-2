import Logo from '../logo/logo';
import LOCALE from './footer.locale';

const Footer: React.FC = () => (
  <footer className="page-footer">
    <Logo/>
    <div className="copyright">
      <p>{LOCALE.COPYRIGHT}</p>
    </div>
  </footer>
);

export default Footer;
