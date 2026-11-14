'use client';

import { PinEntry } from '@/components/PinEntry';
import { authenticateByPin } from '@/services/playerService';

export default function Home() {
  const handleComplete = async (pin: string) => {
    console.log('Wpisano PIN:', pin);
    
    // Testowe wywołanie z serwisem gracz, jeśli już działa:
    const player = await authenticateByPin(pin);
    if (!player) {
      throw new Error('Nie znaleziono gracza o tym PIN-ie');
    }
    
    console.log('Zalogowano gracza:', player);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-white">
      <PinEntry onComplete={handleComplete} />
    </main>
  );
}