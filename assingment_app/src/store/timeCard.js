import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import TimeCardService from '../services/timeCard';

const useTimeCardStore = create(
    devtools((set, get) => ({
        timeCards: [],
        timeCard: null,
        isLoading: false,
        setLoading: (isLoading) => {
            set({isLoading});
         },
        createTimeCard: async (timeCard) => {
            try {
                get().setLoading(true);
                const response = await TimeCardService.create(timeCard);
                set({ timeCard:  response });
            } finally {
                get().setLoading(false);
            }
        },
        
})));

export default useTimeCardStore;