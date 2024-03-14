import Navbar from "../components/Navbar";
import MyProfile from "../components/myProfile/MyProfile";

function Profile() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row mt-4">
          <div className="col-12 col-data">
            <h4> Welcome to Cashdost</h4>
          </div>
        </div>
        <div className="row mt-4 mb-4">
          <div className="col-lg-3 col-md-3 col-12">
            <div className="nav-button-section">
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  My Profile
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-9 col-12">
            <div className="profile-data">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <MyProfile />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
