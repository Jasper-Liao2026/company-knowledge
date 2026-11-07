//后台应用布局
//侧边栏导航+顶部导航+内容区域+页脚
import AppLayout from './layouts/AppLayouts'
import LoginPage from './pages/LoginPage'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {useAuth} from './hooks/useAuth'

//路由守卫组件
function Guard({children}){
  //hooks
  const user = useAuth();
  //replace 替换当前浏览器历史记录，不新增一条历史
  //规避返回按钮再次回到受保护的路由，返回跳
  if(!user) return <Navigate to="/login" replace /> 
  return children
  // return user ? children : <LoginPage />
}
function App() {

  return (
    <Routes>
      <Route path = "/login" element={<LoginPage />} />
      <Route 
        path = "/"
        element={<Guard>
          <AppLayout />
        </Guard>}
      />
    </Routes>
  )
}

export default App
