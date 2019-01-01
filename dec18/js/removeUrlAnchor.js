function removeUrlAnchor(url) {
  const re = /(.*\.[^#]+)(?:#?\w*?$)/g;
  const match = re.exec(url);
  return match == null ? url : match[1];
}
