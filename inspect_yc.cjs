const fs = require('fs');
const html = fs.readFileSync('scratch_yc.html', 'utf8');
const dataPageIdx = html.indexOf('data-page="');
const dataPageEnd = html.indexOf('"', dataPageIdx + 11);
// Find matching quote
const jsonStart = dataPageIdx + 11;
let jsonEnd = jsonStart;
while (jsonEnd < html.length) {
  if (html[jsonEnd] === '"' && html.substring(jsonEnd, jsonEnd + 6) !== '&quot;') {
    break;
  }
  jsonEnd++;
}
const jsonStr = html.substring(jsonStart, jsonEnd).replace(/&quot;/g, '"');
try {
  const data = JSON.parse(jsonStr);
  console.log('Props keys:', Object.keys(data.props));
  if (data.props.sections) console.log('sections:', data.props.sections);
} catch (e) {
  console.log('Error parsing:', e.message);
  console.log(jsonStr.substring(0, 300));
}
