import React, { Fragment, useState } from 'react';
import { ItemType, TabProps, TabsProps } from './tabs.types';

export const Tab: React.FC<TabProps> = ({ children }) => (<Fragment key={children.key}>{children}</Fragment>);

const Item: React.FC<ItemType & { activeKey: string; onClick: (key: string) => void }> = ({
  label,
  option,
  activeKey,
  onClick
}) => (
  <li className={`film-nav__item ${activeKey === option ? 'film-nav__item--active' : ''}`}>
    <div
      className="film-nav__link"
      key={option}
      onClick={() => {
        onClick(option);
      }}
    >
      {label}
    </div>
  </li>
);

const Tabs: React.FunctionComponent<TabsProps> = ({
  items, defaultActiveKey, children
}) => {
  const [activeKey, setTabActiveKey] = useState<string>(defaultActiveKey ?? items[0].option);
  const handleClick = (key: string) => setTabActiveKey(key);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {items.map((item) => <Item {...item} key={item.option} activeKey={activeKey} onClick={handleClick} />)}
        </ul>
      </nav>
      {children?.find((child) => child?.key === activeKey) ?? null}
    </div>
  );
};

export default Tabs;
