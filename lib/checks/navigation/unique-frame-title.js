var title = axe.commons.text.sanitize(
  node.getAttribute('title')
).trim().toLowerCase();
this.data(title);
return true;