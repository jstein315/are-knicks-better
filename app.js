// NBA Teams (excluding Knicks) with snarky comments and team colors
const NBA_TEAMS = [
    { id: 1, city: 'Atlanta', name: 'Hawks', fullName: 'Atlanta Hawks', abbr: 'ATL',
      colors: { primary: '#E03A3E', secondary: '#C1D32F' },
      snarkYes: "Trae Young's hair has more rebounds than their whole team.",
      snarkNo: "At least we don't have to watch Trae Young shimmy after every three." },
    { id: 2, city: 'Boston', name: 'Celtics', fullName: 'Boston Celtics', abbr: 'BOS',
      colors: { primary: '#007A33', secondary: '#BA9653' },
      snarkYes: "Even their 18 banners can't save them from this L.",
      snarkNo: "Painful to admit, but those leprechauns are cooking right now." },
    { id: 3, city: 'Brooklyn', name: 'Nets', fullName: 'Brooklyn Nets', abbr: 'BKN',
      colors: { primary: '#000000', secondary: '#FFFFFF' },
      snarkYes: "Remember when they had KD, Kyrie, AND Harden? Good times.",
      snarkNo: "They're in the same city and still can't fill seats like MSG." },
    { id: 4, city: 'Charlotte', name: 'Hornets', fullName: 'Charlotte Hornets', abbr: 'CHA',
      colors: { primary: '#1D1160', secondary: '#00788C' },
      snarkYes: "LaMelo's passing can't pass them past mediocrity.",
      snarkNo: "Losing to a team owned by Michael Jordan's business decisions hurts." },
    { id: 5, city: 'Chicago', name: 'Bulls', fullName: 'Chicago Bulls', abbr: 'CHI',
      colors: { primary: '#CE1141', secondary: '#000000' },
      snarkYes: "MJ retired 20 years ago, and so did their relevance.",
      snarkNo: "Deep dish pizza is still overrated, but their team isn't bad." },
    { id: 6, city: 'Cleveland', name: 'Cavaliers', fullName: 'Cleveland Cavaliers', abbr: 'CLE',
      colors: { primary: '#860038', secondary: '#FDBB30' },
      snarkYes: "LeBron left. Twice. Can you blame him?",
      snarkNo: "Donovan Mitchell chose Cleveland over us and it still stings." },
    { id: 7, city: 'Dallas', name: 'Mavericks', fullName: 'Dallas Mavericks', abbr: 'DAL',
      colors: { primary: '#00538C', secondary: '#002B5E' },
      snarkYes: "Luka can't carry a team AND his conditioning.",
      snarkNo: "Everything's bigger in Texas, including our disappointment." },
    { id: 8, city: 'Denver', name: 'Nuggets', fullName: 'Denver Nuggets', abbr: 'DEN',
      colors: { primary: '#0E2240', secondary: '#FEC524' },
      snarkYes: "Jokic needs an oxygen tank at altitude and against us.",
      snarkNo: "Hard to beat a guy who looks like he delivers pizzas but plays like Magic." },
    { id: 9, city: 'Detroit', name: 'Pistons', fullName: 'Detroit Pistons', abbr: 'DET',
      colors: { primary: '#C8102E', secondary: '#1D42BA' },
      snarkYes: "The only thing running in Detroit is their losing streak.",
      snarkNo: "Losing to Detroit is like getting dunked on by a sedan." },
    { id: 10, city: 'Golden State', name: 'Warriors', fullName: 'Golden State Warriors', abbr: 'GS',
      colors: { primary: '#1D428A', secondary: '#FFC72C' },
      snarkYes: "Splash Brothers? More like Splashed Their Prime.",
      snarkNo: "Steph Curry is annoyingly good and we hate to see it." },
    { id: 11, city: 'Houston', name: 'Rockets', fullName: 'Houston Rockets', abbr: 'HOU',
      colors: { primary: '#CE1141', secondary: '#000000' },
      snarkYes: "Their rebuild has more stages than a NASA launch.",
      snarkNo: "We have a problem, and it's the Houston Rockets." },
    { id: 12, city: 'Indiana', name: 'Pacers', fullName: 'Indiana Pacers', abbr: 'IND',
      colors: { primary: '#002D62', secondary: '#FDBB30' },
      snarkYes: "The only excitement in Indiana is leaving Indiana.",
      snarkNo: "Tyrese Haliburton is too smooth and we're not okay with it." },
    { id: 13, city: 'LA', name: 'Clippers', fullName: 'LA Clippers', abbr: 'LAC',
      colors: { primary: '#C8102E', secondary: '#1D428A' },
      snarkYes: "Still living in the Lakers' shadow, and now ours too.",
      snarkNo: "They finally have their own arena and our respect. Barely." },
    { id: 14, city: 'Los Angeles', name: 'Lakers', fullName: 'Los Angeles Lakers', abbr: 'LAL',
      colors: { primary: '#552583', secondary: '#FDB927' },
      snarkYes: "All those banners and they still can't beat New York.",
      snarkNo: "Hollywood has better scripts than our offensive plays tonight." },
    { id: 15, city: 'Memphis', name: 'Grizzlies', fullName: 'Memphis Grizzlies', abbr: 'MEM',
      colors: { primary: '#5D76A9', secondary: '#12173F' },
      snarkYes: "Ja Morant's Instagram is scarier than their defense.",
      snarkNo: "Grit and grind beats glitz and glamour sometimes." },
    { id: 16, city: 'Miami', name: 'Heat', fullName: 'Miami Heat', abbr: 'MIA',
      colors: { primary: '#98002E', secondary: '#F9A01B' },
      snarkYes: "Heat Culture couldn't keep them warm against us.",
      snarkNo: "Jimmy Butler is inevitable and we hate it." },
    { id: 17, city: 'Milwaukee', name: 'Bucks', fullName: 'Milwaukee Bucks', abbr: 'MIL',
      colors: { primary: '#00471B', secondary: '#EEE1C6' },
      snarkYes: "Giannis ran through everyone except the Knicks.",
      snarkNo: "Getting Giannis'd is a real thing and it happened to us." },
    { id: 18, city: 'Minnesota', name: 'Timberwolves', fullName: 'Minnesota Timberwolves', abbr: 'MIN',
      colors: { primary: '#0C2340', secondary: '#236192' },
      snarkYes: "Anthony Edwards talks a lot for someone we just beat.",
      snarkNo: "Ant is that guy, unfortunately for us." },
    { id: 19, city: 'New Orleans', name: 'Pelicans', fullName: 'New Orleans Pelicans', abbr: 'NO',
      colors: { primary: '#0C2340', secondary: '#C8102E' },
      snarkYes: "Zion's diet has more consistency than their roster.",
      snarkNo: "When Zion plays, they're actually scary. Who knew?" },
    { id: 20, city: 'Oklahoma City', name: 'Thunder', fullName: 'Oklahoma City Thunder', abbr: 'OKC',
      colors: { primary: '#007AC1', secondary: '#EF3B24' },
      snarkYes: "All those draft picks and still catching Knicks hands.",
      snarkNo: "SGA is a problem and Presti is an evil genius." },
    { id: 21, city: 'Orlando', name: 'Magic', fullName: 'Orlando Magic', abbr: 'ORL',
      colors: { primary: '#0077C0', secondary: '#C4CED4' },
      snarkYes: "Disney World is the only magic happening in Orlando.",
      snarkNo: "Paolo Banchero is legit and that's annoying." },
    { id: 22, city: 'Philadelphia', name: '76ers', fullName: 'Philadelphia 76ers', abbr: 'PHI',
      colors: { primary: '#006BB6', secondary: '#ED174C' },
      snarkYes: "Trust the Process of losing to New York.",
      snarkNo: "Embiid always cooks us like a Philly cheesesteak." },
    { id: 23, city: 'Phoenix', name: 'Suns', fullName: 'Phoenix Suns', abbr: 'PHX',
      colors: { primary: '#1D1160', secondary: '#E56020' },
      snarkYes: "KD, Booker, and Beal still can't see the garden bloom.",
      snarkNo: "They paid everyone and it's somehow working against us." },
    { id: 24, city: 'Portland', name: 'Trail Blazers', fullName: 'Portland Trail Blazers', abbr: 'POR',
      colors: { primary: '#E03A3E', secondary: '#000000' },
      snarkYes: "Dame left and took their relevance with him.",
      snarkNo: "Losing to Portland is like losing to rain. Depressing." },
    { id: 25, city: 'Sacramento', name: 'Kings', fullName: 'Sacramento Kings', abbr: 'SAC',
      colors: { primary: '#5A2D81', secondary: '#63727A' },
      snarkYes: "Light the beam? More like dim the hopes.",
      snarkNo: "They waited 20 years for playoffs and now they're beating us?" },
    { id: 26, city: 'San Antonio', name: 'Spurs', fullName: 'San Antonio Spurs', abbr: 'SA',
      colors: { primary: '#C4CED4', secondary: '#000000' },
      snarkYes: "Wembanyama is 7'4\" but still looked up to us tonight.",
      snarkNo: "Victor Wembanyama is a cheat code and Pop is eternal." },
    { id: 27, city: 'Toronto', name: 'Raptors', fullName: 'Toronto Raptors', abbr: 'TOR',
      colors: { primary: '#CE1141', secondary: '#000000' },
      snarkYes: "The only dinosaurs left are their championship hopes.",
      snarkNo: "Canada got hands and we weren't ready for it." },
    { id: 28, city: 'Utah', name: 'Jazz', fullName: 'Utah Jazz', abbr: 'UTAH',
      colors: { primary: '#002B5C', secondary: '#00471B' },
      snarkYes: "The most exciting thing in Utah is the drive to somewhere else.",
      snarkNo: "Losing to Utah is a new low, even for us." },
    { id: 29, city: 'Washington', name: 'Wizards', fullName: 'Washington Wizards', abbr: 'WSH',
      colors: { primary: '#002B5C', secondary: '#E31837' },
      snarkYes: "Congress has better teamwork than the Wizards.",
      snarkNo: "They're literally tanking and we still lost. Cool." }
];

