import { useState, useEffect } from 'react';

const FlowerPetal = () => {
    const [style, setStyle] = useState<React.CSSProperties>({});
    const [color, setColor] = useState<string>('');
  
    useEffect(() => {
      setStyle({
        left: `${Math.random() * 100}vw`,
        animationDuration: `${Math.random() * 5 + 8}s`,
        animationDelay: `${Math.random() * 7}s`,
        transform: `scale(${Math.random() * 0.5 + 0.5})`,
      });
  
      const colors = ['#FFB6C1', '#E6E6FA', '#FFF0F5'];
      setColor(colors[Math.floor(Math.random() * colors.length)]);
    }, []);
  
    if (!color) {
      return null;
    }
  
    return (
      <div
        className="absolute top-0 animate-petal-fall"
        style={style}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={color}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" opacity="0.1"/>
          <path d="M12 5C8.13 5 5 8.13 5 12C5 15.87 8.13 19 12 19C15.87 19 19 15.87 19 12C19 8.13 15.87 5 12 5Z"/>
        </svg>
      </div>
    );
  };
  
  export default FlowerPetal;