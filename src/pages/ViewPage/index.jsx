import { useEffect } from "react";
import Table from "../../components/Table/indes";
import { User } from "../../constants/User";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../Router/Paths";
import '../../components/btnStyle.css'
import useApi from "../../components/hook/useApi";
export default function ViewPage() {
  const { deleteData, data, getData } = useApi();
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);

  const handleCreate = () => {
    navigate(Paths.User.Create);
  };
  const handleEdit = (id) => {
    navigate(Paths.User.Edit.replace(":id", id));
  };
  const handleRead = (row) => {
    navigate(Paths.User.Read.replace(":id", row.id));
  };
  const handleDelete = (id) => {
    deleteData(id);
  };
  return (
    <>
      <button className=" create__btn btn" onClick={handleCreate}>
        Add user
      </button>
      <Table
        data={data}
        cols={User(handleDelete, handleEdit)}
        onRowClick={handleRead}
      />
    </>
  );
}
