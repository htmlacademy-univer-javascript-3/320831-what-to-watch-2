import { FC, useCallback, useState } from 'react';
import { ITab } from './types.ts';


interface ITabsProps {
  tabs: ITab[];
}
export const Tabs: FC<ITabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleSetActiveTab = useCallback((index: number) => () => {
    setActiveTab(index);
  }, []);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabs.map((tab, index) => (
            <li
              key={tab.label}
              className={`film-nav__item ${index === activeTab ? 'film-nav__item--active' : ''}`}
            >
              <div
                className="film-nav__link"
                onClick={handleSetActiveTab(index)}
              >
                {tab.label}
              </div>
            </li>
          ))}
        </ul>
      </nav>
      <div className="tab-content">
        {tabs[activeTab].component}
      </div>
    </div>
  );
};
