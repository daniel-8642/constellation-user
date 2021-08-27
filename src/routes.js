import showInfo from "./components/showInfo";
import dateSelectors from "./components/dateSelectors";

const routes=[
{path:'/',component: dateSelectors,name:'home'},
{path:'/info',component: showInfo,name:'info'}
]

export default routes