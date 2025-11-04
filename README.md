<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Froggies Proxy</title>
    <link rel="stylesheet" href="style.css">
    <style>
        /* Basic styling */
        body {
            margin: 0;
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #00c6ff, #0072ff);
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            text-align: center;
        }

        h1 {
            font-size: 3em;
            margin-bottom: 0.2em;
        }

        #loading {
            margin: 20px;
            font-size: 1.5em;
            animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
            0% { opacity: 0.3; }
            50% { opacity: 1; }
            100% { opacity: 0.3; }
        }

        input[type="text"] {
            padding: 10px;
            font-size: 1em;
            width: 300px;
            border-radius: 5px;
            border: none;
            outline: none;
        }

        button {
            padding: 10px 15px;
            font-size: 1em;
            border: none;
            border-radius: 5px;
            background-color: #ff7f50;
            color: white;
            cursor: pointer;
            margin-left: 10px;
        }

        button:hover {
            background-color: #ff6347;
        }
    </style>
</head>
<body>
    <h1>Froggies Proxy</h1>
    <div id="loading">Proxy Loading... 🐸</div>

    <div>
        <input type="text" id="searchBox" placeholder="Search with DuckDuckGo">
        <button onclick="search()">Go</button>
    </div>

    <script>
        const loadingDiv = document.getElementById('loading');

        // Display silly loading messages
        const messages = [
            "Hopping through the internet...",
            "Ribbit! Almost there...",
            "Catching flies and loading pages...",
            "Froggies love fast proxies!",
            "Wearing tiny sunglasses while surfing..."
        ];

        let index = 0;
        setInterval(() => {
            loadingDiv.textContent = messages[index];
            index = (index + 1) % messages.length;
        }, 2000);

        // DuckDuckGo search
        function search() {
            const query = document.getElementById('searchBox').value;
            if(query.trim() !== '') {
                window.open(`https://duckduckgo.com/?q=${encodeURIComponent(query)}`, '_blank');
            }
        }
    </script>
</body>
</html>
