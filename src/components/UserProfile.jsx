function UserProfile({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <span>{user.isVerified ? "Verified" : "Pending"}</span>
    </div>
  );
}
export default UserProfile;