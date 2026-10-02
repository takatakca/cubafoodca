/**
 * TAKATAK AUTH — frontend integration boundary (visual/demo phase).
 *
 * CUBAFOOD.CA never owns identity. Production will replace `takatakAuth`
 * with an adapter that talks to TAKATAK AUTH via a secure server contract.
 * Nothing here authenticates, stores credentials, or fakes a session.
 */
export type AuthMethod = "google" | "email" | "sms" | "signup";

export type AuthState =
  | { status: "signed_out" }
  | { status: "authenticating"; method: AuthMethod }
  | { status: "authenticated"; displayName: string; permissions: string[] }
  | { status: "session_expired" }
  | { status: "not_configured"; method: AuthMethod };

export interface TakatakAuthAdapter {
  readonly configured: boolean;
  start(method: AuthMethod): Promise<AuthState>;
}

/** Demo adapter: production TAKATAK AUTH is not connected yet. */
export const takatakAuth: TakatakAuthAdapter = {
  configured: false,
  async start(method) {
    await new Promise((r) => setTimeout(r, 700));
    return { status: "not_configured", method };
  },
};
