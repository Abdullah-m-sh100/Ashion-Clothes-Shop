
import "./personal-information.css";


const PersonalInformation = () => {
  const user = true

  return (
    <div className="PersonalInformation">
      <h3>Personal Information</h3>
      <div className="row">
        <div className="full-name">
          <label htmlFor="full-name">Full Name</label>
          <input type="text" id="full-name" value={user.displayName} />
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={user.email} />
        </div>
        <div className="phone">
          <label htmlFor="phone" value={user.phoneNumber}>
            Phone
          </label>
          <input type="tel" id="phone" />
        </div>
      </div>

      <button className="send-information">Update Information</button>
    </div>
  );
};

export default PersonalInformation;
