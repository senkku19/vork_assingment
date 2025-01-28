import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import TimeCardService from '../services/timeCard';
import RunningTimeCardService from '../services/runningTimeCard';

const useTimeCardStore = create(
    devtools((set, get) => ({
        timeCards: [],
        timeCard: null,
        isLoading: false,
        setLoading: (isLoading) => {
            set({isLoading});
        },
        emptyTimeCard: () => {
            set({ timeCard: null });
        },
        createTimeCard: async (timeCard) => {
            try {
                get().setLoading(true);
                const response = await RunningTimeCardService.create(timeCard);
                set({ timeCard:  response });
            } finally {
                get().setLoading(false);
            }
        },
        updateTimeCard: async (id, updatedFields) => {
            try {
                get().setLoading(true);
                const response = await RunningTimeCardService.update(id, updatedFields);
                set({ timeCard: response })
            } finally {
                get().setLoading(false);
            }
        },
        acceptTimeCard: async (id, updatedFields) => {
            try {
                get().setLoading(true);
                await TimeCardService.create(updatedFields);
                await RunningTimeCardService.deleteTimeCard(id);
            } finally {
                get().setLoading(false);
            }
        },
        fetchTimeCards: async () => {
            try {
                get().setLoading(true);
                const response = await TimeCardService.getAll();
                set({ timeCards: response })
            } finally {
                get().setLoading(false);
            }
        }
        
})));

export default useTimeCardStore;