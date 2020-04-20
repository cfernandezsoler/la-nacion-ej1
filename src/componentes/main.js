import React, { useEffect, useState } from "react";
import { Articles } from "./article.js";
import { Tags } from "./tags.js";

export const Main = () => {
  const [data, setData] = useState({ articles: [] });

  useEffect(() => {
    // carga los articulos y los setea como 'data'
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api-test-ln.herokuapp.com/articles"
        );
        if (!response.ok) throw Error(response.statusText);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <div className="banner w-100 --bg-banner">
        <div className="banner --sticky --mobile"></div>
      </div>
      <div className="lay-sidebar">
        <div className="sidebar__main">
          <div className="row">
            <Title />
          </div>
          <div className="row">
            <Tags articles={data.articles} />
          </div>
          <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
            {data.articles.length > 0 ? (
              <Articles articles={data.articles} />
            ) : (
              <h3>Cargando Datos...</h3>
            )}
          </section>
          <section className="row">
            <ShowMoreButton />
          </section>
        </div>
      </div>
    </main>
  );
};

const Title = () => (
  <div className="com-titleWithfollow hlp-marginBottom-15">
    <h1 className="com-title-section-xl hlp-marginBottom-40">
      Acumulado Grilla
    </h1>
  </div>
);

const ShowMoreButton = () => (
  <div className="col-12 hlp-text-center hlp-margintop-40">
    <button className="--btn --secondary">MÁS NOTAS DE ACUMULADO GRILLA</button>
  </div>
);
