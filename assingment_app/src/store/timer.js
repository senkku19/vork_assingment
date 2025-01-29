import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useTimerStore = create(
    devtools((set, get) => ({
        isRunning: false,
        isBreakRunning: false,
        timer: 0,
        hours: 0,
        minutes: 0,
        startTimer: () => {
            set({ isRunning: true });
        },
        pauseTimer: () => {
            set({ isRunning: false });
        },
        setTimer: () => {
            set({ 
                timer: get().timer + 1,
                hours: Math.floor(get().timer/3600),
                minutes: Math.floor( (get().timer % 3600) / 60)
            })
        },
        setIsBreakRunning: (isBreakRunning) => {
            set({ isBreakRunning: isBreakRunning })
        },
        stopTimer: () => {
            set({ 
                isRunning: false,
                timer: 0,
                hours: 0,
                minutes: 0 
            })
        }
   
    
    })));

export default useTimerStore;