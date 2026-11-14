/**
 * Focuses an input and, once an on-screen keyboard has opened, scrolls its
 * enclosing `[data-question-card]` (or the input itself) to the top of the
 * visible area. Without this the keyboard covers the prompt above the input.
 */
export const focusAboveKeyboard = (inputId: string) => {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.focus({ preventScroll: true });

  const card = input.closest<HTMLElement>("[data-question-card]") ?? input;
  const vv = window.visualViewport;
  let revealed = false;

  const reveal = () => {
    if (revealed) return;
    // The keyboard shrinks the visual viewport; on a desktop nothing moves.
    if (vv && vv.height >= window.innerHeight * 0.75) return;
    revealed = true;
    vv?.removeEventListener("resize", reveal);
    card.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  vv?.addEventListener("resize", reveal);
  // Fallback for browsers that do not report the keyboard via visualViewport.
  window.setTimeout(() => {
    vv?.removeEventListener("resize", reveal);
    if (!vv) {
      revealed = true;
      card.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, 1000);
};
