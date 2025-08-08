# 🎮 Tic-Tac-Toe Game

A simple, responsive, and interactive **Tic-Tac-Toe** game built with **HTML**, **CSS**, and **JavaScript**.  
Play with a friend and see who claims the **Winner Winner Chicken Dinner**! 🏆

---

## 📌 Features
- **Two-player mode** (O and X take turns)
- **Winner detection** based on classic Tic-Tac-Toe rules
- **Responsive design** that adapts to screen size
- **Animated winner message** with sound effect (`win.wav`)
- **Reset Game** button to start fresh
- **New Game** option after a win
- **Disable clicked boxes** to prevent overwriting moves

---

## 📂 Project Structure
├── index.html # Game layout and structure
├── style.css # Styling for game board and elements
├── script.js # Game logic and interactivity
├── win.wav # Winning sound effect



## 🚀 How to Run
1. **Clone the repository** or download the files:
   ```bash
   [git clone <your-repo-link>](https://github.com/Adityasengar18888/Tic-Tac-Toe)
Place all files in the same folder (HTML, CSS, JS, win.wav).

Open index.html in your web browser.

Start playing with a friend! 🎯

🛠 How It Works
Game Board → 3×3 grid of clickable buttons (.box).

Turns → Player O starts first, then alternates with Player X.

Winning Patterns → Predefined set of 8 possible winning combinations:


Horizontal: [0,1,2], [3,4,5], [6,7,8]
Vertical:   [0,3,6], [1,4,7], [2,5,8]
Diagonal:   [0,4,8], [2,4,6]
Winner Detection → Checks after every move.

Game End → Disables board, displays winner message, plays sound.

🎨 Styling Highlights
Circular cells with border-radius: 50%

Glow effect using box-shadow

Dark-themed background with contrasting player colors

Responsive units (vmin) for scaling on all devices

🏗 Future Improvements
Add AI opponent (single-player mode)

Add draw detection

Add scoreboard for multiple rounds

Mobile-friendly touch controls
