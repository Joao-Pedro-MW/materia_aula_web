import './App.css';
import { Header } from './assets/Header';
import { Footer } from './assets/Footer';
import { Article } from './assets/Article';
import { Sidebar } from './assets/Sidebar';
import news from './assets/news.json';

function App() {

  const articles = Array.isArray(news) ? news : [news];
  return (
    <div>
      <Header />
      <main>
        {articles.map((item, idx) => {
          const a = item.article || item;
          return (
            <Article
              key={idx}
              title={a.title}
              datetime={a.time?.datetime}
              displayDate={a.time?.display}
              paragraphs={a.paragraphs}
              image={a.figure?.img}
              figcaption={a.figure?.figcaption}
            />
          );
        })}
        <Sidebar/>;
      </main>
      <Footer />
    </div>
  )
}

export default App
