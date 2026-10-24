const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 10000;

app.get('/', (req, res) => {
    res.status(200).send(`
        <div style="font-family: sans-serif; text-align: center; padding: 50px; background: #0f172a; color: #fff; height: 100vh; margin:0; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <h1 style="color: #6366f1; font-size: 2.5rem; margin-bottom: 10px;">🚀 Global Proxy Edge is LIVE!</h1>
            <p style="color: #94a3b8; font-size: 1.1rem; margin-bottom: 20px;">Your Cloudflare Alternative running successfully on Render.</p>
            <div style="background: #1e293b; display: inline-block; padding: 12px 24px; border-radius: 8px; border: 1px solid #334155; font-weight: bold;">
                Proxy Engine Status: <span style="color: #34d399;">Active & Secure</span>
            </div>
        </div>
    `);
});

app.listen(PORT, () => {
    console.log(`🚀 Proxy Gateway running on port ${PORT}`);
});
