import React from 'react'

function Sports() {
    const [news, setNews] = useState([])
    let cat=sports;
    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&category={cat}&apiKey=69eb7f34316f4305afad54e0b05f26f6")
            .then((res) => {
                console.log(res.data.articles);
                setNews(res.data.articles);
            });
    }, []);
    return (
        <>
            
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
    )
}

export default Sports