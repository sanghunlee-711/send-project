import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isMobile } from '../utils/isMobile';

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const mobile = isMobile(userAgent);

  const response = NextResponse.next();
  response.cookies.set('isMobile', mobile ? 'true' : 'false');

  return response;
}

export const config = {
  matcher: '/',
};
