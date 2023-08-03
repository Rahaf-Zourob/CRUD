import { useState, useEffect } from 'react';
import { form } from '../../constants/form'
const Form = (props) => {
  const [user, setUser] = useState({
    name: '',
    cities: '',
  });
  const [isGetFirstTimeData] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: user.name,
      cities: user.cities,
    };
    props.handleSubmit(data);
  };
  useEffect(() => {
    if (props.user && isGetFirstTimeData) {
      setUser({
        name: props.user.name,
        cities: props.user.cities,
      })
    }
  }, [props.user]);
  const handleChangeInput = (e) => {
    const { value, id } = e.target;
    setUser(prevState => ({ ...prevState, [id]: value}));
  };
  return (
    <form onSubmit={handleSubmit}>
      {form.map((input) => (
        <div className='form__field' key={input.id}>
          <label htmlFor={input.id}>{input.label}</label>
            <input
              type={input.type}
              id={input.id}
              name={input.name}
              value={user[input.id]}
              onChange={handleChangeInput}
            />
        </div>
      ))}
      <button type='submit' className='btn submit__btn'>{props.isLoading ? 'Loading...' : 'Submit'}</button>
    </form>
  );
};
export default Form;
