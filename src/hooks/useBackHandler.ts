import { useEffect } from 'react';

interface UseBackHandlerProps {
  isModalOpen: boolean;
  onBackAction: () => void;
}

export const useBackHandler = ({ isModalOpen, onBackAction }: UseBackHandlerProps) => {
  useEffect(() => {
    // Function to handle browser back button
    const handlePopState = () => {
      if (isModalOpen) {
        onBackAction();
      }
    };

    // Add history state when modal opens
    if (isModalOpen) {
      // Push a new state to history so we can intercept back button
      window.history.pushState({ modalOpen: true }, '');
      
      // Listen for back button press
      window.addEventListener('popstate', handlePopState);
    }

    // Cleanup function
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isModalOpen, onBackAction]);

  // Function to handle programmatic back (for close button)
  const handleClose = () => {
    if (isModalOpen) {
      // Go back in history to remove the modal state
      window.history.back();
    }
    onBackAction();
  };

  return { handleClose };
};