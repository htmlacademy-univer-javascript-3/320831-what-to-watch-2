import { useState, useLayoutEffect } from 'react';
import { Router } from 'react-router-dom';
import type { BrowserHistory } from 'history';

export interface HistoryRouterProps {
  history: BrowserHistory;
  basename?: string;
  children?: React.ReactNode;
}

function HistoryRouter({
  basename,
  children,
  history,
}: HistoryRouterProps) {
  const [historyState, setHistoryState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setHistoryState), [history]);

  return (
    <Router
      basename={basename}
      location={historyState.location}
      navigationType={historyState.action}
      navigator={history}
    >
      {children}
    </Router>
  );
}

export default HistoryRouter;
