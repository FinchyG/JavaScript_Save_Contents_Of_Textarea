// code to action save on clicking save button
document.getElementById("save_button").addEventListener("click", saveFile);

async function saveFile() {

    // get characters typed into textarea into a variable
    var the_text = document.getElementById("text_area").value.trim();
    
    // create a blob object
    var new_blob = new Blob([the_text], { type: "text/plain" });

    // code for the fileHandler
    const fileHandle = await window.showSaveFilePicker({
        types: [{
            description: "Text file",
            accept: { "text/plain": [".txt"] }
        }]
    });

    // code for the fileStream
    const fileStream = await fileHandle.createWritable();

    // write textarea content to the file
    await fileStream.write(new_blob);
    await fileStream.close();
}