const KNICKS = { city: 'New York', name: 'Knicks', fullName: 'New York Knicks', abbr: 'NYK' };

// YouTube API Key
const YOUTUBE_API_KEY = 'AIzaSyCJnT7A-nyah9vAWBYBMZ2ZjRETMJkFxhY';

// Tweet templates
const TWEETS_YES = [
    (team) => `Yes, the Knicks are better than your ${team}. Don't believe me? Check for yourself 👀 AreTheKnicksBetter.com`,
    (team) => `Just confirmed: Knicks > ${team}. Sorry not sorry 🤷‍♂️🧡💙 See the receipts at AreTheKnicksBetter.com`,
    (team) => `Hey ${team} fans, I've got bad news for you... 😬 AreTheKnicksBetter.com`,
    (team) => `${team}? Please. The Knicks are clear. 🏀🔥 Proof: AreTheKnicksBetter.com`,
    (team) => `Another day, another team worse than the Knicks. Sorry ${team} 💅 AreTheKnicksBetter.com`,
    (team) => `POV: You're a ${team} fan finding out the Knicks are better 📉😢 AreTheKnicksBetter.com`,
    (team) => `The ${team} catching strays today 😂 Knicks on top. AreTheKnicksBetter.com`,
    (team) => `Knicks better than the ${team}? Obviously. 🧡💙 AreTheKnicksBetter.com`
];

