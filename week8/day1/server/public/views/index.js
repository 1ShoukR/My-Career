const submit = document.getElementById('submit');
console.log("hello world")

const sendData = async () => {

    const nameInput = document.getElementById('name').value;
    const addressInput = document.getElementById('address').value
    const reviewInput = document.getElementById('review').value;
    const data = {
      name: nameInput,
      address: addressInput,
      reviewScore: reviewInput,
    };
    const dataWeAreSending = await fetch(
      'http://localhost:3008/restaurants/create_restaurant',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    console.log(dataWeAreSending);
    const json = await dataWeAreSending.json();
    console.log(json);
};
submit.onclick = () => sendData();
