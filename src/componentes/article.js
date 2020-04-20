import React from "react";

export const Articles = (props) => {
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  if (props.articles.length < 1) return null;

  return props.articles.map((item) => {
    if (item.subtype != "7") return null;

    let date = new Date(item.display_date);
    let strDate = `${date.getDate()} de ${
      months[date.getMonth()]
    } de ${date.getFullYear()}`; // convierto la fecha en una string legible

    return (
      <Article
        key={item._id}
        date={strDate}
        imgUrl={item.promo_items.basic.url}
        headline={item.headlines.basic}
      />
    );
  });
};

const Article = (props) => (
  <article className="mod-caja-nota w-100-mobile">
    <section id="" className="cont-figure">
      <a href="" className="figure">
        <picture id="" className="content-pic picture">
          <img src={props.imgUrl} alt="" className="content-img" />
        </picture>
      </a>
    </section>
    <div className="mod-caja-nota__descrip">
      <h2 className="com-title-acu">
        <a href="">{props.headline}</a>
      </h2>
      <h4 className="com-date">{props.date}</h4>
    </div>
  </article>
);
