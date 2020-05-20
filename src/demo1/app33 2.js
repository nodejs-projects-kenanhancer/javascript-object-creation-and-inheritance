var artist = {
    name: "Johnny Cash",
    latestAlbum: "American V"
};

Object.freeze(artist);

function announce(artist) {
    // Whoops! Assigning the name rather than testing equality!
    if (artist.name = "Elvis Presley") {
        console.log("The King");
    } else {
        console.log(artist.name);
    }
}

// Outputs: "The King"
announce(artist);

// Outputs: {
//     name: "Johnny Cash",
//     latestAlbum: "American V"
// }
console.log(artist);