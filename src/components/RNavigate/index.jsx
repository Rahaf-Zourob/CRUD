import { useRoutes } from 'react-router-dom';
import { Pages } from '../../components/Router/index'
export default function RNavigate() {
  const router = useRoutes(Pages)
  return router
}
