import { create } from "zustand";

export interface ViewerPhoto {
  // Member id: lets the thumbnail hide itself while its photo is open.
  id: string;
  src: string;
  placeholderSrc: string;
  // Tiny version of the photo: gives the aspect ratio up front (width / height).
  aspect: number;
  alt: string;
  // Clicked thumbnail. Its rect is re-read on close, so the photo shrinks back
  // to the right spot even if the sidebar moved meanwhile.
  originEl: HTMLElement;
}

interface PhotoViewerState {
  photo: ViewerPhoto | null;
  open: (photo: ViewerPhoto) => void;
  close: () => void;
}

export const usePhotoViewerStore = create<PhotoViewerState>((set) => ({
  photo: null,
  open: (photo) => set({ photo }),
  close: () => set({ photo: null }),
}));
