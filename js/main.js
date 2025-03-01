let tokenClient;
let accessToken = null;

function initApp() {
    // Load gapi.client for YouTube API
    gapi.load('client', initGapiClient);
    // Initialize GIS token client
    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CONFIG.CLIENT_ID,
        scope: CONFIG.SCOPES.join(' '),
        callback: (response) => {
            if (response.error) {
                console.error('GIS Auth Error:', response);
                showOutput('Authorization failed. Check console.');
                return;
            }
            accessToken = response.access_token;
            updateSigninStatus(true);
            initGapiClient(); // Re-initialize with token
        },
    });
}

function initGapiClient() {
    gapi.client.init({
        apiKey: CONFIG.API_KEY,
        discoveryDocs: CONFIG.DISCOVERY_DOCS,
    }).then(() => {
        if (accessToken) {
            gapi.client.setToken({ access_token: accessToken });
        }
        document.getElementById('auth-btn').onclick = handleAuthClick;
        document.getElementById('fetch-btn').onclick = fetchTranscript;
    }).catch(err => {
        console.error('Error initializing gapi client:', JSON.stringify(err, null, 2));
        showOutput('Failed to initialize API client. Check console.');
    });
}

function updateSigninStatus(isSignedIn) {
    const authBtn = document.getElementById('auth-btn');
    const fetchBtn = document.getElementById('fetch-btn');
    if (isSignedIn) {
        authBtn.innerText = 'Signed In';
        authBtn.disabled = true;
        fetchBtn.disabled = false;
    } else {
        authBtn.innerText = 'Authorize';
        authBtn.disabled = false;
        fetchBtn.disabled = true;
    }
}

function handleAuthClick() {
    tokenClient.requestAccessToken();
}

function fetchTranscript() {
    const videoId = document.getElementById('video-id').value.trim();
    if (!videoId) {
        showOutput('Please enter a valid YouTube Video ID.');
        return;
    }
    gapi.client.youtube.captions.list({
        part: 'snippet',
        videoId: videoId
    }).then(response => {
        const captions = response.result.items;
        if (!captions || captions.length === 0) {
            showOutput('No captions available for this video.');
            return;
        }
        const captionId = captions[0].id;
        gapi.client.youtube.captions.download({
            id: captionId,
            tfmt: 'srt'
        }).then(captionResponse => {
            showOutput(captionResponse.body);
        }).catch(err => {
            console.error('Error downloading captions:', err);
            showOutput('Error downloading captions: ' + err.result.error.message);
        });
    }).catch(err => {
        console.error('Error listing captions:', err);
        showOutput('Error fetching caption list: ' + err.result.error.message);
    });
}

function showOutput(text) {
    document.getElementById('transcript-output').innerText = text;
}

initApp();