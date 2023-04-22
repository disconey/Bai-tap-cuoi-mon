import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CreateNewTask from "./CreateNewTask";
import { APP_ROUTER } from "./constant/Route";
import AllTaskPage from "./pages/AllTaskPage";
import NewTaskPage from "./pages/NewTaskPage";
import DoingPage from "./pages/DoingPage";
import DonePage from "./pages/DonePage";
import HeaderNav from "./components/HeaderNav";
import DetailTask from "./components/DetailTask";
import EditProductPage from "./pages/DetailProductPage";
import DetailProductPage from "./pages/DetailProductPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={APP_ROUTER.ALL_TASK_PAGE} element={
            <HeaderNav>
              <AllTaskPage />
            </HeaderNav>
          } />
          <Route path={APP_ROUTER.CREATE_NEW_TASK} element={<HeaderNav><CreateNewTask /></HeaderNav>} />
          <Route path={APP_ROUTER.NEW_TASK_PAGE} element={<HeaderNav><NewTaskPage /></HeaderNav>} />
          <Route path={APP_ROUTER.DOING_PAGE} element={<HeaderNav><DoingPage /></HeaderNav>} />
          <Route path={APP_ROUTER.DONE_PAGE} element={<HeaderNav><DonePage /></HeaderNav>} />
          <Route path={APP_ROUTER.EDIT_PRODUCT} element={<HeaderNav><DetailProductPage /></HeaderNav>} />
          <Route path="/" element={<Navigate to={APP_ROUTER.ALL_TASK_PAGE} replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
