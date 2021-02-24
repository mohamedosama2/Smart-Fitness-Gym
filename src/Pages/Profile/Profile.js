import React from "react";
import "./Profile.css";
import add from "../../images/add.png";
import profile from "../../images/profile.jpg";
import line from "../../images/svg/line.svg";
function Profile(props) {
  return (
    <section class="profile">
      <div class="container">
        <div class="profile-info">
          <img class="line" src={line} alt="line" />
          <div class="circle">
            <img
              class="profile-img"
              src="https://picsum.photos/220/220"
              alt="profile"
            />
            <img class="add-img" src={add} alt="add" />
          </div>
          <div class="info">
            <h4>kyrillos hany</h4>
            <div class="details">
              <div>
                <span>Weight: </span>60kg
              </div>
              <div>
                <span>height: </span>160cm
              </div>
              <div>
                <span>Diet Plan: </span>Intermittent Fasting
              </div>
            </div>
          </div>
        </div>

        {/* images section */}
        <hr />
        <div className="Images">
          <h2 className="Images__heading">
            {" "}
            A comparison indicating your changes every month{" "}
          </h2>
          <div className="Images__info">
            <div className="Images__photo">
              <img src={profile} alt="profile pic" />
            </div>
            <div className="Images__btns">
                <div className="Images__btns--monthes">

                <button> Month 1 </button>
                <button> Month 2 </button>
                <button> Month 3 </button>
                <button> Month 4 </button>
                <button> Month 5 </button>
                <button> Month 6 </button>
                <button> Month 7 </button>
                <button> Month 8 </button>
                <button> Month 9 </button>
                <button> Month 10 </button>
                </div>
            <button className="Images__update">UPDATE </button>
            </div>
          </div>
        </div>

        <hr />

        <hr />

        <div class="charts">
          <h3>Motivation Charts</h3>
          <div id="calendar_basic" class="chart-content"></div>
        </div>

        <hr />

        <div class="cards">
          <div class="card-container">
            <div class="upper-container">
              <div class="image-container">
                <img src={profile} />
              </div>
            </div>

            <div class="lower-container">
              <div>
                <h3>Alaina Wick</h3>
                <h4>Front-end Developer</h4>
              </div>
              <div>
                <p>
                  sodales accumsan ligula. Aenean sed diam tristique, fermentum
                  mi nec, ornare arcu.
                </p>
              </div>
              <div>
                <a href="#" class="btn">
                  View profile
                </a>
              </div>
            </div>
          </div>

          <div class="card-container">
            <div class="upper-container">
              <div class="image-container">
                <img src={profile} />
              </div>
            </div>

            <div class="lower-container">
              <div>
                <h3>Alaina Wick</h3>
                <h4>Front-end Developer</h4>
              </div>
              <div>
                <p>
                  sodales accumsan ligula. Aenean sed diam tristique, fermentum
                  mi nec, ornare arcu.
                </p>
              </div>
              <div>
                <a href="#" class="btn">
                  View profile
                </a>
              </div>
            </div>
          </div>

          <div class="card-container">
            <div class="upper-container">
              <div class="image-container">
                <img src={profile} />
              </div>
            </div>

            <div class="lower-container">
              <div>
                <h3>Alaina Wick</h3>
                <h4>Front-end Developer</h4>
              </div>
              <div>
                <p>
                  sodales accumsan ligula. Aenean sed diam tristique, fermentum
                  mi nec, ornare arcu.
                </p>
              </div>
              <div>
                <a href="#" class="btn">
                  View profile
                </a>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="upper-container">
              <div class="image-container">
                <img src={profile} />
              </div>
            </div>

            <div class="lower-container">
              <div>
                <h3>Alaina Wick</h3>
                <h4>Front-end Developer</h4>
              </div>
              <div>
                <p>
                  sodales accumsan ligula. Aenean sed diam tristique, fermentum
                  mi nec, ornare arcu.
                </p>
              </div>
              <div>
                <a href="#" class="btn">
                  View profile
                </a>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="upper-container">
              <div class="image-container">
                <img src={profile} />
              </div>
            </div>

            <div class="lower-container">
              <div>
                <h3>Alaina Wick</h3>
                <h4>Front-end Developer</h4>
              </div>
              <div>
                <p>
                  sodales accumsan ligula. Aenean sed diam tristique, fermentum
                  mi nec, ornare arcu.
                </p>
              </div>
              <div>
                <a href="#" class="btn">
                  View profile
                </a>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="upper-container">
              <div class="image-container">
                <img src={profile} />
              </div>
            </div>

            <div class="lower-container">
              <div>
                <h3>Alaina Wick</h3>
                <h4>Front-end Developer</h4>
              </div>
              <div>
                <p>
                  sodales accumsan ligula. Aenean sed diam tristique, fermentum
                  mi nec, ornare arcu.
                </p>
              </div>
              <div>
                <a href="#" class="btn">
                  View profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
