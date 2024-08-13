import "./Profile.scss"

function Profile() {
  return (
    <div className="content-box profile-box">
      <h1>Profile</h1>
      <div className="profile-options">
        <button className="profile-button login-button">Login User</button>
        <button className="profile-button register-button">
          Register User
        </button>
      </div>
    </div>
  )
}

export default Profile
