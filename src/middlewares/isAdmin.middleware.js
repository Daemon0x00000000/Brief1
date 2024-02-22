import crypto from "node:crypto";


const realm = "localhost";
const qop = "auth";
const algorithm = "SHA-256";



const unauthorized = (res) => {
    const nonce = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const opaque = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const authenticateHeader = `Digest realm="${realm}", nonce="${nonce}", opaque="${opaque}", qop="${qop}", algorithm="${algorithm}"`;
    res.setHeader("WWW-Authenticate", authenticateHeader);
    res.status(401).send('Unauthorized');
}

const isAdmin = (req,res, next) => {
    try {
        const basicAuth = req.headers.authorization;
        if (!basicAuth) return unauthorized(res);
        const splitAuth = basicAuth.split(' ').map((item) => item.replace(',', ''));

        if (splitAuth[0] !== 'Digest') return unauthorized(res);
        const username = splitAuth[1].split('=')[1].replace(/"/g, '');
        if (username !== 'admin') return unauthorized(res);
        const response = splitAuth.find((item) => item.includes('response=')).split('=')[1].replace(/"/g, '');
        const uri = splitAuth.find((item) => item.includes('uri=')).split('=')[1].replace(/"/g, '');
        const nc = splitAuth.find((item) => item.includes('nc=')).split('=')[1].replace(/"/g, '');
        const cnonce = splitAuth.find((item) => item.includes('cnonce=')).split('=')[1].replace(/"/g, '');
        const nonce = splitAuth.find((item) => item.includes('nonce=')).split('=')[1].replace(/"/g, '');



        const pass = 'admin'

        const ha1 = crypto.createHash(algorithm).update(`${username}:${realm}:${pass}`).digest('hex');
        const ha2 = crypto.createHash(algorithm).update(`${req.method}:${uri}`).digest('hex');
        const responseCheck = crypto.createHash(algorithm).update(`${ha1}:${nonce}:${nc}:${cnonce}:${qop}:${ha2}`).digest('hex');


        if (responseCheck === response) {
            return next();
        }
        return unauthorized(res)
    } catch {
        return unauthorized(res);
    }
}

export default isAdmin;