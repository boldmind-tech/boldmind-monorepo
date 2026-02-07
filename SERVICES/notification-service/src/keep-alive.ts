
export function startKeepAlive(port: number | string, path: string = '/health/ping') {
    const appUrl = process.env.RENDER_EXTERNAL_URL ||
        process.env.APP_URL ||
        `http://localhost:${port}`;
    const targetUrl = `${appUrl}${path}`;

    console.log(`[KeepAlive] Initialized for ${targetUrl}`);

    setInterval(async () => {
        try {
            const res = await fetch(targetUrl);
            if (res.ok) {
                console.log(`[KeepAlive] Ping success: ${res.status} at ${new Date().toISOString()}`);
            } else {
                console.warn(`[KeepAlive] Ping failed: ${res.status} ${res.statusText}`);
            }
        } catch (error: any) {
            console.warn(`[KeepAlive] Ping failed: ${error.message}`);
        }
    }, 14 * 60 * 1000);
}
