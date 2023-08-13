import { useRoutes } from 'react-router-dom';
import { Pages } from '../../Router/index'
export default function RNavigate() {
  const router = useRoutes(Pages)
  return router
}
