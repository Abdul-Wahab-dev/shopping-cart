import React, { useState } from "react";
import { useRouter } from "next/router";
import { useLoginMutation } from "../../api/schema/mutation/mutations.generated";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loginMutation, { data, loading }] = useLoginMutation({
    onCompleted(data, clientOptions?) {
      if (data) {
        router.push("/");
      }
    },
  });

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    e.preventDefault();
    loginMutation({
      variables: {
        input: {
          email,
          password,
        },
      },
    });
  };
  return (
    <div className="flex">
      <div>
        <div>
          {" "}
          <h3>Login</h3>{" "}
        </div>

        <form>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                handleSubmit(e)
              }
              className="btn btn-primary"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
