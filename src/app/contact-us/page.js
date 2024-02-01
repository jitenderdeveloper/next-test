"use client";
import { FiCheckCircle, FiMail, FiPhoneCall, FiUser } from "react-icons/fi";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { toast } from "react-toastify";
import { URL_LINK } from "@/app/secure/page";
import { useEffect, useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactUs() {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState();
  const [last_name, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();

  const ContactHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !last_name || !email || !phone || !message) {
      toast.error("all fields are required", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoading(false);
      return;
    } else {
      let add = {
        name: name,
        last_name: last_name,
        email: email,
        phone: phone,
        message: message,
      };

      fetch(`${URL_LINK}/contact`, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(add),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log("reuslt", result);
          const mess = result.status;
          if (mess === "failed") {
            toast.error(mess, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            return;
          } else {
            toast.success("Thanks for contacting us.", {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            setTimeout(() => {
              window.location.href = "/";
            }, 1000);
            setLoading(false);
          }
        })
        .finally(() => {
          setLoading(false);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  useEffect(() => {
    console.log("welcome to contact page");
  }, []);
  return (
    <>
      <Navbar />
      <section>
        <div className="banner-main-div container-fluid p-0">
          <div className="banner-div ">
            <div className="banner-div-text">
              <div className="row m-0">
                <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 text-main-head">
                  <div className="text-main text-center">
                    <h1 className="main-heading">Contact Us</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row ">
              <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 text-main-step">
                <div className="text-main-2  ">
                  <div className="mt-5">
                    <h2>We are here to help You</h2>
                  </div>
                  <div className="stpe-text ">
                    <div className="stpe-text-1 mt-5">
                      <h4>
                        <span className="material-symbols-outlined">
                          <FiCheckCircle />
                        </span>
                        {!name || !last_name ? (
                          <h5>Step 1.</h5>
                        ) : (
                          <h5 style={{ color: "green" }}>Step 1.</h5>
                        )}
                      </h4>
                      <h6>
                        Enter your First Name, Last Name, E-Mail Id and Phone
                        Number
                      </h6>
                    </div>
                    <div className="stpe-text-3 mt-5">
                      <h4>
                        {" "}
                        <span className="material-symbols-outlined">
                          <FiCheckCircle />
                        </span>
                        Step 2.
                      </h4>
                      <h6>
                        Press the submit button. Our team with connect with you
                        within 24-48 hours
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
                <div className="form-go-up-side">
                  <div className="form-main-div">
                    <div className="form-upper-text">
                      <h4> Get in touch</h4>
                    </div>
                    <div className="form-div mt-4">
                      <form onSubmit={ContactHandler}>
                        <div className="row g-3">
                          <div className="col-6">
                            <div className="input-fields">
                              <span className="icon">
                                <FiUser />
                              </span>
                              <input
                                type="text"
                                placeholder="First Name"
                                onChange={(e) => setName(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="input-fields">
                              <span className="icon">
                                <FiUser />
                              </span>
                              <input
                                type="text"
                                placeholder="Last Name"
                                onChange={(e) => setLastName(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="input-fields">
                              <span className="icon">
                                <FiMail />
                              </span>
                              <input
                                type="text"
                                placeholder="E-mail"
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="input-fields">
                              <span className="icon">
                                <FiPhoneCall />
                              </span>
                              <input
                                type="text"
                                placeholder="Mobile No."
                                onChange={(e) => setPhone(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Optional</label>
                            <div className="input-fields input-text-editor">
                              <textarea
                                placeholder="Message."
                                onChange={(e) => setMessage(e.target.value)}
                              ></textarea>
                            </div>
                          </div>
                          <div className="input-fields submit-btn">
                            <button
                              type="submit"
                              className="btn"
                              disabled={loading}
                            >
                              {loading ? "Please wait..." : "SUBMIT"}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default ContactUs;
