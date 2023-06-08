import { randomBytes } from 'crypto';
import {handleAuth, handleCallback} from "@auth0/nextjs-auth0";

export default handleAuth({
    callback: handleCallback({
        afterCallback(req, res, session) {
            session.big_claim = randomBytes(2000).toString('base64');
            return session;
        }
    })
});