const TWEETS_NO = [
    (team) => `Okay ${team}, you win this round... but we're coming for you. 😤 AreTheKnicksBetter.com`,
    (team) => `The numbers say the ${team} are better than the Knicks right now. The numbers are wrong. 🙄 AreTheKnicksBetter.com`,
    (team) => `Not today, but soon. 🧡💙 #Knicks AreTheKnicksBetter.com`,
    (team) => `Fine, the ${team} got us... for now. Bookmark this for later 📌 AreTheKnicksBetter.com`,
    (team) => `The ${team} are better than the Knicks? This is temporary. 😤 AreTheKnicksBetter.com`,
    (team) => `I'm not mad, I'm just disappointed. See you in the playoffs, ${team}. AreTheKnicksBetter.com`,
    (team) => `Even when we lose we're still the most talked about team in NY 🤷‍♂️ AreTheKnicksBetter.com`,
    (team) => `The ${team} might be better right now but MSG is still the mecca. 🏟️ AreTheKnicksBetter.com`
];

// Generate random tweet
function generateTweet(teamName, knicksBetter) {
    const templates = knicksBetter ? TWEETS_YES : TWEETS_NO;
    const randomIndex = Math.floor(Math.random() * templates.length);
    return templates[randomIndex](teamName);
}

// Share to Twitter
function shareToTwitter(teamName, knicksBetter) {
    const tweet = generateTweet(teamName, knicksBetter);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;
    window.open(twitterUrl, '_blank', 'width=550,height=420');
}

