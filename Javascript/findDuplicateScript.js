// Find perfect duplciate of script, that can be helpfull to resolve conflict and performance issue

function findDuplicateScriptTags() {
  const scriptElements = document.getElementsByTagName('script');
  const scriptContents = {};
 
  for (let i = 0; i < scriptElements.length; i++) {
    const script = scriptElements[i];
    const scriptContent = script.textContent;
 
    if (scriptContent.trim() === '') {
      continue; // Skip empty scripts
    }
 
    if (scriptContents[scriptContent]) {
      console.log('Duplicate script tag content found:');
      console.log(script);
    } else {
      scriptContents[scriptContent] = true;
    }
  }
 
  console.log('No more duplicate script tags found.');
}
 
// Call the function to check for duplicate script tags
findDuplicateScriptTags();
