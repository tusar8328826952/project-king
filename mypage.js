// Modal data for streaming platforms
const platformData = {
    imdb: {
        title: 'IMDb',
        description: 'IMDb is the world\'s most popular and authoritative source for movie, TV and celebrity content. Explore ratings, reviews, trailers, and comprehensive information about millions of movies, TV shows, and people.',
        link: 'https://www.imdb.com'
    },
    netflix: {
        title: 'Netflix',
        description: 'Netflix is a streaming entertainment service offering TV shows, movies, and more on thousands of internet-connected devices. Watch unlimited content ad-free with flexible plans designed for every budget.',
        link: 'https://www.netflix.com'
    },
    youtube: {
        title: 'YouTube',
        description: 'YouTube is the world\'s largest video sharing platform where billions of people discover, watch, and share videos. From music and entertainment to education and news, find unlimited content on YouTube.',
        link: 'https://www.youtube.com'
    },
    prime: {
        title: 'Prime Video',
        description: 'Prime Video is Amazon\'s streaming service offering thousands of movies, TV shows, and original series. Included with Amazon Prime membership, watch exclusive content, award-winning movies, and more.',
        link: 'https://www.primevideo.com'
    },
    disney: {
        title: 'Disney+',
        description: 'Disney+ brings together stories and characters from Disney, Pixar, Marvel, Star Wars, and National Geographic. Stream Disney+ for exclusive originals and beloved classics all in one place.',
        link: 'https://www.disneyplus.com'
    },
    hulu: {
        title: 'Hulu',
        description: 'Hulu is the premium streaming destination for TV shows with the largest selection of current episodes. Watch thousands of full episodes of hit series, plus movies, originals, and more.',
        link: 'https://www.hulu.com'
    }
};

