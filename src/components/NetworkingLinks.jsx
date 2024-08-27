import { InstagramOutlined, YoutubeOutlined, WhatsAppOutlined } from "@ant-design/icons";
import './NetworkingLinks.css'

const NetworkingLinks = () => {
  return (
    <div id="networking-links">
      {/* <a
        href="https://www.instagram.com/harshiraama/?locale=ru&hl=am-et"
        target="_blank"
      >
        <InstagramOutlined style={{ fontSize: "100px" }} />
      </a>
      <a href="https://www.youtube.com/@yoriichiplaysvalo" target="_blank">
        <YoutubeOutlined style={{ fontSize: "100px" }} />
      </a>
      <a href="https://wa.me/8208807663">
      <WhatsAppOutlined style={{ fontSize: "100px" }}/>
      </a> */}

        <button onClick="location.href = 'https://www.instagram.com/harshiraama/?locale=ru&hl=am-et';" className="box github">Instagram</button>
        <button onClick="location.href = 'https://www.youtube.com/@yoriichiplaysvalo" className="box fem">Youtube</button>
        <button onClick="location.href = 'www.yoursite.com';" className="box linkedin">LinkedIn</button>
        <button onClick="location.href = 'www.yoursite.com';" className="box twitter">Twitter</button>
        <button onClick="location.href = 'https://wa.me/8208807663" className="box instagram">Whatsapp</button>

    </div>
  );
};

export default NetworkingLinks;
