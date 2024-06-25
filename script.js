// script.js
document.addEventListener('DOMContentLoaded', () => {
    const restaurants = [
        { name: '面对面', image: 'https://images.deliveryhero.io/image/fd-my/Products/1618859.jpg?width=%s' },
        { name: 'Tambun Star Food Court', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk1_jo91mu-1is-64NLzQLL3t58NiNiXOEPw&s' },
        { name: 'McDonals', image: 'https://www.mcdonalds.com.my/images/welcome/mcd_foods_m.jpg' },
        { name: 'Ayam Penyet Mummy', image: 'https://media-cdn.tripadvisor.com/media/photo-s/28/e0/3a/67/front-view.jpg' },
        { name: 'I Mum Mum', image: 'https://images.deliveryhero.io/image/fd-my/Products/1499840984.jpg?width=%s' },
        { name: 'Pizza Hut', image: 'https://www.alamanda.com.my/wp-content/uploads/2024/02/ala-promo-15-Feb-pizza-hut.jpg' },
        { name: 'Subway', image: 'https://www.subway.com.my/images/menu/italian-bmt.webp' },
        { name: 'Insadunia Food Court 2.0', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXBUQvkJgpTP3IclOW3M4zuCd8sXkUfyW5HUu23j6Pba68mNmHNtwFU7sTNmFae06A4h0&usqp=CAU' },
        { name: 'Insadunia Food Court 1.0', image: 'https://i.ytimg.com/vi/4JIQioTkK0g/maxresdefault.jpg' },
        { name: 'Kim Poh Roasted Chicken & Duck Rice', image: 'https://images.deliveryhero.io/image/fd-my/LH/gb9i-listing.jpg' },
        { name: 'JK stall', image: 'https://scontent.fkul15-1.fna.fbcdn.net/v/t1.6435-9/90188732_3199495033417268_8797185833686794240_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=ajL2kDlkXvoQ7kNvgEMEnrw&_nc_ht=scontent.fkul15-1.fna&oh=00_AYADLCAC5AFUVbkyh80nr9m_TAqwhlFnBv0h1Rn0VOWSbw&oe=66A2345A' },
        { name: 'Suasana G30', image: 'https://i0.wp.com/kdhongkong.com.my/wp-content/uploads/2021/07/02.jpg?fit=600%2C610&ssl=1' },
        { name: 'OO White Coffee', image: 'https://lh5.googleusercontent.com/p/AF1QipO2alcvwfBimG98CcFspug1_UhcFiGBr4PaGkeW=w427-h240-k-no' },
        { name: 'Taco Bell Batu Kawan', image: 'https://lh5.googleusercontent.com/p/AF1QipOCas8ZsOt6DBcBF6NZ3uAP4AT7Gu9DTZLHs1G1=w408-h544-k-no' },
        { name: 'The Krabi Cuisine', image: 'https://images.deliveryhero.io/image/fd-my/LH/sz8b-listing.jpg' }

        // Add more restaurants as needed
    ];

    const restaurantList = document.getElementById('restaurant-list');
    const randomButton = document.getElementById('random-button');
    const selectedRestaurant = document.getElementById('selected-restaurant');

    // Display the list of restaurants
    restaurants.forEach(restaurant => {
        const restaurantDiv = document.createElement('div');
        restaurantDiv.classList.add('restaurant');
        
        const restaurantImage = document.createElement('img');
        restaurantImage.src = restaurant.image;
        restaurantImage.alt = restaurant.name;

        const restaurantName = document.createElement('p');
        restaurantName.textContent = restaurant.name;

        restaurantDiv.appendChild(restaurantImage);
        restaurantDiv.appendChild(restaurantName);
        restaurantList.appendChild(restaurantDiv);
    });

    // Function to pick a random restaurant
    const pickRandomRestaurant = () => {
        const randomIndex = Math.floor(Math.random() * restaurants.length);
        const restaurant = restaurants[randomIndex];
        selectedRestaurant.textContent = `You should try: ${restaurant.name}`;
    };

    // Event listener for the button
    randomButton.addEventListener('click', pickRandomRestaurant);
});