// Search YouTube for game highlights
async function searchYouTubeHighlights(opponentName, gameDate) {
    try {
        // Format search query
        const dateObj = new Date(gameDate);
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                           'July', 'August', 'September', 'October', 'November', 'December'];
        const month = monthNames[dateObj.getMonth()];
        const year = dateObj.getFullYear();
        
        const searchQuery = `Knicks vs ${opponentName} highlights ${month} ${year}`;
        console.log('YouTube search query:', searchQuery);
        
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?` +
            `part=snippet&q=${encodeURIComponent(searchQuery)}&type=video&maxResults=1&key=${YOUTUBE_API_KEY}`
        );
        
        const data = await response.json();
        console.log('YouTube API response:', data);
        
        if (data.items && data.items.length > 0) {
            const video = data.items[0];
            return {
                videoId: video.id.videoId,
                title: video.snippet.title,
                thumbnail: video.snippet.thumbnails.high?.url || video.snippet.thumbnails.default?.url
            };
        }
        
        return null;
    } catch (error) {
        console.error('Error searching YouTube:', error);
        return null;
    }
}

// DOM Elements
const teamInput = document.getElementById('teamInput');
const dropdown = document.getElementById('dropdown');
const showBtn = document.getElementById('showBtn');
const resultSection = document.getElementById('resultSection');
const resultCard = document.getElementById('resultCard');
const resultAnswer = document.getElementById('resultAnswer');
const resultSnark = document.getElementById('resultSnark');
const resultDetails = document.getElementById('resultDetails');

let selectedTeam = null;
let highlightedIndex = -1;
let filteredTeams = [...NBA_TEAMS];
let lastComparison = null; // Store last comparison for sharing

// Initialize dropdown
function populateDropdown(teams) {
    dropdown.innerHTML = teams.map((team, index) => `
        <div class="dropdown-item" data-index="${index}" data-team-id="${team.id}">
            <span class="team-city">${team.city}</span>
            <span class="team-name">${team.name}</span>
        </div>
    `).join('');
}

// Filter teams based on input
function filterTeams(query) {
    const q = query.toLowerCase().trim();
    if (!q) return [...NBA_TEAMS];
    
    return NBA_TEAMS.filter(team => 
        team.name.toLowerCase().includes(q) ||
        team.city.toLowerCase().includes(q) ||
        team.fullName.toLowerCase().includes(q) ||
        team.abbr.toLowerCase().includes(q)
    );
}

// Apply opponent team colors
function applyTeamColors(team) {
    if (team?.colors) {
        document.documentElement.style.setProperty('--opponent-primary', team.colors.primary);
        document.documentElement.style.setProperty('--opponent-secondary', team.colors.secondary);
        document.body.classList.add('has-opponent');
    } else {
        document.body.classList.remove('has-opponent');
    }
}

// Reset to default Knicks colors
function resetTeamColors() {
    document.body.classList.remove('has-opponent');
}

// Adjust font size to fit content within fixed width
function adjustFontSize() {
    const value = teamInput.value;
    const len = value.length;
    
    // Scale down font size for longer team names
    if (len <= 6) {
        teamInput.style.fontSize = '1em';
    } else if (len <= 10) {
        teamInput.style.fontSize = '0.85em';
    } else if (len <= 14) {
        teamInput.style.fontSize = '0.7em';
    } else {
        teamInput.style.fontSize = '0.6em';
    }
}

// Update UI based on selection
function updateSelection(team) {
    selectedTeam = team;
    if (team) {
        teamInput.classList.add('has-value');
        showBtn.disabled = false;
    } else {
        teamInput.classList.remove('has-value');
        showBtn.disabled = true;
    }
    adjustFontSize();
}

// Show/hide dropdown
function showDropdown() {
    dropdown.classList.add('show');
}

function hideDropdown() {
    dropdown.classList.remove('show');
    highlightedIndex = -1;
    updateHighlight();
}

// Update highlighted item
function updateHighlight() {
    const items = dropdown.querySelectorAll('.dropdown-item');
    items.forEach((item, index) => {
        item.classList.toggle('highlighted', index === highlightedIndex);
    });
    
    // Scroll highlighted item into view
    if (highlightedIndex >= 0 && items[highlightedIndex]) {
        items[highlightedIndex].scrollIntoView({ block: 'nearest' });
    }
}

// Event Listeners
teamInput.addEventListener('input', (e) => {
    const query = e.target.value;
    filteredTeams = filterTeams(query);
    populateDropdown(filteredTeams);
    highlightedIndex = -1;
    
    if (filteredTeams.length > 0) {
        showDropdown();
    } else {
        hideDropdown();
    }
    
    // Check if exact match
    const exactMatch = NBA_TEAMS.find(team => 
        team.name.toLowerCase() === query.toLowerCase() ||
        team.fullName.toLowerCase() === query.toLowerCase()
    );
    
    updateSelection(exactMatch || null);
    adjustFontSize();
});

teamInput.addEventListener('focus', () => {
    if (filteredTeams.length > 0) {
        populateDropdown(filteredTeams);
        showDropdown();
    }
});

teamInput.addEventListener('keydown', (e) => {
    if (!dropdown.classList.contains('show')) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            populateDropdown(filteredTeams);
            showDropdown();
            return;
        }
    }
    
    const items = dropdown.querySelectorAll('.dropdown-item');
    
    switch (e.key) {
        case 'ArrowDown':
            e.preventDefault();
            highlightedIndex = Math.min(highlightedIndex + 1, items.length - 1);
            updateHighlight();
            break;
        case 'ArrowUp':
            e.preventDefault();
            highlightedIndex = Math.max(highlightedIndex - 1, 0);
            updateHighlight();
            break;
        case 'Enter':
            e.preventDefault();
            if (highlightedIndex >= 0 && filteredTeams[highlightedIndex]) {
                selectTeam(filteredTeams[highlightedIndex]);
            } else if (selectedTeam) {
                showBtn.click();
            }
            break;
        case 'Escape':
            hideDropdown();
            break;
    }
});

dropdown.addEventListener('click', (e) => {
    const item = e.target.closest('.dropdown-item');
    if (item) {
        const index = parseInt(item.dataset.index);
        selectTeam(filteredTeams[index]);
    }
});

function selectTeam(team) {
    teamInput.value = team.name;
    updateSelection(team);
    hideDropdown();
    adjustFontSize();
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.inline-input-wrapper')) {
        hideDropdown();
    }
});

// Show button click
showBtn.addEventListener('click', async () => {
    if (!selectedTeam) return;
    
    // Show loading state
    resultSection.classList.add('show');
    resultCard.className = 'result-card';
    resultAnswer.textContent = '';
    resultSnark.textContent = '';
    resultDetails.innerHTML = `
        <div class="loading">
            <div class="loading-spinner"></div>
            <span>Checking the stats...</span>
        </div>
    `;
    
    try {
        const comparison = await compareTeams(selectedTeam);
        displayResult(comparison);
    } catch (error) {
        console.error('Error fetching data:', error);
        resultDetails.innerHTML = `
            <p style="color: var(--no-red);">Couldn't fetch the latest data. Please try again!</p>
        `;
    }
});

// Fetch standings from ESPN API
async function fetchStandings() {
    const response = await fetch('https://site.api.espn.com/apis/v2/sports/basketball/nba/standings');
    const data = await response.json();
    
    const standings = {};
    
    // Parse standings from ESPN response
    data.children.forEach(conference => {
        conference.standings.entries.forEach(entry => {
            const team = entry.team;
            const stats = entry.stats;
            
            const wins = stats.find(s => s.name === 'wins')?.value || 0;
            const losses = stats.find(s => s.name === 'losses')?.value || 0;
            const winPct = stats.find(s => s.name === 'winPercent')?.value || 0;
            
            standings[team.abbreviation] = {
                wins: parseInt(wins),
                losses: parseInt(losses),
                winPct: parseFloat(winPct),
                name: team.displayName
            };
        });
    });
    
    return standings;
}

// Fetch recent games from ESPN API
async function fetchRecentGames() {
    // Get games from the last 30 days
    const today = new Date();
    const thirtyDaysAgo = new Date(today);
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    const formatDate = (date) => {
        return date.toISOString().split('T')[0].replace(/-/g, '');
    };
    
    const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=${formatDate(thirtyDaysAgo)}-${formatDate(today)}&limit=100`);
    const data = await response.json();
    
    return data.events || [];
}

