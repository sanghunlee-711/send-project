// utils/isMobile.ts
export const isMobile = (userAgent: string): boolean => {
  return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop|Mobile|Tablet/i.test(
    userAgent
  );
};
