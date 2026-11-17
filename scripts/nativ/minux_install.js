programs["Software Manager"].content = '<h1 style="text-align: center;">Software Manager</h1><hr><button onclick="programs[\'Software Manager\'].install(\'kernel\')">Install Minux Mint</button>';
programs["Software Manager"].install = (item) => {
    if(item === 'kernel') {
        const content = "<!DOCTYPE html>\n" + document.documentElement.outerHTML;
        const a = document.body.appendChild(document.createElement('a'));
        const blob = new Blob([content],{ type: 'text/html' });

        let url = URL.createObjectURL(blob);
        
        a.href = url;
        a.download = 'kernel.html';
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    }
}