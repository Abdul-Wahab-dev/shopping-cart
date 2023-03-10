import signup from "./asset/style/signup.module.css";
export default function Signup() {
  return (
    <div className="flex">
      <div className={signup.signup}>
        <div>
          {" "}
          <h3>Sign up</h3>{" "}
        </div>

        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Name</label>
            <input
              type="text"
              placeholder="name"
              name="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Password</label>
            <input
              type="password"
              placeholder="password"
              name="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="form-control"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
