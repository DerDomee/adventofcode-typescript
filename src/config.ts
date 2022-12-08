import dotenv from 'dotenv';
dotenv.config();

export default {
	loginCookie: process.env.LOGIN_COOKIE ?? 'no-login-cookie'
}