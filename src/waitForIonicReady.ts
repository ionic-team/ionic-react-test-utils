/**
 * Waits for Ionic and Stencil to be fully initialized. Use this
 * when your tests need to check the HTML as it will be rendered at
 * runtime, but you aren't able to watch for specific elements to be
 * loaded. Example: snapshot tests that should check a whole component
 * without being tightly coupled to the markup.
 */
export async function waitForIonicReady() {
  return new Promise(resolve => {
    requestAnimationFrame(() => {
      requestAnimationFrame(resolve);
    });
  });
}