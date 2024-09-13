

// данный компонент тестовый, 
// в нем я изучаю API


const TwoPage = (props) => {
    return(
        <>
        <p> Это второй тестовый элемент </p>
        <p></p>
        </>
    );
};

export default TwoPage;


// import React, { useState, useEffect } from 'react';
// import fetch from 'isomorphic-fetch';

// function TwoPage() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch('your-api-endpoint')
//       .then((response) => response.json())
//       .then((newData) => {
//         setData(newData);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   }, []);

//   return (
//     <div>
//       {data && JSON.stringify(data)}
//     </div>
//   );
// }

// export default TwoPage;