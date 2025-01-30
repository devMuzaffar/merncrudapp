const Profile = () => {
  return (
    <div className="flex gap-2 items-center justify-between md:items-start md:flex-col">
      {/* Picture */}
      <div className="w-48">
        <img src="./profile.jpg" alt="" />
      </div>

      {/* Profile Texts */}
      <div className="flex flex-col gap-2 text-slate-600 text-right md:text-left">
        <p className="text-gray-800 font-medium text-sm">Work Link</p>
        <a href="">Youtuber</a>
        <a href="">Instagram</a>
        <a href="">Web Technical</a>
        <a href="">Website Github Mern dev</a>
        <a href="">Web Developer</a>
        <a href="">Figma</a>
        <a href="">Software engineer</a>
      </div>
    </div>
  );
};

export default Profile;
