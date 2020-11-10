import React from 'react';

function PhotoGet() {
  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://dogsapi.origamid.dev/json/photo').then((resp) =>
      resp
        .json()
        .then((resp) => {
          console.log(resp);
          return resp.json();
        })
        .then((json) => {
          console.log(json);
          return json;
        })
    );
  }

  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <input type="text" />
      </form>
    </div>
  );
}

export default PhotoGet;
