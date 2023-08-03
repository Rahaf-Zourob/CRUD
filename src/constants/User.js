import '../components/btnStyle.css'
export const User = (handleDelete,handleEdit)=> [
    {
        key:'id',
        title: 'Id'
    },
    {
        key:'name',
        title: 'Name'
    },
    {
        key:'cities',
        title: 'Cities'
    },
    {
        key:'actions',
        title: 'Actions',
        render: (data) => (
            <div onClick={(e) => e.stopPropagation()}>
              <button className='btn__edit btn' onClick={() => handleEdit(data.id)}>Edit</button>
              <button className='btn btn__delete' onClick={() => handleDelete(data.id)}>Delete</button>
            </div>
          ),
    },
]