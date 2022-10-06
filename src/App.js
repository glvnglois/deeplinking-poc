import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Instagram</h1>
        <a className="link" href='https://www.instagram.com'>Instagram Feed</a><br />
        <a className="link" href='https://www.instagram.com/create/story'>Instagram Story</a>
      </div>
      <div>
        <h1>Snapchat</h1>
        <div data-text="false" className="snapchat-creative-kit-share"></div>
      </div>
      <div>
        <h1>Twitter</h1>
        <a className="link" href="https://twitter.com/intent/tweet?text=this%20is%20a%20test">Twitter Tweet</a>
      </div>
      <div>
        <h1>Reddit</h1>
        <a className="link" href="https://www.reddit.com/submit?url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F24823114%2Fpost-to-reddit-via-url&title=Post%20to%20Reddit%20via%20URL">Reddit Post</a>
      </div>
      <div>
        <h1>Facebook</h1>
        <a className="link" href="https://www.facebook.com/sharer.php?src=sp&u=http%3A%2F%2Fwww.myDomain.com%2Fpath%2F">Facebook Post</a>
      </div>
      <div>
        <h1>TikTok</h1>
        <a className="link" href="https://www.tiktok.com/">Tiktok</a>
      </div>
    </div>
  );
}

export default App;
