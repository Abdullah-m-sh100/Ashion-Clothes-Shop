import "./Phange-password.css";

const ChangePassword = () => {
  return (
    <div className="ChangePassword">
      <h3>Change Password</h3>
      <div className="row">
        <div className="current-pass">
          <label htmlFor="current-pass">Current Password </label>
          <input type="text" id="current-pass" />
        </div>
        <div className="new-pass">
          <label htmlFor="new-pass">New Password</label>
          <input type="text" id="new-pass" />
        </div>
        <div className="confirm-pass">
          <label htmlFor="confirm-pass">Confirm New Password</label>
          <input type="email" id="confirm-pass" />
        </div>
      </div>
      <button className="Update-information">Update Information</button>
    </div>
  );
};

export default ChangePassword;
