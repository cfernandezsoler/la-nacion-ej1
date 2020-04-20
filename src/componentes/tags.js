import React from "react";

export const Tags = (props) => {
  const obtenerTagsTotal = (articles) => {
    // totalizamos los tags y los contamos, insertandolos en un objeto
    let tagsTotal = {};
    articles.map((item) => {
      item.taxonomy.tags.forEach((tag) => {
        if (tagsTotal[tag.slug]) {
          tagsTotal[tag.slug].quantity++;
        } else {
          tagsTotal[tag.slug] = { quantity: 1, text: tag.text };
        }
      });
    });

    return tagsTotal;
  };

  const ordenarTags = (tagsTotales) => {
    // convierte tagsTotales a array para poder ordenarlo y devolver 10 elementos
    let tagsArray = Object.keys(tagsTotales).map((item) => [
      item,
      tagsTotales[item].quantity,
      tagsTotales[item].text,
    ]);
    tagsArray.sort((a, b) => b[1] - a[1]);
    return [...tagsArray.slice(0, 10)];
  };

  const renderTags = (tags) =>
    tags.map((item) => (
      <Tag key={item[0]} tagSlug={item[0]} tagText={item[2]} />
    ));

  if (props.articles.length > 0) {
    const tagsTotales = obtenerTagsTotal(props.articles);
    const tagsOrdenados = ordenarTags(tagsTotales);
    return (
      <div className="cont_tags com-secondary-tag hlp-marginBottom-20">
        {renderTags(tagsOrdenados)}
      </div>
    );
  } else return null;
};

const Tag = (props) => <a href={`/tema/${props.tagSlug}`}>{props.tagText}</a>;
