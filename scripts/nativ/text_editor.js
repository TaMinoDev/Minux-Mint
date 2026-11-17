const textEditorStyleId = 'text-editor-styles';
if (!document.getElementById(textEditorStyleId)) {
    const textEditorStyle = document.createElement('style');
    textEditorStyle.id = textEditorStyleId;
    textEditorStyle.textContent = `
        .text-editor {
            background-color: lightgray;
            height: 100%;
            width: 100%;
        }

        .text-editor-content {
            width: 100%;
            resize: none;
            height: 100%;
        }
    `;
    document.head.appendChild(textEditorStyle);
}

programs["Milli"].content = `
    <section class="text-editor">
        <div class="text-editor-toolbar">
            <label for="text-editor-filename">Dateiname</label>
            <input id="text-editor-filename" type="text" value="dokument.txt" autocomplete="off">
            <br>
            <label for="text-editor-filepath">Speicherort</label>
            <input id="text-editor-filepath" type="text" value="*/home/minux/desktop" autocomplete="off">
            <br>
            <button class="text-editor-download" type="button">Download</button>
            <button class="text-editor-save" type="button">Speichern</button>
        </div>
        <hr>
        <textarea class="text-editor-content" aria-label="Edit text" spellcheck="false"
            placeholder="Write your Text here"></textarea>
        <p class="text-editor-status" aria-live="polite">Ready</p>
    </section>
`;

programs["Milli"].onOpen = (windowElement) => {
    windowElement.style.left = '5vw';
    windowElement.style.top = '5vh';

    const filenameInput = windowElement.querySelector('#text-editor-filename');
    const textInput = windowElement.querySelector('.text-editor-content');
    const downloadButton = windowElement.querySelector('.text-editor-download');
    const saveButton = windowElement.querySelector('.text-editor-save');
    const status = windowElement.querySelector('.text-editor-status');
    const pathInput = windowElement.querySelector('#text-editor-filepath');

    downloadButton.addEventListener('click', () => {
        const filename = filenameInput.value.trim();
        if (!filename) {
            status.textContent = 'Please enter an File name';
            filenameInput.focus();
            return;
        }

        const blob = new Blob([textInput.value], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.click();
        window.setTimeout(() => URL.revokeObjectURL(url), 1000);
        status.textContent = `"${filename}" downloaded.`;
    });
    saveButton.addEventListener('click', () => {
        const filename = filenameInput.value.trim();
        if (!filename) {
            status.textContent = 'Please enter an File name';
            filenameInput.focus();
            return;
        }
        let path = pathInput.value.split('/');
        let url = [];
        path.forEach(folder => {
            url.push(`['${folder}']`);
        });
        url = url.join('');
        url = getValueByPath(directory,url);
        url[filename] = textInput.value;
    });
};