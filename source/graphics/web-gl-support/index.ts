/** The little of a browser this needs (this library runs without DOM types). */
type CanvasHost = {
  document?: { createElement(name: "canvas"): { getContext(kind: "webgl2" | "webgl"): unknown } };
};

/**
 * Whether this browser can create a WebGL context (2 or 1). False when it can't or refuses (old devices, WebGL turned
 * off or blocked) and outside a browser: show a still fallback instead of a WebGL scene, which would otherwise fail
 * to start.
 *
 * @example
 * const [webGl] = useState(supportsWebGl); // in a client component
 * return webGl ? <Scene /> : <Fallback />;
 */
export function supportsWebGl(): boolean {
  try {
    const canvas = (globalThis as CanvasHost).document!.createElement("canvas");
    return !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}
