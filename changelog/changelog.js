AOS.init();

// Sample data (this would normally come from a server)
const updates = [
    {
        version: "0.1.2",
        date: "2024-05-21",
        changes: [
            "Added a Mod Saver to save toggled Mods when restarting the Game",
            "Fixed Keybinds not saving sometimes",
            "Fixed the Installer not automatically fetching the right Client Version"
        ]
    },
    {
        version: "0.1.1",
        date: "2024-05-21",
        changes: [
            "Added No Hurt Cam Mod",
            "Fixed Installer Bugs",
            "Added a custom Keybind Mod Manager"
        ]
    }
];

$(document).ready(function() {
    const updateLog = $('#update-log');
    updates.forEach(update => {
        const updateEntry = `
            <div class="update-entry mb-3" style="display: none;">
                <div class="version">${update.version} - ${update.date}</div>
                <div class="changes">
                    <ul>
                        ${update.changes.map(change => `<li>${change}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        updateLog.append(updateEntry);
    });

    // Fade in each update entry with a delay
    $('.update-entry').each(function(index) {
        $(this).delay(300 * index).fadeIn();
    });
});
