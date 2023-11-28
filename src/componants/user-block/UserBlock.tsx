import React from 'react';
import LOCALE from './UserBlock.locale';

// Вероятно надо передавать или брать из контекста src для аватара
const UserBlock: React.FC = () => (
  <ul className="user-block">
    <li className="user-block__item">
      <div className="user-block__avatar">
        <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
      </div>
    </li>
    <li className="user-block__item">
      <a className="user-block__link">{LOCALE.OUT}</a>
    </li>
  </ul>
);

export default UserBlock;
