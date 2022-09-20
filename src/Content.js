const Content = () => {
  return (
    <div className="content">
      <ul className="items">
        <li className="item">
          <div className="text">
            <h1>Enjoy on you TV.</h1>
            <p>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <div className="imageWrapper">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt=""
            />
            <div className="animation">
              <video autoPlay muted loop>
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </li>
        <li className="item left">
          <div className="imageWrapper">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              alt=""
            />
            <div className="story-card">
              <div className="story-card-image">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  alt=""
                />
              </div>
              <div className="story-card-text">
                <h2>Stranger Things</h2>
                <p className="download">Downloading...</p>
              </div>
              <div className="story-card-icon"></div>
            </div>
          </div>
          <div className="text">
            <h1>Download your shows to watch offline.</h1>
            <p>
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </li>
        <li className="item">
          <div className="text">
            <h1>Watch everywhere.</h1>
            <p>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV without paying more.
            </p>
          </div>
          <div className="imageWrapper">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
              alt=""
            />
            <div className="animation second">
              <video autoPlay muted loop>
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </li>
        <li className="item left">
          <div className="imageWrapper">
            <img
              src="https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
              alt=""
            />
          </div>
          <div className="text">
            <h1>Create profiles for kids.</h1>
            <p>
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Content;
