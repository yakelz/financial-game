import { create } from 'zustand';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';

// const jsonStorage = createJSONStorage(() => localStorage);

const useViewStore = create(
	devtools((set, get) => ({
		view: 'office',
		setView: (view) => set({ view }),
		officeSubView: 'front',

		setOfficeSubView: (subView) => set({ officeSubView: subView }),
		computerSubView: 'home',

		setComputerSubView: (subView) => set({ computerSubView: subView }),
		browserSubView: 'search',
		setBrowserSubView: (subView) => set({ browserSubView: subView }),

		phoneSubView: 'home',
		setPhoneSubView: (subView) => set({ phoneSubView: subView }),
		isPhoneOpen: false,
		setPhoneOpen: (state) => set({ isPhoneOpen: state }),

		pulseRef: null,
		setPulseRef: (ref) => set({ pulseRef: ref }),
	}))
);

export default useViewStore;
