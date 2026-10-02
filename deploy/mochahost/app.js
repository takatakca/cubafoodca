// Permanent cPanel/Passenger bootstrap for CUBAFOOD.CA.
// cPanel Application Root: cubafood_node
// cPanel Startup File: app.js
// Deployments atomically switch ./current to an immutable Nitro release.
(async () => {
  try {
    await import("./current/server/index.mjs");
  } catch (error) {
    console.error("[CUBAFOOD] Failed to start current Nitro release", error);
    process.exit(1);
  }
})();
