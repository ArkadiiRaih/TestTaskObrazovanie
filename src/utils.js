export function filterCards(cards, filter) {
  const sortFun = new RegExp("новое", "i").test(filter)
    ? sortByDate
    : sortByRating;
  return cards
    .filter(
      (card) =>
        new RegExp(filter.type, "i").test(card.tags.type) &&
        new RegExp(filter.place, "i").test(card.tags.place) &&
        new RegExp(filter.time, "i").test(card.tags.time)
    )
    .sort(sortFun);
}

function sortByRating(card1, card2) {
  if (card1.rating > card2.rating) {
    return -1;
  }
  if (card1.rating < card2.rating) {
    return 1;
  }
  return 0;
}

function sortByDate(card1, card2) {
  if (card1.timestamp > card2.timestamp) {
    return 1;
  }
  if (card1.timestamp < card2.timestamp) {
    return -1;
  }
  return 0;
}