// Find most recent matchup between Knicks and opponent
async function findRecentMatchup(opponentAbbr) {
    try {
        // Fetch Knicks schedule/results (ESPN uses 'ny' for Knicks)
        const response = await fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/ny/schedule');
        const data = await response.json();
        
        if (!data.events) return null;
        
        // Find completed games against the opponent
        const matchups = data.events.filter(event => {
            if (!event.competitions || !event.competitions[0]) return false;
            
            const competition = event.competitions[0];
            const competitors = competition.competitors;
            
            // Check if game is completed
            if (competition.status?.type?.completed !== true) return false;
            
            // Check if opponent is in this game
            return competitors.some(c => 
                c.team.abbreviation === opponentAbbr || 
                c.team.abbreviation === opponentAbbr.toUpperCase()
            );
        });
        
        if (matchups.length === 0) return null;
        
        // Get the most recent matchup (last one in filtered list)
        const recentGame = matchups[matchups.length - 1];
        const competition = recentGame.competitions[0];
        const competitors = competition.competitors;
        
        const knicksTeam = competitors.find(c => c.team.abbreviation === 'NY');
        const opponentTeam = competitors.find(c => c.team.abbreviation !== 'NY');
        
        if (!knicksTeam || !opponentTeam) return null;
        
        // Score can be an object {value, displayValue} or a string
        const getScore = (score) => {
            if (typeof score === 'object' && score !== null) {
                return parseInt(score.displayValue || score.value);
            }
            return parseInt(score);
        };
        
        const knicksScore = getScore(knicksTeam.score);
        const opponentScore = getScore(opponentTeam.score);
        const knicksWon = knicksTeam.winner === true || knicksScore > opponentScore;
        
        // Fetch top performer from box score
        const topPerformer = await fetchTopPerformer(recentGame.id);
        
        return {
            knicksWon,
            knicksScore,
            opponentScore,
            date: new Date(recentGame.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
            rawDate: recentGame.date,
            gameId: recentGame.id,
            topPerformer
        };
    } catch (error) {
        console.error('Error fetching matchup:', error);
        return null;
    }
}

// Fetch top Knicks performers and video highlights from a game
async function fetchTopPerformer(gameId) {
    try {
        const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=${gameId}`);
        const data = await response.json();
        
        const boxscore = data.boxscore;
        if (!boxscore || !boxscore.players) return null;
        
        // Find Knicks players
        const knicksTeam = boxscore.players.find(team => team.team?.abbreviation === 'NY');
        if (!knicksTeam || !knicksTeam.statistics?.[0]) return null;
        
        const stats = knicksTeam.statistics[0];
        const labels = stats.labels || [];
        const athletes = stats.athletes || [];
        
        // Find indices for stats we care about
        const ptsIdx = labels.indexOf('PTS');
        const rebIdx = labels.indexOf('REB');
        const astIdx = labels.indexOf('AST');
        const stlIdx = labels.indexOf('STL');
        const blkIdx = labels.indexOf('BLK');
        
        // Score each player and collect all
        const scoredPlayers = [];
        
        for (const athlete of athletes) {
            const playerStats = athlete.stats || [];
            if (playerStats.length === 0) continue;
            
            const pts = parseInt(playerStats[ptsIdx]) || 0;
            const reb = parseInt(playerStats[rebIdx]) || 0;
            const ast = parseInt(playerStats[astIdx]) || 0;
            const stl = parseInt(playerStats[stlIdx]) || 0;
            const blk = parseInt(playerStats[blkIdx]) || 0;
            
            // Skip players with minimal contribution
            if (pts === 0 && reb === 0 && ast === 0) continue;
            
            // Weighted score: points are king, but big assist/rebound games matter
            const score = (pts * 1.5) + (ast * 1.2) + (reb * 1.0) + (stl * 1.5) + (blk * 1.5);
            
            scoredPlayers.push({
                name: athlete.athlete?.displayName || 'Unknown',
                headshot: athlete.athlete?.headshot?.href || null,
                pts,
                reb,
                ast,
                score
            });
        }
        
        // Sort by score and get top 3
        scoredPlayers.sort((a, b) => b.score - a.score);
        const topPerformers = scoredPlayers.slice(0, 3);
        
        // We'll fetch YouTube video separately after getting game info
        let highlightVideo = null;
        
        return {
            performers: topPerformers,
            video: highlightVideo
        };
    } catch (error) {
        console.error('Error fetching top performers:', error);
        return null;
    }
}

// Compare teams
async function compareTeams(opponent) {
    const [standings, matchup] = await Promise.all([
        fetchStandings(),
        findRecentMatchup(opponent.abbr)
    ]);
    
    const knicksStanding = standings['NY'] || standings['NYK'];
    const opponentStanding = standings[opponent.abbr];
    
    if (!knicksStanding || !opponentStanding) {
        throw new Error('Could not find team standings');
    }
    
    const hasBetterRecord = knicksStanding.winPct > opponentStanding.winPct;
    const hasRecentWin = matchup?.knicksWon || false;
    
    // Knicks are better if they have better record OR a recent win
    const knicksBetter = hasBetterRecord || hasRecentWin;
    
    // Fetch YouTube highlights if we have a recent matchup
    let youtubeVideo = null;
    if (matchup?.rawDate) {
        youtubeVideo = await searchYouTubeHighlights(opponent.name, matchup.rawDate);
    }
    
    return {
        knicksBetter,
        hasBetterRecord,
        hasRecentWin,
        knicksRecord: `${knicksStanding.wins}-${knicksStanding.losses}`,
        opponentRecord: `${opponentStanding.wins}-${opponentStanding.losses}`,
        matchup,
        opponent,
        youtubeVideo
    };
}

// Display result
function displayResult(comparison) {
    const { knicksBetter, hasBetterRecord, hasRecentWin, knicksRecord, opponentRecord, matchup, opponent, youtubeVideo } = comparison;
    
    // Store for sharing
    lastComparison = comparison;
    
    // Reset carousel index
    currentPerformerIndex = 0;
    
    resultCard.classList.remove('yes', 'no');
    resultCard.classList.add(knicksBetter ? 'yes' : 'no');
    
    resultAnswer.textContent = knicksBetter ? 'YES :)' : 'NO :(';
    
    // Apply opponent team colors
    applyTeamColors(opponent);
    
    // Trigger effects
    if (knicksBetter) {
        setTimeout(() => createConfetti(), 200);
        setTimeout(() => playSound('yes'), 300);
    } else {
        setTimeout(() => playSound('no'), 300);
    }
    
    // Add snarky comment
    const snark = knicksBetter ? opponent.snarkYes : opponent.snarkNo;
    resultSnark.textContent = `"${snark}"`;
    
    let detailsHTML = `
        <p><strong>Knicks:</strong> <span class="knicks-record">${knicksRecord}</span></p>
        <p><strong>${opponent.name}:</strong> <span class="opponent-record">${opponentRecord}</span></p>
    `;
    
    if (matchup) {
        const matchupResult = matchup.knicksWon 
            ? `Knicks won ${matchup.knicksScore}-${matchup.opponentScore}` 
            : `${opponent.name} won ${matchup.opponentScore}-${matchup.knicksScore}`;
        
        // Recent matchup section (grouped with top performer)
        detailsHTML += `<div class="recent-matchup-section">`;
        detailsHTML += `<p class="recent-matchup-result"><strong>Last matchup (${matchup.date}):</strong> ${matchupResult}</p>`;
        
        // Show YouTube video highlights if available
        if (youtubeVideo?.videoId) {
            console.log('Rendering YouTube video:', youtubeVideo.videoId);
            
            detailsHTML += `
                <div class="highlights-video">
                    <div class="video-label">Game Highlights</div>
                    <div class="youtube-container">
                        <iframe 
                            src="https://www.youtube.com/embed/${youtubeVideo.videoId}" 
                            title="${youtubeVideo.title}"
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            `;
        }
        
        // Show top performer if available
        if (matchup.topPerformer?.performers && matchup.topPerformer.performers.length > 0) {
            const player = matchup.topPerformer.performers[0]; // Just the top one
            detailsHTML += `
                <div class="top-performer">
                    <div class="performer-label">Top Performer</div>
                    <div class="performer-content">
                        ${player.headshot ? `<img src="${player.headshot}" alt="${player.name}" class="performer-headshot">` : ''}
                        <div class="performer-info">
                            <div class="performer-name">${player.name}</div>
                            <div class="performer-stats">${player.pts} PTS • ${player.ast} AST • ${player.reb} REB</div>
                        </div>
                    </div>
                </div>
            `;
        }
        detailsHTML += `</div>`;
    } else {
        detailsHTML += `<p style="margin-top: 1rem; color: var(--text-secondary);">No recent matchup found this season</p>`;
    }
    
    // Add share button
    detailsHTML += `
        <div class="share-section">
            <button class="share-btn" onclick="shareToTwitter('${opponent.name}', ${knicksBetter})">
                <svg class="share-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Share on X
            </button>
        </div>
    `;
    
    resultDetails.innerHTML = detailsHTML;
}

// Carousel navigation
let currentPerformerIndex = 0;

function changePerformer(direction) {
    const slides = document.querySelectorAll('.performer-slide');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    if (slides.length === 0) return;
    
    currentPerformerIndex += direction;
    if (currentPerformerIndex >= slides.length) currentPerformerIndex = 0;
    if (currentPerformerIndex < 0) currentPerformerIndex = slides.length - 1;
    
    goToPerformer(currentPerformerIndex);
}

function goToPerformer(index) {
    const slides = document.querySelectorAll('.performer-slide');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    
    currentPerformerIndex = index;
}

// Confetti effect
function createConfetti() {
    // Remove any existing confetti container
    const existingContainer = document.querySelector('.confetti-container');
    if (existingContainer) existingContainer.remove();
    
    const container = document.createElement('div');
    container.className = 'confetti-container';
    document.body.appendChild(container);
    
    const colors = [
        '#F58426', // Knicks orange
        '#006BB6', // Knicks blue
        '#FFFFFF', // White
        '#BEC0C2', // Silver
        '#F58426', // More orange (weighted)
        '#006BB6', // More blue (weighted)
    ];
    
    const shapes = ['circle', 'square', 'strip'];
    const particleCount = 60; // Per side
    
    // Create particles from both sides
    ['left', 'right'].forEach(side => {
        for (let i = 0; i < particleCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = `confetti ${side} ${shapes[Math.floor(Math.random() * shapes.length)]}`;
            
            // Random properties
            const color = colors[Math.floor(Math.random() * colors.length)];
            const startY = Math.random() * 60 + 10; // 10-70% from top
            const x = Math.random() * 0.8 + 0.2; // Horizontal spread
            const y = Math.random() * 0.6 + 0.2; // Vertical fall
            const r = Math.random(); // Rotation amount
            const delay = Math.random() * 0.3; // Stagger
            const size = Math.random() * 8 + 6; // 6-14px
            
            confetti.style.cssText = `
                background-color: ${color};
                top: ${startY}%;
                --x: ${x};
                --y: ${y};
                --r: ${r};
                animation-delay: ${delay}s;
                width: ${size}px;
                height: ${confetti.classList.contains('strip') ? size * 2 : size}px;
            `;
            
            container.appendChild(confetti);
        }
    });
    
    // Clean up after animation
    setTimeout(() => {
        container.remove();
    }, 2500);
}

// Sound effects
const sounds = {
    yes: null,
    no: null
};

// Load sounds
function loadSounds() {
    // Crowd roar for Yes
    sounds.yes = new Audio('https://www.soundjay.com/human/sounds/applause-01.mp3');
    sounds.yes.volume = 0.5;
    
    // Sad trombone for No
    sounds.no = new Audio('https://www.myinstants.com/media/sounds/sad-trombone.mp3');
    sounds.no.volume = 0.5;
}

// Play sound
function playSound(type) {
    const soundEnabled = localStorage.getItem('soundEnabled') !== 'false';
    if (!soundEnabled) return;
    
    try {
        if (type === 'yes' && sounds.yes) {
            sounds.yes.currentTime = 0;
            sounds.yes.play().catch(() => {});
        } else if (type === 'no' && sounds.no) {
            sounds.no.currentTime = 0;
            sounds.no.play().catch(() => {});
        }
    } catch (e) {
        console.log('Sound playback failed:', e);
    }
}

// Dark/Light mode toggle
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = document.getElementById('themeIcon');
    if (icon) {
        icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Sound toggle
function initSound() {
    const soundEnabled = localStorage.getItem('soundEnabled') !== 'false';
    updateSoundIcon(soundEnabled);
}

function toggleSound() {
    const currentlyEnabled = localStorage.getItem('soundEnabled') !== 'false';
    const newState = !currentlyEnabled;
    localStorage.setItem('soundEnabled', newState);
    updateSoundIcon(newState);
}

function updateSoundIcon(enabled) {
    const icon = document.getElementById('soundIcon');
    if (icon) {
        icon.textContent = enabled ? '🔊' : '🔇';
    }
}

// Initialize
populateDropdown(NBA_TEAMS);
adjustFontSize();
loadSounds();
initTheme();
initSound();