// Movies data organized by genre with streaming links
const moviesData = {
    action: {
        title: 'Action Movies',
        movies: [
            { title: 'Mad Max Fury Road', rating: '8.1/10', emoji: '🏎️', platforms: { netflix: 'https://www.netflix.com/search?q=mad%20max', youtube: 'https://www.youtube.com/results?search_query=mad+max+fury+road', prime: 'https://www.primevideo.com/search?keyword=mad%20max' } },
            { title: 'The Dark Knight', rating: '9.0/10', emoji: '🦇', platforms: { netflix: 'https://www.netflix.com/search?q=dark%20knight', youtube: 'https://www.youtube.com/results?search_query=the+dark+knight', prime: 'https://www.primevideo.com/search?keyword=dark%20knight' } },
            { title: 'John Wick', rating: '8.1/10', emoji: '🔫', platforms: { netflix: 'https://www.netflix.com/search?q=john%20wick', youtube: 'https://www.youtube.com/results?search_query=john+wick', prime: 'https://www.primevideo.com/search?keyword=john%20wick' } },
            { title: 'Mission Impossible', rating: '7.9/10', emoji: '🚁', platforms: { netflix: 'https://www.netflix.com/search?q=mission%20impossible', youtube: 'https://www.youtube.com/results?search_query=mission+impossible', prime: 'https://www.primevideo.com/search?keyword=mission%20impossible' } },
            { title: 'Avengers', rating: '8.0/10', emoji: '⚡', platforms: { disney: 'https://www.disneyplus.com/search?q=avengers', youtube: 'https://www.youtube.com/results?search_query=avengers', prime: 'https://www.primevideo.com/search?keyword=avengers' } },
            { title: 'Fast & Furious', rating: '7.0/10', emoji: '💨', platforms: { netflix: 'https://www.netflix.com/search?q=fast%20furious', youtube: 'https://www.youtube.com/results?search_query=fast+and+furious', prime: 'https://www.primevideo.com/search?keyword=fast%20furious' } }
        ]
    },
    comedy: {
        title: 'Comedy Movies',
        movies: [
            { title: 'Superbad', rating: '7.6/10', emoji: '😂', platforms: { netflix: 'https://www.netflix.com/search?q=superbad', youtube: 'https://www.youtube.com/results?search_query=superbad', prime: 'https://www.primevideo.com/search?keyword=superbad' } },
            { title: 'The Grand Budapest Hotel', rating: '8.1/10', emoji: '🏨', platforms: { netflix: 'https://www.netflix.com/search?q=grand%20budapest', youtube: 'https://www.youtube.com/results?search_query=grand+budapest+hotel', prime: 'https://www.primevideo.com/search?keyword=grand%20budapest' } },
            { title: 'Bridesmaids', rating: '7.8/10', emoji: '👰', platforms: { netflix: 'https://www.netflix.com/search?q=bridesmaids', youtube: 'https://www.youtube.com/results?search_query=bridesmaids', prime: 'https://www.primevideo.com/search?keyword=bridesmaids' } },
            { title: 'Hangover', rating: '7.7/10', emoji: '🍻', platforms: { netflix: 'https://www.netflix.com/search?q=hangover', youtube: 'https://www.youtube.com/results?search_query=the+hangover', prime: 'https://www.primevideo.com/search?keyword=hangover' } },
            { title: 'Groundhog Day', rating: '8.0/10', emoji: '🌤️', platforms: { netflix: 'https://www.netflix.com/search?q=groundhog%20day', youtube: 'https://www.youtube.com/results?search_query=groundhog+day', prime: 'https://www.primevideo.com/search?keyword=groundhog%20day' } },
            { title: 'Tropic Thunder', rating: '7.0/10', emoji: '🌴', platforms: { netflix: 'https://www.netflix.com/search?q=tropic%20thunder', youtube: 'https://www.youtube.com/results?search_query=tropic+thunder', prime: 'https://www.primevideo.com/search?keyword=tropic%20thunder' } }
        ]
    },
    drama: {
        title: 'Drama Movies',
        movies: [
            { title: 'Shawshank Redemption', rating: '9.3/10', emoji: '🔒', platforms: { netflix: 'https://www.netflix.com/search?q=shawshank', youtube: 'https://www.youtube.com/results?search_query=shawshank+redemption', prime: 'https://www.primevideo.com/search?keyword=shawshank' } },
            { title: 'The Godfather', rating: '9.2/10', emoji: '🎩', platforms: { netflix: 'https://www.netflix.com/search?q=godfather', youtube: 'https://www.youtube.com/results?search_query=the+godfather', prime: 'https://www.primevideo.com/search?keyword=godfather' } },
            { title: 'Forrest Gump', rating: '8.8/10', emoji: '🏃', platforms: { netflix: 'https://www.netflix.com/search?q=forrest%20gump', youtube: 'https://www.youtube.com/results?search_query=forrest+gump', prime: 'https://www.primevideo.com/search?keyword=forrest%20gump' } },
            { title: 'Life is Beautiful', rating: '8.6/10', emoji: '❤️', platforms: { netflix: 'https://www.netflix.com/search?q=life%20beautiful', youtube: 'https://www.youtube.com/results?search_query=life+is+beautiful', prime: 'https://www.primevideo.com/search?keyword=life%20beautiful' } },
            { title: 'Pulp Fiction', rating: '8.9/10', emoji: '💼', platforms: { netflix: 'https://www.netflix.com/search?q=pulp%20fiction', youtube: 'https://www.youtube.com/results?search_query=pulp+fiction', prime: 'https://www.primevideo.com/search?keyword=pulp%20fiction' } },
            { title: 'Parasite', rating: '8.5/10', emoji: '🏠', platforms: { netflix: 'https://www.netflix.com/search?q=parasite', youtube: 'https://www.youtube.com/results?search_query=parasite+movie', prime: 'https://www.primevideo.com/search?keyword=parasite' } }
        ]
    },
    horror: {
        title: 'Horror Movies',
        movies: [
            { title: 'The Shining', rating: '8.4/10', emoji: '👻', platforms: { netflix: 'https://www.netflix.com/search?q=shining', youtube: 'https://www.youtube.com/results?search_query=the+shining', prime: 'https://www.primevideo.com/search?keyword=shining' } },
            { title: 'The Ring', rating: '7.3/10', emoji: '📱', platforms: { netflix: 'https://www.netflix.com/search?q=ring', youtube: 'https://www.youtube.com/results?search_query=the+ring', prime: 'https://www.primevideo.com/search?keyword=ring' } },
            { title: 'Hereditary', rating: '7.6/10', emoji: '😱', platforms: { netflix: 'https://www.netflix.com/search?q=hereditary', youtube: 'https://www.youtube.com/results?search_query=hereditary', prime: 'https://www.primevideo.com/search?keyword=hereditary' } },
            { title: 'Insidious', rating: '6.8/10', emoji: '👹', platforms: { netflix: 'https://www.netflix.com/search?q=insidious', youtube: 'https://www.youtube.com/results?search_query=insidious', prime: 'https://www.primevideo.com/search?keyword=insidious' } },
            { title: 'The Exorcist', rating: '8.1/10', emoji: '😈', platforms: { netflix: 'https://www.netflix.com/search?q=exorcist', youtube: 'https://www.youtube.com/results?search_query=the+exorcist', prime: 'https://www.primevideo.com/search?keyword=exorcist' } },
            { title: 'A Quiet Place', rating: '7.5/10', emoji: '🤫', platforms: { netflix: 'https://www.netflix.com/search?q=quiet%20place', youtube: 'https://www.youtube.com/results?search_query=a+quiet+place', prime: 'https://www.primevideo.com/search?keyword=quiet%20place' } }
        ]
    },
    scifi: {
        title: 'Sci-Fi Movies',
        movies: [
            { title: 'Inception', rating: '8.8/10', emoji: '💭', platforms: { netflix: 'https://www.netflix.com/search?q=inception', youtube: 'https://www.youtube.com/results?search_query=inception', prime: 'https://www.primevideo.com/search?keyword=inception' } },
            { title: 'Interstellar', rating: '8.7/10', emoji: '🚀', platforms: { netflix: 'https://www.netflix.com/search?q=interstellar', youtube: 'https://www.youtube.com/results?search_query=interstellar', prime: 'https://www.primevideo.com/search?keyword=interstellar' } },
            { title: 'The Matrix', rating: '8.7/10', emoji: '💊', platforms: { netflix: 'https://www.netflix.com/search?q=matrix', youtube: 'https://www.youtube.com/results?search_query=the+matrix', prime: 'https://www.primevideo.com/search?keyword=matrix' } },
            { title: 'Blade Runner 2049', rating: '8.0/10', emoji: '🤖', platforms: { netflix: 'https://www.netflix.com/search?q=blade%20runner', youtube: 'https://www.youtube.com/results?search_query=blade+runner+2049', prime: 'https://www.primevideo.com/search?keyword=blade%20runner' } },
            { title: 'Tenet', rating: '6.8/10', emoji: '⏰', platforms: { netflix: 'https://www.netflix.com/search?q=tenet', youtube: 'https://www.youtube.com/results?search_query=tenet', prime: 'https://www.primevideo.com/search?keyword=tenet' } },
            { title: 'Dune', rating: '8.0/10', emoji: '🌍', platforms: { netflix: 'https://www.netflix.com/search?q=dune', youtube: 'https://www.youtube.com/results?search_query=dune', prime: 'https://www.primevideo.com/search?keyword=dune' } }
        ]
    },
    romance: {
        title: 'Romance Movies',
        movies: [
            { title: 'The Notebook', rating: '7.8/10', emoji: '📖', platforms: { netflix: 'https://www.netflix.com/search?q=notebook', youtube: 'https://www.youtube.com/results?search_query=the+notebook', prime: 'https://www.primevideo.com/search?keyword=notebook' } },
            { title: 'Titanic', rating: '7.9/10', emoji: '🚢', platforms: { netflix: 'https://www.netflix.com/search?q=titanic', youtube: 'https://www.youtube.com/results?search_query=titanic', prime: 'https://www.primevideo.com/search?keyword=titanic' } },
            { title: 'La La Land', rating: '8.0/10', emoji: '🎼', platforms: { netflix: 'https://www.netflix.com/search?q=la%20la%20land', youtube: 'https://www.youtube.com/results?search_query=la+la+land', prime: 'https://www.primevideo.com/search?keyword=la%20la%20land' } },
            { title: 'Pride and Prejudice', rating: '7.8/10', emoji: '💕', platforms: { netflix: 'https://www.netflix.com/search?q=pride%20prejudice', youtube: 'https://www.youtube.com/results?search_query=pride+and+prejudice', prime: 'https://www.primevideo.com/search?keyword=pride%20prejudice' } },
            { title: 'Before Sunrise', rating: '8.0/10', emoji: '🌅', platforms: { netflix: 'https://www.netflix.com/search?q=before%20sunrise', youtube: 'https://www.youtube.com/results?search_query=before+sunrise', prime: 'https://www.primevideo.com/search?keyword=before%20sunrise' } },
            { title: 'About Time', rating: '7.8/10', emoji: '⏱️', platforms: { netflix: 'https://www.netflix.com/search?q=about%20time', youtube: 'https://www.youtube.com/results?search_query=about+time', prime: 'https://www.primevideo.com/search?keyword=about%20time' } }
        ]
    }
};

