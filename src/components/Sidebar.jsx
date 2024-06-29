import ChatGPTLogo from "../assets/chatgpt.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="upper__sidebar">
        <div className="brand">
          <img src={ChatGPTLogo} alt="" />
          <h1>ChatGPT</h1>
        </div>
        <button className="btn__new-chat">
          <i className="fa-solid fa-plus"></i>
          <span>New Chat</span>
        </button>
        <div className="query">
          <i className="fa-regular fa-message"></i>
          <span className="query-text">Who is Prabhu Kalyan?</span>
        </div>
        <div className="query">
          <i className="fa-regular fa-message"></i>
          <span className="query-text">What is ReactJS?</span>
        </div>
      </div>
      <div className="lower__sidebar">
        <div className="lower__sidebar-btn btn__home">
          <i className="fa-solid fa-house"></i>
          <span>Home</span>
        </div>
        <div className="lower__sidebar-btn btn__saved">
          <i className="fa-solid fa-bookmark"></i>
          <span>Saved</span>
        </div>
        <div className="lower__sidebar-btn btn__upgrade">
          <i className="fa-solid fa-rocket"></i>
          <span>Upgrade to Pro</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
