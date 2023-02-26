import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoutes/ProtectedRoutes";
import { Start } from "./pages/Start/Start"
import { Registration } from "./pages/Registration/Registration";
import { Main } from "./pages/Main/Main";
import { Compilations } from "./pages/Compilations/Compilations";
import { NotFound } from "./pages/NotFound/NotFound";

export const AppRoutes = ({user}) => {
  return (
    <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/registration" element={<Registration/>}/>
          <Route element={<ProtectedRoute isAllowed={true}/>}>
            <Route path="/main" element={<Main/>}/>
            <Route path="/playlist/:id" element={<Compilations title={'Подборки'}/>}/>
            <Route path="/my" element={<Compilations title={'Мои треки'}/>}/>
            <Route path="/day" element={<Compilations title={'Плейлист дня '}/>}/>
            <Route path="/top" element={<Compilations title={'100 танцевальных хитов'}/>}/>
            <Route path="/indy" element={<Compilations title={'Инди заряд'}/>}/>
          </Route>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
};