// Show genre movies in modal
function showGenreMovies(genre) {
    const data = moviesData[genre];
    if (!data) return;
    
    const genreTitle = document.getElementById('genreTitle');
    const moviesGrid = document.getElementById('moviesGrid');
    const modal = document.getElementById('moviesModal');
    
    genreTitle.textContent = data.title;
    
    // Clear previous movies
    moviesGrid.innerHTML = '';
    
    // Add movies to grid
    data.movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'modal-movie-card';
        const platformLinks = movie.platforms ? `
            <div class="watch-links">
                ${movie.platforms.netflix ? `<a href="${movie.platforms.netflix}" target="_blank" class="watch-btn netflix-btn">Netflix</a>` : ''}
                ${movie.platforms.youtube ? `<a href="${movie.platforms.youtube}" target="_blank" class="watch-btn youtube-btn">YouTube</a>` : ''}
                ${movie.platforms.prime ? `<a href="${movie.platforms.prime}" target="_blank" class="watch-btn prime-btn">Prime</a>` : ''}
                ${movie.platforms.disney ? `<a href="${movie.platforms.disney}" target="_blank" class="watch-btn disney-btn">Disney+</a>` : ''}
            </div>
        ` : '';
        movieCard.innerHTML = `
            <div class="modal-movie-poster">${movie.emoji}</div>
            <h4>${movie.title}</h4>
            <p>⭐ ${movie.rating}</p>
            ${platformLinks}
        `;
        moviesGrid.appendChild(movieCard);
    });
    
    modal.classList.add('show');
}

