import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import WorkSiteService from '../services/workSite'

const useWorkSiteStore = create(
    devtools((set, get) => ({
        workSites: [],
        isLoading: false,
        isLoggedIn: false,
        setLoading: (isLoading) => {
            set({isLoading});
         },
        setLoggedIn: (isLoggedIn) => {
            set({isLoggedIn})
        },
        fetchWorkSites: async () => {
            try {
                get().setLoading(true);
                const response = await WorkSiteService.getAll();
                set({ workSites: response })
            } finally {
                get().setLoading(false);
            }
        }
        
})));

export default useWorkSiteStore;