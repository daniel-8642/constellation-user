import showInfo from "./pages/ShowInfo";
import dateSelectors from "./pages/DateSelectors";

const routes=[
{path:'/',component: dateSelectors,name:'home'},
{path:'/info',component: showInfo,name:'info'}
]

export default routes