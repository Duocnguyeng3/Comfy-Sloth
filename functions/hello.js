// domain/.netlify/functions/hello

const person = {
  name: "David",
  age: 25,
  location: "US",
};
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(person),
  };
};
