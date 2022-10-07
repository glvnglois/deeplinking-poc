import './App.css';
import { SocialIcon } from 'react-social-icons';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Instagram</h1>
        <SocialIcon url="https://www.instagram.com" />
        <SocialIcon url="https://www.instagram.com/create/story" />
      </div>
      <div>
        <h1>Snapchat</h1>
        <div data-share-url="https://www.jkmte.com/?ai=13900" data-text="false" className="snapchat-creative-kit-share"></div>
      </div>
      <div>
        <h1>Twitter</h1>
        <SocialIcon url="http://twitter.com/intent/tweet?text=Check%20this%20out!&url=https%3A%2F%2Fwww.jkmte.com%3Fai%3D13900&via=fansrevenue" />
      </div>
      <div>
        <h1>Reddit</h1>
        <SocialIcon url="http://www.reddit.com/submit?url=https%3A%2F%2Fwww.jkmte.com%3Fai%3D13900&title=Check%20this%20out!" />
      </div>
      <div>
        <h1>Facebook</h1>
        <SocialIcon url="http://www.facebook.com/sharer.php?src=sp&u=http%3A%2F%2Fwww.myDomain.com%2Fpath%2F" />
      </div>
      <div>
        <h1>TikTok</h1>
        <SocialIcon url="http://www.tiktok.com/" />
      </div>
    </div>
  );
}

export default App;
