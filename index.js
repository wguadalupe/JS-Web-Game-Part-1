function newImage(src, left, bottom) {
    let image = document.createElement('img');
    image.src = src;
    image.style.position = 'fixed';
    image.style.left = left;
    image.style.bottom = bottom;
    document.body.append(image);
}

newImage('assets/green-character.gif', '100px', '100px');
newImage('assets/pine-tree.png', '450px', '200px');
newImage('assets/tree.png', '200px', '300px');
newImage('assets/pillar.png', '350px', '100px'); 
newImage('assets/crate.png', '150px', '200px');
newImage('assets/well.png', '500px', '425px');

let sword = document.createElement('img');
sword.src = 'assets/sword.png';
sword.style.position = 'fixed';  
sword.style.left = '500px';      
sword.style.bottom = '405px';    
document.body.append(sword);

sword.addEventListener('click', function() {
    sword.remove();
});
