/* eslint-disable @next/next/no-img-element */
const AboutMe = ({ avatarSrc, children }) => (
  <>
    <h4 className="widget-title">About Me</h4>
    <div className="textwidget">
      <p>
        <img
          src={avatarSrc}
          alt="Avatar"
          className="alignleft"
          style={{
            width: "80px",
            borderRadius: "50%",
            marginBottom: 0,
          }}
        />{" "}
        {children}
      </p>
    </div>
  </>
);

export default AboutMe;
