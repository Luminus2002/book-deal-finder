const getTopDeals = (offers) => {
  return offers
    .sort((a, b) => a.price - b.price)
    .slice(0, 3);
};

module.exports = { getTopDeals };
