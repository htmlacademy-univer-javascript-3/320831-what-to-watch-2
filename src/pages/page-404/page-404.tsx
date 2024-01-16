import {FC} from 'react';
import {Link} from 'react-router-dom';


export const Page404: FC = () => (
  <div>
    <h3>404 Not Found</h3>
    <Link to="/">На главную страницу</Link>
  </div>
);
