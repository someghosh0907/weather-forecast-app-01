
import './App.css';
import { Navbar } from './components/Navbar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {FacebookShareButton,WhatsappShareButton} from 'react-share';
import {FacebookIcon,WhatsappIcon} from 'react-share';


const App=({cat})=> {
  const [news, setNews] = useState([]);
  async function fetchData(){
    await axios
    .get(
      cat
      ?'https://newsapi.org/v2/top-headlines?country=us&category={cat}&apiKey=69eb7f34316f4305afad54e0b05f26f6'
      :'https://newsapi.org/v2/top-headlines?country=us&category=&apiKey=69eb7f34316f4305afad54e0b05f26f6'
      )
      .then((res) => 
        setNews(res.data.articles));
  };
  useEffect(()=>{
    fetchData();
  }, [cat]);

  return (
    <>
      <Navbar />
      <div className='background'>
        <div className='container my-5'>
          <div className='row text-center justify-content-center'>
            {
              news.map((data) => {
                return (
                  <div className='col'>
                    <div className='card' style={{ width: "18rem" }}>
                      <img src={data.urlToImage} className='card-img' alt=" " />
                      <div className='card-body'>
                        <h5 className='card-title'>{data.title}</h5>
                        <p className='card-text'>{data.description}</p>
                        <a href={data.url} class="btn-bt" target="blank">View More </a>
                        <FacebookShareButton
                        url={data.url}
                        hashtag="#React#"
                        >
                          <FacebookIcon logofillColor='white' round={true}></FacebookIcon>
                        </FacebookShareButton>
                        <WhatsappShareButton
                        url={data.url}
                        hashtag="#React"
                        >
                          <WhatsappIcon logofillColor='white' round={true}></WhatsappIcon>
                        </WhatsappShareButton>
                      </div>
                    </div>
                  </div>
                )
              }
              )
            }

          </div>
        </div>
      </div>
    </>
  );
};

export default App;




//to import the share feature we install npm react-share and then import import {FacebookShareButton,WhatsappShareButton} from 'react-share';
//import {FacebookIcon,WhatsappIcon} from 'react-share'; to app.js these will dierectly share the news to the whatsapp or FB.