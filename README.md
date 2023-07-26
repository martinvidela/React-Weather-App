# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Llamar a la API para obtener los datos del clima y almacenarlos en el estado
    // Puedes utilizar el servicio y la librería de tu elección para realizar la solicitud
    // Ejemplo utilizando fetch:
    fetch('https://api.openweathermap.org/data/2.5/weather?q=nombreCiudad&appid=API_KEY')
      .then((response) => response.json())
      .then((data) => setWeatherData(data));
  }, []);

  const getBackgroundStyle = () => {
    // Aquí define tus estilos de fondo basados en las condiciones climáticas
    // Por ejemplo:
    if (weatherData) {
      const weatherCondition = weatherData.weather[0].main;
      if (weatherCondition === 'Clear') {
        return { backgroundImage: 'url(sunny-background.jpg)' };
      } else if (weatherCondition === 'Rain') {
        return { backgroundImage: 'url(rainy-background.jpg)' };
      } else if (weatherCondition === 'Snow') {
        return { backgroundImage: 'url(snowy-background.jpg)' };
      }
    }
    // Si no se han recibido datos o no coincide con ninguna condición, se usa un fondo predeterminado
    return { backgroundColor: '#f0f0f0' };
  };

  return (
    <div className="app" style={getBackgroundStyle()}>
      {/* Contenido de tu aplicación */}
    </div>
  );
};

export default App;
