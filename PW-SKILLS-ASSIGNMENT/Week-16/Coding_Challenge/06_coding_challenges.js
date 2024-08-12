const linkedinProfileRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]\/$/;

function isValidLinkedInProfileURL(url) {
    return linkedinProfileRegex.test(url);
}

let url1 = 'https://www.linkedin.com/in/mithun-s-83a8a3186/'

if (isValidLinkedInProfileURL(url)) {
    console.log(`"${url1}" is a valid LinkedIn profile URL.`);
} else {
    console.log(`"${url1}" is not a valid LinkedIn profile URL.`);
}

