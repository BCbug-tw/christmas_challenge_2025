
import https from 'https';

const pinUrls = [
    'https://pin.it/kMoCNZPIN',
    'https://pin.it/49rtarTx8',
    'https://pin.it/2PaYComRW',
    'https://pin.it/7xkYMpA65',
    'https://pin.it/4fdnaNZEZ',
    'https://pin.it/4ne5ahCry',
    'https://pin.it/6WPpTSaem',
    'https://pin.it/6034HkvAp',
    'https://pin.it/19uIBi9U7',
    'https://pin.it/7Fa4DcSrT',
    'https://pin.it/zDhYJAC9R',
    'https://pin.it/RsrzZ5uvq',
    'https://pin.it/4hCJ2MoP0',
    'https://pin.it/16bh29ZHZ',
    'https://pin.it/5QIfaAjNo',
    'https://pin.it/yHQ9ldJ9R',
    'https://pin.it/4wBAtukSS',
    'https://pin.it/2vRi22pxM',
    'https://pin.it/5TZidB2CM'
];

// Helper to follow redirects and get final URL
const resolveUrl = (url) => {
    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        };
        https.get(url, options, (res) => {
            // Handle redirects
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                resolveUrl(res.headers.location).then(resolve).catch(reject);
            } else {
                resolve({ url: url, res: res });
            }
        }).on('error', reject);
    });
};

// Helper to fetch content and basic meta scrape
const fetchImage = async (url) => {
    try {
        const { url: finalUrl } = await resolveUrl(url);

        return new Promise((resolve) => {
            const options = {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
                }
            };
            https.get(finalUrl, options, (res) => {
                let data = '';
                res.on('data', chunk => data += chunk);
                res.on('end', () => {
                    // Look for og:image
                    // Pinterest often puts it in <meta property="og:image" ... > or <meta name="og:image" ... >
                    const match = data.match(/<meta\s+(?:property|name)="og:image"\s+(?:name="og:image"\s+)?content="([^"]+)"/i);

                    if (match && match[1]) {
                        resolve(match[1]);
                    } else {
                        // Fallback: look for generic image that looks like a pin
                        const pinMatch = data.match(/"(https:\/\/i\.pinimg\.com\/originals\/[^"]+)"/);
                        if (pinMatch && pinMatch[1]) {
                            resolve(pinMatch[1]);
                        } else {
                            resolve(null);
                        }
                    }
                });
            }).on('error', () => resolve(null));
        });
    } catch (e) {
        return null;
    }
};

async function processAll() {
    const images = [];
    console.log('Processing URLs...');

    // Use a set to avoid duplicates from the input list itself if any
    const uniqueUrls = [...new Set(pinUrls)];

    for (const url of uniqueUrls) {
        const img = await fetchImage(url);
        if (img) {
            console.log(`Found: ${img}`);
            images.push(img);
        } else {
            console.log(`Failed: ${url}`);
        }
        // Polite delay
        await new Promise(r => setTimeout(r, 500));
    }

    console.log('\n--- RESULT ARRAY ---');
    console.log(JSON.stringify(images, null, 2));
}

processAll();
