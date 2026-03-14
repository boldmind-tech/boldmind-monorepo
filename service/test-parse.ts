import fs from 'fs';
try {
    const content = fs.readFileSync('raw-ai-response.txt', 'utf8');
    const pos = 1522;
    console.log("Snippet around 1522:", JSON.stringify(content.substring(pos - 50, pos + 50)));
} catch (err) {
    console.error(err);
}
