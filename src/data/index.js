const mapElements = (element) => ({
  id: element.id,
  language: element.original_language,
  title: element.title,
  originalTitle: element.original_title,
  vote: element.vote_average,
  imgpath: element.poster_path,
});

export { mapElements };