// Close movies modal
function closeMoviesModal() {
    const modal = document.getElementById('moviesModal');
    modal.classList.remove('show');
}

// Close movies modal when clicking outside
window.addEventListener('click', function(event) {
    const moviesModal = document.getElementById('moviesModal');
    if (event.target === moviesModal) {
        closeMoviesModal();
    }
});

// Store the current platform link
let currentPlatformLink = '';
let popupFrameHistory = [];
let currentHistoryIndex = -1;
let popupLoadAttempts = 0;

// CORS Proxy URLs (multiple options for redundancy)
const corsProxies = [
    'https://api.allorigins.win/raw?url=',
    'https://cors-anywhere.herokuapp.com/',
];

// Modal functions for platforms
function openModal(platform) {
    const modal = document.getElementById('modal');
    const data = platformData[platform];
    
    if (data) {
        document.getElementById('modalTitle').textContent = data.title;
        document.getElementById('modalDescription').textContent = data.description;
        currentPlatformLink = data.link;
        modal.classList.add('show');
    }
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
}

// Popup window functions
function openPopupWindow() {
    closeModal();
    const popupWindow = document.getElementById('popupWindow');
    const popupTitle = document.getElementById('popupTitle');
    const popupFrame = document.getElementById('popupFrame');
    const popupExternalLink = document.getElementById('popupExternalLink');
    
    // Get the title from modal
    popupTitle.textContent = document.getElementById('modalTitle').textContent;
    
    // Set the external link
    popupExternalLink.href = currentPlatformLink;
    popupExternalLink.textContent = 'Open in New Tab ↗';
    
    // Reset attempts counter
    popupLoadAttempts = 0;
    
    // Load the website in iframe
    loadWebsiteInPopup(currentPlatformLink);
    
    // Show the popup window
    popupWindow.classList.add('show');
    
    // Reset history
    popupFrameHistory = [currentPlatformLink];
    currentHistoryIndex = 0;
}

