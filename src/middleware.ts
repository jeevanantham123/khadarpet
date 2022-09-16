import { withMiddlewareAuth } from "@supabase/auth-helpers-nextjs";

export const middleware = withMiddlewareAuth({
  redirectTo: "/Login",
});

export const config = {
  matcher: ["/middleware-protected/:path*"],
};
