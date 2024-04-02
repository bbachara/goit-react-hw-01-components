import React from 'react';
import './Statistics.css';

function getRandomHue() {
  return Math.floor(Math.random() * 360); // Losowa wartość odcienia z zakresu od 0 do 359
}

function Statistics({ title, stats }) {
  return (
    <div className="stats-card">
      <div className="stats-card-title">
        <h2 className="stats-title">{title}</h2>
      </div>
      <ul className="stats-ul">
        {stats.map(stat => {
          let saturation = 100; // Nasycenie koloru
          let lightness = 50; // Jasność koloru

          if (stat.percentage > 5) saturation = 80;
          if (stat.percentage > 20) saturation = 70;
          if (stat.percentage > 50) saturation = 60;

          let hue = getRandomHue(); // Losowa wartość odcienia

          let style = {
            backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
          };

          return (
            <li key={stat.id} className="item" style={style}>
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Statistics;
