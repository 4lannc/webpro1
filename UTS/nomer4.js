<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple SPA</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        body {
            font-family: 'Arial', sans-serif;
        }
    </style>
</head>
<body class="bg-gray-100">

    <div id="app"></div>

    <script>
        const appElement = document.getElementById('app');

        const renderHome = () => {
            appElement.innerHTML = `
                <div class="min-h-screen flex flex-col items-center justify-center">
                    <h1 class="text-4xl font-bold text-blue-600">Welcome to the Home Page</h1>
                    <button onclick="renderAbout()" class="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
                        Go to About Page
                    </button>
                </div>
            `;
        };

        const renderAbout = () => {
            appElement.innerHTML = `
                <div class="min-h-screen flex flex-col items-center justify-center bg-gray-200">
                    <h1 class="text-4xl font-bold text-purple-600">This is the About Page</h1>
                    <button onclick="renderHome()" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                        Back to Home
                    </button>
                </div>
            `;
        };

        // Start with the home page
        renderHome();
    </script>
</body>
</html>