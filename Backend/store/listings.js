const listings = [
  {
    id: 1,
    title: "Gray couch in a great condition",
    images: [{ fileName: "couch2" }],
    categoryId: 1,
    price: 1200,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324
    }
  },
  {
    id: 2,
    title: "Room & Board couch (great condition) - delivery included",
    description:
      "I'm selling my furniture at a discount price. Pick up at Venice. DM me asap.",
    images: [
      { fileName: "couch1" },
      { fileName: "couch2" },
      { fileName: "couch3" }
    ],
    price: 1000,
    categoryId: 1,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324
    }
  },
  {
    id: 3,
    title: "Sectional couch - Delivery available",
    description: "No rips no stains no odors",
    images: [{ fileName: "couch3" }],
    categoryId: 1,
    price: 950,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324
    }
  },
  {
    id: 4,
    title: "Same couch different seller",
    images: [{ fileName: "couch2" }],
    categoryId: 1,
    price: 1200,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324
    }
  }
];

const addListing = listing => {
  listing.id = listings.length + 1;
  listings.push(listing);
};

const getListings = () => listings;

const getListing = id => listings.find(listing => listing.id === id);

const filterListings = predicate => listings.filter(predicate);

module.exports = {
  addListing,
  getListings,
  getListing,
  filterListings
};