function loadWebsiteInPopup(url) {
    const popupFrame = document.getElementById('popupFrame');
    const popupLoading = document.getElementById('popupLoading');
    const popupWindow = document.getElementById('popupWindow');
    
    if (!url) return;
    
    // Show loading indicator
    popupLoading.style.display = 'flex';
    popupLoading.innerHTML = '<div class="spinner"></div><p>Loading website...</p>';
    
    try {
        // Method 1: Try direct loading first
        popupFrame.src = url;
        
        let loadTimeout = setTimeout(() => {
            // If it takes too long, try alternative method
            if (popupLoadAttempts === 0) {
                popupLoadAttempts++;
                clearTimeout(loadTimeout);
                tryAlternativeLoad(url);
            }
        }, 3000);
        
        popupFrame.onload = function() {
            clearTimeout(loadTimeout);
            popupLoading.style.display = 'none';
            console.log('Website loaded successfully');
        };
        
        popupFrame.onerror = function() {
            clearTimeout(loadTimeout);
            if (popupLoadAttempts === 0) {
                popupLoadAttempts++;
                tryAlternativeLoad(url);
            }
        };
        
    } catch (error) {
        console.error('Error loading website:', error);
        popupLoading.innerHTML = '<p style="color: #ff6b6b;">Unable to load website</p>';
        setTimeout(() => {
            popupLoading.style.display = 'none';
        }, 3000);
    }
}

function tryAlternativeLoad(url) {
    const popupFrame = document.getElementById('popupFrame');
    const popupLoading = document.getElementById('popupLoading');
    
    // Create an alternative approach using a data wrapper
    try {
        // Try with the URL encoded for API-based loading
        const encodedUrl = encodeURIComponent(url);
        const proxyUrl = corsProxies[0] + encodedUrl;
        
        popupFrame.src = url;
        
        // Add event listener for when content loads
        popupFrame.onload = function() {
            popupLoading.style.display = 'none';
        };
        
        setTimeout(() => {
            popupLoading.style.display = 'none';
        }, 2000);
        
    } catch (error) {
        console.error('Alternative load failed:', error);
        popupLoading.innerHTML = '<div style="text-align: center; padding: 20px;"><p style="color: #ff6b6b; font-size: 1.1em;">⚠️ Unable to load in popup</p><p style="color: #aaa; margin-top: 10px;">Use "Open in New Tab" to visit this website</p></div>';
    }
}

function refreshPopupFrame() {
    const popupFrame = document.getElementById('popupFrame');
    const popupLoading = document.getElementById('popupLoading');
    
    if (popupFrame.src) {
        popupLoading.style.display = 'flex';
        popupLoading.innerHTML = '<div class="spinner"></div><p>Refreshing...</p>';
        
        // Reload the iframe
        popupFrame.src = popupFrame.src;
        
        setTimeout(() => {
            popupLoading.style.display = 'none';
        }, 2000);
    }
}

function goBackPopup() {
    if (currentHistoryIndex > 0) {
        currentHistoryIndex--;
        const previousUrl = popupFrameHistory[currentHistoryIndex];
        loadWebsiteInPopup(previousUrl);
    }
}

function closePopupWindow() {
    const popupWindow = document.getElementById('popupWindow');
    const popupFrame = document.getElementById('popupFrame');
    const popupLoading = document.getElementById('popupLoading');
    
    popupWindow.classList.remove('show');
    popupFrame.src = '';
    popupLoading.style.display = 'none';
    popupFrameHistory = [];
    currentHistoryIndex = -1;
    popupLoadAttempts = 0;
}

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
        closeMoviesModal();
    }
});

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        
        // Close menu on mobile if open
        if (mainNav.classList.contains('nav-hidden') === false) {
            mainNav.classList.add('nav-hidden');
        }
    });
});

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTopBtn');
const scrollProgress = document.getElementById('scrollProgress');

window.addEventListener('scroll', function() {
    // Update scroll to top button visibility
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
    
    // Update floating page indicator
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.pageYOffset / totalHeight) * 100;
    
    scrollProgress.style.width = scrolled + '%';
    
    // Change color to green when page is fully scrolled
    if (scrolled >= 95) {
        scrollProgress.classList.add('complete');
    } else {
        scrollProgress.classList.remove('complete');
    }
});

scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// Toggle navigation
const toggleNavBtn = document.getElementById('toggleNavBtn');
const mainNav = document.getElementById('mainNav');
toggleNavBtn.addEventListener('click', function() {
    mainNav.classList.toggle('nav-hidden');
});

// Theme toggle
const themeToggleBtn = document.getElementById('themeToggleBtn');
themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    themeToggleBtn.textContent = document.body.classList.contains('light-theme') ? '☀️ Light' : '🌙 Dark';
});
