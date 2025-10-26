let travelData = null;

const timezones = {
    "Australia": "Australia/Sydney",
    "Japan": "Asia/Tokyo",
    "Brazil": "America/Sao_Paulo",
    "Cambodia": "Asia/Phnom_Penh",
    "India": "Asia/Kolkata",
    "French Polynesia": "Pacific/Tahiti"
};

async function loadTravelData() {

    useFallbackData();
    
    try {

        let response;
        try {
            response = await fetch('./travel_recommendation_api.json');
            if (response.ok) {
                const jsonData = await response.json();
                travelData = jsonData;
                console.log('Travel data loaded from JSON file successfully');
            }
        } catch (e) {
            console.log('Using fallback data (JSON file not found)');
        }
    } catch (error) {
        console.log('Using fallback data:', error.message);
    }
}

//Fallback data in case JSON file is not found
function useFallbackData() {
    console.log('Using fallback data...');
    travelData = {
        "countries": [
          {
            "id": 1,
            "name": "Australia",
            "cities": [
              {
                "name": "Sydney, Australia",
                "imageUrl": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=500",
                "description": "A vibrant city known for its iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge."
              },
              {
                "name": "Melbourne, Australia",
                "imageUrl": "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=500",
                "description": "A cultural hub famous for its art, food, and diverse neighborhoods."
              }
            ]
          },
          {
            "id": 2,
            "name": "Japan",
            "cities": [
              {
                "name": "Tokyo, Japan",
                "imageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500",
                "description": "A bustling metropolis blending tradition and modernity, famous for its cherry blossoms and rich culture."
              },
              {
                "name": "Kyoto, Japan",
                "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500",
                "description": "Known for its historic temples, gardens, and traditional tea houses."
              }
            ]
          },
          {
            "id": 3,
            "name": "Brazil",
            "cities": [
              {
                "name": "Rio de Janeiro, Brazil",
                "imageUrl": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=500",
                "description": "A lively city known for its stunning beaches, vibrant carnival celebrations, and iconic landmarks."
              },
              {
                "name": "São Paulo, Brazil",
                "imageUrl": "https://images.unsplash.com/photo-1541737163-e4e1d66c2e79?w=500",
                "description": "The financial hub with diverse culture, arts, and a vibrant nightlife."
              }
            ]
          }
        ],
        "temples": [
          {
            "id": 1,
            "name": "Angkor Wat, Cambodia",
            "imageUrl": "https://images.unsplash.com/photo-1528181304800-259b08848526?w=500",
            "description": "A UNESCO World Heritage site and the largest religious monument in the world."
          },
          {
            "id": 2,
            "name": "Taj Mahal, India",
            "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500",
            "description": "An iconic symbol of love and a masterpiece of Mughal architecture."
          }
        ],
        "beaches": [
          {
            "id": 1,
            "name": "Bora Bora, French Polynesia",
            "imageUrl": "https://images.unsplash.com/photo-1589197331516-2e2b3a4a0f4a?w=500",
            "description": "An island known for its stunning turquoise waters and luxurious overwater bungalows."
          },
          {
            "id": 2,
            "name": "Copacabana Beach, Brazil",
            "imageUrl": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=500",
            "description": "A famous beach in Rio de Janeiro, Brazil, with a vibrant atmosphere and scenic views."
          }
        ]
    };
}

window.addEventListener('DOMContentLoaded', loadTravelData);

