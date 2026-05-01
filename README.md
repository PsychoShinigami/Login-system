Motive:
  The motive was to understand or learn about backend for login and register system.
  
What I learnt:

  1. Data Persistence (The Vault)
    Concept: Moving from localStorage (temporary/client-side) to Server-Side storage using JSON serialization.
    Execution: Implementing json.load() to retrieve the user list and json.dump() with indent=4 to write back a clean, human-readable database.
    Why it matters: This ensures that when a user registers, their "Soul" is written to the hard drive permanently.

  2. API Architecture & Routing
    Concept: Creating dedicated endpoints for specific actions.
    Execution: Defining @app.route('/register', methods=['POST']) and @app.route('/login', methods=['POST']) to handle incoming data packages.
    Why it matters: It separates the logic of "saving a new user" from "verifying an existing one," making the system modular and scalable.
    
  3. The Handshake (Fetch & CORS)
    Concept: Securely communicating between a frontend on one port (5500) and a backend on another (5000).
    Execution: Using the JavaScript fetch API with JSON.stringify to pack data, and implementing flask-cors on the server to bypass browser security restrictions.
    Why it matters: This is the "nervous system" of the app; without this handshake, the frontend and backend remain isolated.
  
  4. Algorithmic Verification
    Concept: Efficiently searching through a database.
    Execution: Using an Early Return pattern within a for loop to check credentials. If a match is found, the function exits immediately; otherwise, it falls through to a default error response.
    Why it matters: This prevents the "First-User-Only" bug and ensures the server only grants access if the "Death Key" (password) matches perfectly.
    
Features:
  -Persistent Vault: Uses Python-based JSON serialization to store user data permanently on the server's disk.
  -Dual-Route Handshake: Includes dedicated API endpoints for both /register and /login.
  -Cross-Origin Ready: Equipped with flask-cors to bridge the gap between frontend ports and backend servers.
  -Logic Gates: Advanced JavaScript validation for "Death Keys" (passwords), including length checks and matching verification.
  
Tech stack:
  -Frontend: JavaScript (ES6+) => Data gathering & fetch API courier.
  -Backend: Flask (Python) => Request processing & Logic engine.
  -Database: info.json => Persistent storage vault.
  -Security: Flask-CORS => Cross-origin resource sharing gatekeeper.
