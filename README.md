# Weather Now - React + TypeScript

🌤️ A modern, real-time weather application built with React and TypeScript that provides current weather information for cities worldwide.

## Features

- **Real-time Weather Data**: Fetches current weather information from OpenWeatherMap API
- **City Search**: Search for any city in the world with debounced input for better performance
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **TypeScript**: Fully typed for better code quality and developer experience
- **Custom Hooks**: Includes a custom `useDebounce` hook for optimized API calls

## Weather Information Displayed

- City name
- Current temperature (°C)
- Weather description (e.g., clear sky, cloudy)
- Weather icon
- Humidity percentage
- Wind speed (m/s)

## Project Structure

```
weather-now-react-ts/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/
│   │   ├── SearchBar.tsx   # Search input component
│   │   └── WeatherCard.tsx # Weather display component
│   ├── hooks/
│   │   └── useDebounce.ts  # Custom debounce hook
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Application entry point
│   └── types.d.ts          # TypeScript type definitions
├── package.json            # Project dependencies
└── README.md               # Project documentation
```

## Setup and Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenWeatherMap API key (free tier available)

### Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/sahasra-pixel-eng/weather-now-react-ts.git
cd weather-now-react-ts
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Get your API key:
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate an API key

4. Configure the API key:
   - Open `src/App.tsx`
   - Replace `'your_api_key_here'` with your actual API key:
   ```typescript
   const API_KEY = 'your_actual_api_key';
   ```

5. Start the development server:
```bash
npm start
# or
yarn start
```

6. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Enter a city name in the search bar
2. The app will automatically fetch weather data after a brief delay (debounced)
3. View the current weather information displayed on the weather card

## Technologies Used

- **React** - UI library for building user interfaces
- **TypeScript** - Typed superset of JavaScript
- **OpenWeatherMap API** - Weather data provider
- **React Hooks** - useState, useEffect for state management

## Custom Hooks

### useDebounce

A custom hook that delays updating a value until after a specified delay period. This is used to prevent excessive API calls while the user is typing in the search bar.

```typescript
const debouncedValue = useDebounce(value, 500);
```

## Components

### SearchBar
Handles user input for city search with a clean, responsive interface.

### WeatherCard
Displays weather information including temperature, description, humidity, and wind speed with appropriate styling and weather icons.

## Future Enhancements

- 5-day weather forecast
- Temperature unit toggle (Celsius/Fahrenheit)
- Geolocation support for automatic city detection
- Weather history and favorites
- Dark mode support
- More detailed weather metrics (UV index, pressure, visibility)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Built with React and TypeScript

## Contact

For questions or feedback, please open an issue on GitHub.
