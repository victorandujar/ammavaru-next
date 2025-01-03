import { RefObject } from "react";

const useAnimations = () => {
  const screenObserverVertical = (
    setIsVisible: (value: boolean) => void,
    sectionRef: RefObject<HTMLElement | null>,
  ) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef?.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  };

  const screenObserverHorizontal = (
    setCurrentCard: (value: number) => void,
    cardRefs: RefObject<(HTMLLIElement | null)[]>,
    containerRef: RefObject<HTMLUListElement | null>,
  ) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const visibleCardIndex = cardRefs?.current.indexOf(
              entry.target as HTMLLIElement,
            );
            setCurrentCard(visibleCardIndex);
          }
        });
      },
      {
        root: containerRef?.current,
        threshold: 0.5,
      },
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  };

  const showAnimateItems = (
    isVisible: boolean,
    setAnimateItems: (value: boolean) => void,
  ) => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        setAnimateItems(true);
      }, 200);
      return () => clearTimeout(timeout);
    } else {
      setAnimateItems(false);
    }
  };

  return { screenObserverVertical, screenObserverHorizontal, showAnimateItems };
};

export default useAnimations;
