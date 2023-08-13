import { Paths } from "./Paths";
import ViewPage from "../pages/ViewPage";
import EditPage from "../pages/EditPage";
import CreatePage from "../pages/CreatePage";
import ReadPage from "../pages/ReadPage";
export const Pages = [
  { path: Paths.User.View, element: <ViewPage /> },
  { path: Paths.User.Read, element: <ReadPage /> },
  { path: Paths.User.Edit, element: <EditPage /> },
  { path: Paths.User.Create, element: <CreatePage /> },
];
