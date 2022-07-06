/**
 * Waits for the DOM to be stable, meaning Ionic components have finished loading.
 * 
 * @param timeout How long the DOM needs to be stable for (in ms) before resolving.
 * @param retries How many mutations are allowed before quitting early, to avoid infinite loops.
 */
export async function waitForIonicReact(timeout = 750, retries = 50) {
  return new Promise((resolve, reject) => {
    let timer: NodeJS.Timeout;
    
    const observer = new MutationObserver(() => {
      if (retries <= 0) {
        stopWaiting(false, 'Max retries exceeded; DOM has been unstable for too long');
        return;
      }

      retries--;
      resetTimer();
    });

    const resetTimer = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        stopWaiting(true, 'DOM is stable');
      }, timeout);
    };

    const stopWaiting = (isStable: boolean, result: string) => {
      observer.disconnect();
      if (timer) clearTimeout(timer);

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