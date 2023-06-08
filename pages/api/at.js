import {getAccessToken} from "@auth0/nextjs-auth0";

export default async function getAt(req, res) {
    const at = await getAccessToken(req, res);
    res.json({ hasAccessToken: !!at })
}