function searchDestinations() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const resultsSection = document.getElementById('resultsSection');
    const resultsGrid = document.getElementById('resultsGrid');

    if (!query) {
        alert('Please enter a destination to search!');
        return;
    }

    if (!travelData) {
        alert('Travel data is still loading. Please try again in a moment.');
        return;
    }

    resultsGrid.innerHTML = '';
    let foundResults = false;
    let allResults = [];

    //Search in countries/cities
    if (query.includes('country') || query.includes('countries') || query.includes('city') || query.includes('cities') || 
        query.includes('australia') || query.includes('japan') || query.includes('brazil') ||
        query.includes('sydney') || query.includes('melbourne') || query.includes('tokyo') || 
        query.includes('kyoto') || query.includes('rio') || query.includes('sao paulo')) {
        travelData.countries.forEach(country => {
            country.cities.forEach(city => {
                if (city.name.toLowerCase().includes(query) || 
                    city.description.toLowerCase().includes(query) ||
                    country.name.toLowerCase().includes(query)) {
                    foundResults = true;
                    allResults.push({
                        type: 'city',
                        data: city,
                        country: country.name
                    });
                }
            });
        });
    }

    if (query.includes('temple') || query.includes('temples') || 
        query.includes('angkor') || query.includes('taj') || query.includes('cambodia') || query.includes('india')) {
        travelData.temples.forEach(temple => {
            if (temple.name.toLowerCase().includes(query) || 
                temple.description.toLowerCase().includes(query)) {
                foundResults = true;
                allResults.push({
                    type: 'temple',
                    data: temple
                });
            }
        });
    }

    if (query.includes('beach') || query.includes('beaches') || 
        query.includes('bora') || query.includes('copacabana')) {
        travelData.beaches.forEach(beach => {
            if (beach.name.toLowerCase().includes(query) || 
                beach.description.toLowerCase().includes(query)) {
                foundResults = true;
                allResults.push({
                    type: 'beach',
                    data: beach
                });
            }
        });
    }

    if (foundResults) {
        allResults.forEach(result => {
            const card = createDestinationCard(result);
            resultsGrid.appendChild(card);
        });
        resultsSection.style.display = 'block';
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
        resultsGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; font-size: 1.5rem;">No destinations found. Try searching for: countries, temples, beaches, Australia, Japan, Brazil, or specific city names!</div>';
        resultsSection.style.display = 'block';
    }
}

function createDestinationCard(result) {
    const card = document.createElement('div');
    card.className = 'result-card';
    
    const { type, data, country } = result;
    let timezone = null;
    let locationName = data.name;
    
    //Determine timezone based on location
    if (type === 'city' && country) {
        timezone = timezones[country];
    } else {
        //Extract country from name for temples and beaches
        const nameParts = data.name.split(',');
        if (nameParts.length > 1) {
            const countryName = nameParts[1].trim();
            timezone = timezones[countryName];
        }
    }
    
    const currentTime = timezone ? getCurrentTime(timezone) : null;
    const typeLabel = type.charAt(0).toUpperCase() + type.slice(1);
    
    card.innerHTML = `
        <div style="background: rgba(255, 255, 255, 0.1); padding: 0.5rem 1rem; border-radius: 8px; display: inline-block; margin-bottom: 1rem;">
            <strong>${typeLabel}</strong>
        </div>
        ${data.imageUrl ? `<img src="${data.imageUrl}" alt="${locationName}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 10px; margin-bottom: 1rem;">` : ''}
        <h3>${locationName}</h3>
        <p>${data.description}</p>
        ${currentTime ? `<div class="country-time">🕐 Local Time: ${currentTime}</div>` : ''}
        <button class="visit-btn" onclick="visitDestination('${locationName}')">Visit</button>
    `;
    
    return card;
}

function getCurrentTime(timezone) {
    try {
        const options = {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        return new Intl.DateTimeFormat('en-US', options).format(new Date());
    } catch (e) {
        return 'Time unavailable';
    }
}

function clearResults() {
    const resultsSection = document.getElementById('resultsSection');
    const resultsGrid = document.getElementById('resultsGrid');
    const searchInput = document.getElementById('searchInput');
    
    resultsSection.style.display = 'none';
    resultsGrid.innerHTML = '';
    searchInput.value = '';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function bookNow() {
    alert('🎉 Thank you for your interest! Our booking system will be available soon. Start exploring destinations to plan your perfect trip!');
}

function visitDestination(name) {
    alert(`🌍Get ready to visit ${name}! More details coming soon.`);
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        searchDestinations();
    }
}

//Update time every second for displayed results
setInterval(() => {
    const timeElements = document.querySelectorAll('.country-time');
    timeElements.forEach((element) => {
        const card = element.closest('.result-card');
        if (card) {
            const locationName = card.querySelector('h3').textContent;
           
            let timezone = null;
            for (const [countryName, tz] of Object.entries(timezones)) {
                if (locationName.includes(countryName)) {
                    timezone = tz;
                    break;
                }
            }
            if (timezone) {
                element.innerHTML = ` Local Time: ${getCurrentTime(timezone)}`;
            }
        }
    });
}, 1000);