import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../Router/Paths";
import useApi from "../../components/hook/useApi";

import Table from "../../components/Table/indes";
import { User } from "../../constants/User";
import Container from "../../components/Container";

import '../../components/btnStyle.css'

export default function ViewPage() {
  const { deleteData, data, getData, loading } = useApi();
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, [data]);

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
      {loading ? <Container><h3>Loading...</h3></Container> :
        <>
          <Table
            data={data}
            cols={User(handleDelete, handleEdit)}
            onRowClick={handleRead}
          />
        </>
      }
    </>
  );
}
