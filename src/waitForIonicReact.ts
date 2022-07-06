/**
 * Waits for the DOM to be stable, meaning Ionic components have finished loading.
 * 
 * @param timeout How long the DOM needs to be stable for (in ms) before resolving.
 * @param maxWaitTime The maximum total time that can pass before rejecting.
 */
export async function waitForIonicReact(timeout = 750, maxWaitTime = 5000) {
  return new Promise((resolve, reject) => {
    let stabilityTimer: NodeJS.Timeout;
    const globalTimer = setTimeout(() => {
      stopWaiting(false,
        'Timed out waiting for DOM to be stable. Ensure your test doesn\'t make continual page updates, or try increasing maxWaitTime.'
      );
    }, maxWaitTime);

    const resetTimer = () => {
      if (stabilityTimer) clearTimeout(stabilityTimer);
      stabilityTimer = setTimeout(() => {
        stopWaiting(true, 'DOM is stable');
      }, timeout);
    };
    
    const observer = new MutationObserver(resetTimer);

    const stopWaiting = (isStable: boolean, result: string) => {
      observer.disconnect();
      if (stabilityTimer) clearTimeout(stabilityTimer);
      clearTimeout(globalTimer);

      if (isStable) {
        resolve(result);
      } else {
        reject(result);
      }
    };

    observer.observe(document.documentElement, { subtree: true, childList: true, attributes: true, characterData: true });
    resetTimer(); // initial run
  });
}