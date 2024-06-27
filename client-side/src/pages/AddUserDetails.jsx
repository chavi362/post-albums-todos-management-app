import React, { useState, useEffect ,useContext} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../sass/form.scss'
import api from '../Api';
import { UserContext } from '../App';
const AddUserDetails = ({ updateUserContext }) => {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const [formUser, setFormUser] = useState({
    firstName: "",
    lastName:"",
    email: "",
    ageID:"",
    genderID:"",
    areaID: "",
    sectorID:""
  });
  useEffect(() => {
    setFormUser((prevFormUser) => ({
      id:user.id,
      userName: user.userName,
      ...prevFormUser,
    }));
  }, [user]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedFormUser = { ...formUser, id: user.id };
      const response = await api.put(`users/${user.id}`, updatedFormUser);
  
      if (response.error) {
        console.error('Error updating user details:', response.error);
      } else {
        const updatedUser =formUser;
        updateUserContext(updatedUser);
        navigate(`/users/${updatedUser.id}/home`);
      }
    } catch (error) {
      console.error('Error updating user details:', error);
    }
  };
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  return (
    <section className="h-100 gradient-form" style={{ backgroundColor: '#eee' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style={{ width: '185px' }}
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <p>Let's take more details....</p>
                      <div className="form-outline mb-4">
                        <input
                          id="email"
                          className="form-control"
                          placeholder="Your user name"
                          value={formUser.email}
                          onChange={handleChange}
                          name="email"
                        />
                        <label className="form-label" htmlFor="email">
                          email
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="phone"
                          className="form-control"
                          placeholder="Your phone"
                          value={formUser.phone}
                          onChange={handleChange}
                          name="phone"
                        />
                        <label className="form-label" htmlFor="phone">
                          phone
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="full-name"
                          className="form-control"
                          placeholder="Your name"
                          value={formUser.name}
                          onChange={handleChange}
                          name="name"
                        />
                        <label className="form-label" htmlFor="full-name">
                          Full Name
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <div className="d-flex">
                          <input
                            className="form-control me-2"
                            placeholder="adrees"
                            value={formUser.address}
                            onChange={handleChange}
                            name="address"
                          />
                        
                        </div>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="company"
                          className="form-control"
                          placeholder="Your company"
                          value={formUser.company}
                          onChange={handleChange}
                          name="company"
                        />
                        <label className="form-label" htmlFor="company">
                          Company
                        </label>
                      </div>
                    
                        <br /><br />
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="submit"
                        >
                          Create Account
                        </button>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">Discover a World of Opportunities/</h4>
                    <p className="small mb-0">
                      Welcome to our platform where you can explore and connect with a community driven by innovation and collaboration.
                      Unleash your potential as we strive to make a positive impact together. Join us on this exciting journey!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AddUserDetails;
