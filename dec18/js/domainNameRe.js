function domainName(url) {
  const re = /(?:https?:\/\/)?(?:www\.)?([^\.]*)\.\w+/g;
  return re.exec(url)[1];
}
