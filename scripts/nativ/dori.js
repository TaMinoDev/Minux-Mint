programs["Dori"].content = `
    <div class="dori-window">
            <div class="dori-header"> Header</div>
            <div class="dori-sidebar"> Sidebar</div>
            <div class="dori-main"> Main</div>
    </div>
`;

const doriStyleBlock = document.createElement('style');
doriStyleBlock.textContent = `
    .dori-window {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: 2fr 8fr;
        grid-template-columns: 3fr 7fr;
        grid-template-areas: 
        "header header"
        "sidebar main";
    }

    .dori-window * {
        border-size: border-box;
        padding: 0px;
        margin: 0;
    }

    .dori-header {
        grid-area: header;
        border: 1px solid black;
        background-color: red;
        max-height: 100px;
    }

    .dori-sidebar {
        grid-area: sidebar;
        background-color: blue;
    }

    .dori-main {
        grid-area: main;
        background-color: lime;
    }
`;
document.head.appendChild(doriStyleBlock);