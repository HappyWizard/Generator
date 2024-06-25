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
        { name: '烧腊饭', image: 'https://images.deliveryhero.io/image/fd-my/LH/gb9i-listing.jpg' }

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
