function newImage(imageSource, leftPosition, bottomPosition) {
    let image = document.createElement('img');
    image.src = imageSource;
    image.style.position = 'fixed';
    image.style.left = leftPosition;
    image.style.bottom = bottomPosition;
    document.body.append(image);
    return image; 
}


newImage('assets/green-character.gif', '100px', '100px');
newImage('assets/pine-tree.png', '450px', '200px');
newImage('assets/tree.png', '200px', '300px');
newImage('assets/pillar.png', '350px', '100px');
newImage('assets/crate.png', '150px', '200px');
newImage('assets/well.png', '500px', '425px');



let sword = newImage('assets/sword.png', '500px', '405px');
sword.addEventListener('dblclick', function() {
    sword.remove();
});



newImage('assets/shield.png', '165px', '185px');
newImage('assets/staff.png', '600px', '100px');
