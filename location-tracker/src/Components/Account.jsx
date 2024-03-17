import React from "react";
import globe from "../Assets/globe.png";

const Account = () => {
  const [formStatus, setFormStatus] = React.useState("Save");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, displayname, email } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      displayname: displayname.value,
    };
    console.log(conFom);
  };

  return (
    <div className="bg-primary text-white flex">
      <div className="mt-10">
        <div className="text-3xl font-bold ml-10">General Info</div>

        <div className="mt-2 mb-20 justify-center items-center">
          <form onSubmit={onSubmit}>
            <div className="mt-5 space-x-20 space-y-10 ml-16">
              <div className="space-y-10">
                <div className="mb-3 space-y-4">
                  <label className="form-label" htmlFor="name">
                    Name
                  </label>
                  <br />
                  <input
                    className="form-control border w-96 h-10 p-2 rounded-md bg-grey2"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-3 space-y-4">
                  <label className="form-label" htmlFor="displayname">
                    Display Name
                  </label>
                  <br />
                  <input
                    className="form-control border w-96 h-10 p-2 rounded-md bg-grey2"
                    type="text"
                    placeholder="Display Name"
                    required
                  />
                </div>
                <div className="mb-3 space-y-4">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <br />
                  <input
                    className="form-control border w-96 h-10 p-2 rounded-md bg-grey2"
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                    required
                  />
                </div>
                <div className="mb-3 space-y-4">
                  <label className="form-label" htmlFor="email">
                    Phone Number
                  </label>
                  <br />
                  <input
                    className="form-control border w-96 h-10 p-2 rounded-md bg-grey2"
                    type="tel"
                    id="phone"
                    placeholder="+234000000000"
                    required
                  />
                </div>
              </div>
            </div>
            <button
              className="bg-purple rounded-md text-center shadow-md mt-6 p-2 pl-4 w-24 text-white mb-20 ml-48"
              type="save"
            >
              {formStatus}
            </button>
          </form>
        </div>
      </div>
      <div className="blur-sm">
        <img
          src={globe}
          alt="boy"
          className="mr-10"
          style={{ width: "100%", height: "100vh" }}
        />
      </div>
    </div>
  );
};

export default Account;
