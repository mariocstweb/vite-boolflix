const mapElements = (element) => ({
  id: element.id,
  language: element.original_language,
  title: element.title || element.name,
  originalTitle: element.original_title || element.original_name,
  vote: element.vote_average,
  imgpath: element.poster_path,
});

export { mapElements };
