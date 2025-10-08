import { useEffect } from 'react';
import useSound from 'use-sound';
import clickSound from '/assets/Click.wav'; // adjust path if needed

const GlobalClickSound = () => {
  const [play] = useSound(clickSound, { volume: 0.3 });

  useEffect(() => {
    const handleClick = () => {
      play();
    };

    document.addEventListener('click', handleClick);

    // Cleanup on unmount
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [play]);

  return null; // This component doesn't render anything
};

export default GlobalClickSound;
