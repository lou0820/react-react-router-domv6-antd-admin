import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { routers } from './router/routers';


function App() {
  const renderRouter = (routersList: any) => 
    routersList.map((routerItem: any, index: number) => 
      routerItem.path ? (
        <Route
          key={index}
          path={routerItem.path}
          element={routerItem.element}
          {...(routerItem.props = {})}
        >
          {routerItem.children && renderRouter(routerItem.children)}
        </Route>
      ) : (
        <Route
          key={index}
          path={routersList.from}
          element={<Navigate to={routersList.to} replace />}
        />
      )
    )

  return (
    <HashRouter>
      <Routes>{renderRouter(routers)}</Routes>
    </HashRouter>
  );
}

export default App;
