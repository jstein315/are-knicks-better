# Changelog

All notable changes to AreTheKnicksBetter.com will be documented in this file.

---

## [1.1.2] - 2024-12-10

### Restored
- ✅ **Box score link** - Re-added "View full box score →" link to the Top Performer section

---

## [1.1.1] - 2024-12-10

### Removed
- 🗑️ **Box score link** - Removed "View full box score →" link from the Top Performer section (test change)

---

## [1.1.0] - 2024-12-10

### Added
- ☀️ **Dark/Light mode toggle** - Users can switch between dark and light themes (preference saved)
- 🔊 **Sound effects** - Crowd roar on "Yes", sad trombone on "No" (can be toggled on/off)
- 🎨 **Team colors** - Opponent's team colors now accent the result card
- ✨ **Smoother animations** - Bouncy entrance animation for the result card
- 🐦 **Share to X/Twitter** - Generate snarky tweets with random variations (8 options for Yes, 8 for No)
- 📦 **Netlify auto-deploy** - Connected to GitHub for automatic deployments

### Changed
- Result card now shows opponent's primary color on their record
- Added colored accent bar at bottom of result card using opponent's colors

---

## [1.0.0] - 2024-12-10

### Added
- 🏀 **Core comparison feature** - Compare Knicks to any of the 29 other NBA teams
- 📊 **Live standings** - Real-time records from ESPN API
- 🎯 **Smart logic** - "Yes" if Knicks have better record OR recent win against opponent
- 🏟️ **MSG background** - Madison Square Garden photo with vignette effect
- 🎬 **YouTube highlights** - Embedded game highlights from YouTube API
- ⭐ **Top Performer** - Shows the best Knicks player from the last matchup with photo and stats
- 📈 **Box score link** - Direct link to ESPN's full box score
- 🎊 **Confetti celebration** - Confetti explosion when Knicks are better
- 😏 **Snarky one-liners** - Custom roasts for each of the 29 teams (win and lose versions)
- 🔍 **Team search** - Type or select from dropdown to find any team
- 📱 **Responsive design** - Works on mobile and desktop

### Technical
- ESPN API integration for standings and schedules
- YouTube Data API v3 for highlight videos
- Pure HTML/CSS/JS (no framework)
- Hosted on Netlify

---

## Future Ideas
- [ ] Head-to-head all-time record
- [ ] Recent form (last 10 games)
- [ ] Share as image/meme
- [ ] Compare all 29 teams at once
- [ ] Playoff simulator

