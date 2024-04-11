import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";


const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`);
                if (!response.ok) {
                    throw new Error('Network response error');
                }
                const data = await response.json();
                setArticles(data.articles);
            } catch (error) {
                console.error('Error in fetching data:', error);
            }
        };

        fetchArticles();
    }, [category]);
    return (
        <div className=" w-100 d-flex flex-column align-items-center">
            <h2 className="text-center">Latest<span className="badge bg-danger ">News</span></h2>
            <div className=" w-100 d-flex align-items-center justify-content-center flex-wrap">
                {articles.map((news, index) => {
                    return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
                })}
            </div>
        </div>
    )
}

export default NewsBoard
