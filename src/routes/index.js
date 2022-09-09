import HomePage from '../pages/HomePage'
import DetailsGame from '../pages/DetailsGame'
export const routes = [
    {
        path:'/',
        component:<HomePage/>
    },
    {
        path:'details/:gameId',
        component:<DetailsGame/>
    }
]