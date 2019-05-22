const PubSub = require('../helpers/pub_sub.js');

const ListItemView = function (containerElement) {
  this.containerElement = containerElement;
};

ListItemView.prototype.render = function (listItem) {
  const listItemContainer = document.createElement('div');
  listItemContainer.id = "list-item-container";

  const task = this.createDetail('Task', listItem.task);
  listItemContainer.appendChild(task);

  const difficulty = this.createDetail('Difficulty', listItem.difficulty);
  listItemContainer.appendChild(difficulty);

  const date = this.createDetail('Date', listItem.date);
  listItemContainer.appendChild(date);

  this.containerElement.appendChild(listItemContainer);
}

ListItemView.prototype.createDetail = function (label, text) {
  const detail = document.createElement('h3');
  detail.textContent = `${label}: ${text}`;
  return detail;
}

module.exports = ListItemView;
