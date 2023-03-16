import React, { useState } from "react";
import { useRouter } from "next/router";
import signup from "./asset/style/signup.module.css";
import {
  useRegisterUserMutation,
  useCreateCustomerMutation,
  useUpdateUserMutation,
} from "../../api/schema/mutation/mutations.generated";
import { Role } from "../../types";
export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const [registerUserMutation, { data, loading }] = useRegisterUserMutation({
    variables: {
      input: {
        name,
        email,
        password,
        role: "USER" as Role,
      },
    },
    onCompleted(data, clientOptions?) {
      if (data) {
        createCustomerMutation();
      }
    },
  });

  const [
    createCustomerMutation,
    { data: customerData, loading: customerLoading },
  ] = useCreateCustomerMutation({
    variables: {
      email,
    },
    onCompleted(data, clientOptions?) {
      if (data) {
        updateUserMutation({
          variables: {
            input: {
              email,
              name,
              customerId: data.createCustomer,
            },
          },
        });
      }
    },
  });

  const [updateUserMutation, { data: userData, loading: userLoading }] =
    useUpdateUserMutation({
      onCompleted(data, clientOptions?) {
        if (data) {
          router.push("/login");
        }
      },
    });

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    e.preventDefault();

    registerUserMutation();
  };
  return (
    <div className="flex">
      <div className={signup.signup}>
        <div>
          {" "}
          <h3>Sign up</h3>{" "}
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
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              className="btn btn-primary"
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                handleSubmit(e)
              }
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
