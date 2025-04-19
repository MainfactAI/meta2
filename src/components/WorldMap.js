'use client';

import { useEffect, useRef } from 'react';

export default function WorldMap() {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    // Gebruik een eenvoudige wereldkaart als achtergrond
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1200px-World_map_-_low_resolution.svg.png';
    
    img.onload = () => {
      // Teken de kaart
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
      // Statische klantdata volgens specificatie
      const clientData = {
        'Europa': {
          count: 11,
          countries: ['Nederland', 'Duitsland', 'België', 'Frankrijk', 'Verenigd Koninkrijk', 'Zweden'],
          coordinates: [
            { country: 'Nederland', x: canvas.width * 0.465, y: canvas.height * 0.32 },
            { country: 'Duitsland', x: canvas.width * 0.478, y: canvas.height * 0.33 },
            { country: 'België', x: canvas.width * 0.458, y: canvas.height * 0.33 },
            { country: 'Frankrijk', x: canvas.width * 0.455, y: canvas.height * 0.35 },
            { country: 'Verenigd Koninkrijk', x: canvas.width * 0.435, y: canvas.height * 0.31 },
            { country: 'Zweden', x: canvas.width * 0.49, y: canvas.height * 0.28 }
          ]
        },
        'Noord-Amerika': {
          count: 6,
          countries: ['Verenigde Staten', 'Canada'],
          coordinates: [
            { country: 'Verenigde Staten', x: canvas.width * 0.22, y: canvas.height * 0.38 },
            { country: 'Canada', x: canvas.width * 0.22, y: canvas.height * 0.32 }
          ]
        }
      };
      
      // Teken markers voor elke regio
      Object.entries(clientData).forEach(([region, data]) => {
        // Teken regionaam en aantal klanten
        ctx.fillStyle = '#000';
        ctx.font = '14px Arial';
        ctx.globalAlpha = 1.0;
        
        // Maak een legende rechtsboven op de kaart
        const legendX = canvas.width * 0.75;
        let legendY = canvas.height * 0.1 + (region === 'Noord-Amerika' ? 40 : 0);
        
        // Kleur bepalen op basis van regio
        let regionColor;
        switch(region) {
          case 'Europa':
            regionColor = '#1A365D'; // Primary blue
            break;
          case 'Noord-Amerika':
            regionColor = '#CC0000'; // Accent red
            break;
          default:
            regionColor = '#666666';
        }
        
        // Teken legenda kleurblokje
        ctx.fillStyle = regionColor;
        ctx.globalAlpha = 0.7;
        ctx.fillRect(legendX, legendY, 15, 15);
        
        // Teken legenda tekst
        ctx.fillStyle = '#000';
        ctx.globalAlpha = 1.0;
        ctx.fillText(`${region}: ${data.count} klanten`, legendX + 25, legendY + 12);
        
        // Teken individuele punten voor elk land in deze regio
        data.coordinates.forEach(coord => {
          // Teken cirkel
          ctx.beginPath();
          const radius = 6; // Standaardgrootte voor punten
          ctx.arc(coord.x, coord.y, radius, 0, 2 * Math.PI);
          
          ctx.fillStyle = regionColor;
          ctx.globalAlpha = 0.7;
          ctx.fill();
          
          // Cirkelrand
          ctx.lineWidth = 1.5;
          ctx.strokeStyle = 'white';
          ctx.stroke();
          
          // Tip: voeg landnamen toe bij hover, maar dat vereist event handling
        });
        
        // Teken regiomarkering (groter, voor het totaal aantal klanten)
        if (region === 'Europa') {
          const centerX = canvas.width * 0.47;
          const centerY = canvas.height * 0.325;
          
          // Teken cirkel
          ctx.beginPath();
          const radius = 16; // Grotere cirkel voor de regio
          ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
          
          ctx.fillStyle = regionColor;
          ctx.globalAlpha = 0.3;
          ctx.fill();
          
          // Cirkelrand
          ctx.lineWidth = 2;
          ctx.strokeStyle = regionColor;
          ctx.globalAlpha = 0.5;
          ctx.stroke();
          
          // Aantal tekst
          ctx.globalAlpha = 1.0;
          ctx.fillStyle = '#000';
          ctx.font = '12px Arial';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(data.count.toString(), centerX, centerY);
        }
        
        if (region === 'Noord-Amerika') {
          const centerX = canvas.width * 0.22;
          const centerY = canvas.height * 0.35;
          
          // Teken cirkel
          ctx.beginPath();
          const radius = 14; // Grotere cirkel voor de regio
          ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
          
          ctx.fillStyle = regionColor;
          ctx.globalAlpha = 0.3;
          ctx.fill();
          
          // Cirkelrand
          ctx.lineWidth = 2;
          ctx.strokeStyle = regionColor;
          ctx.globalAlpha = 0.5;
          ctx.stroke();
          
          // Aantal tekst
          ctx.globalAlpha = 1.0;
          ctx.fillStyle = '#000';
          ctx.font = '12px Arial';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(data.count.toString(), centerX, centerY);
        }
      });
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      width={1000} 
      height={500} 
      className="w-full h-auto object-contain"
    />
  );
}
