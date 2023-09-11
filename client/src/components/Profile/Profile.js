import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      bio: '',
      avatar: 'default-avatar.jpg', // Placeholder avatar image
      isEditing: false,
    };
  }

  componentDidMount() {
    // Fetch user profile data from an API or wherever you store it
    this.loadUserProfile();
  }

  loadUserProfile() {
    // Simulate loading user profile data
    setTimeout(() => {
      this.setState({
        username: 'JohnDoe',
        email: 'johndoe@example.com',
        bio: 'I love coding and hiking!',
      });
    }, 1000); // Adjust the delay or use actual API calls
  }

  handleEditClick = () => {
    this.setState({ isEditing: true });
  };

  handleSaveClick = () => {
    // Update user profile data (you can send a request to your API here)
    // For this example, we'll just toggle back to read-only mode
    this.setState({ isEditing: false });
  };

  handleCancelClick = () => {
    // Revert any unsaved changes
    this.loadUserProfile();
    this.setState({ isEditing: false });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // You can upload the file to your server here and set the avatar URL once uploaded
      // For this example, we'll just set a placeholder image
      this.setState({ avatar: URL.createObjectURL(file) });
    }
  };

  render() {
    const { username, email, bio, avatar, isEditing } = this.state;

    return (
      <div className="profile">
        <h1>User Profile</h1>
        <div className="avatar">
          <img src={avatar} alt="Profile Avatar" />
          {isEditing && (
            <input
              type="file"
              accept="image/*"
              onChange={this.handleAvatarChange}
            />
          )}
        </div>
        <div className="profile-details">
          <div className="field">
            <label>Username:</label>
            {isEditing ? (
              <input
                type="text"
                name="username"
                value={username}
                onChange={this.handleInputChange}
              />
            ) : (
              <span>{username}</span>
            )}
          </div>
          <div className="field">
            <label>Email:</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleInputChange}
              />
            ) : (
              <span>{email}</span>
            )}
          </div>
          <div className="field">
            <label>Bio:</label>
            {isEditing ? (
              <textarea
                name="bio"
                value={bio}
                onChange={this.handleInputChange}
              />
            ) : (
              <p>{bio}</p>
            )}
          </div>
        </div>
        <div className="profile-actions">
          {isEditing ? (
            <>
              <button onClick={this.handleSaveClick}>Save</button>
              <button onClick={this.handleCancelClick}>Cancel</button>
            </>
          ) : (
            <button onClick={this.handleEditClick}>Edit Profile</button>
          )}
        </div>
      </div>
    );
  }
}

export default Profile;
