/** The little of an element and a window this needs (this library runs without DOM types). */
type Measurable = {
  getBoundingClientRect(): { top: number; left: number; bottom: number; right: number; width: number; height: number };
};
type ViewportHost = { innerWidth?: number; innerHeight?: number };

/**
 * Whether any part of an element is inside the viewport right now.
 *
 * @example
 * if (isOnScreen(card)) card.classList.add("shown");
 */
export function isOnScreen(element: Measurable): boolean {
  const box = element.getBoundingClientRect();
  const { innerWidth = 0, innerHeight = 0 } = globalThis as ViewportHost;
  return (
    box.width > 0 && box.height > 0 && box.bottom > 0 && box.right > 0 && box.top < innerHeight && box.left < innerWidth
  );
}
