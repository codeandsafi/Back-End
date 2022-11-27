import * as fs from 'fs/promises';


//Whole Path Should be ther
// try {
//     await fs.mkdir('C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Promise Based API\\Demo\\Safi');
//     console.log('Direcotry created...');
// } catch (error){
//     console.log(error);
// }


//]Whole Path may not be there

// try {
//     await fs.mkdir('C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Promise Based API\\Demo\\Safi\\Sarnali\\Us', {recursive: true});
//     console.log('Direcotry created...');
// } catch (error){
//     console.log(error);
// }


// Read the content of a directory

// try {
//     const files = await fs.readdir('C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Promise Based API\\Demo\\Safi\\Sarnali\\Us')
//     for (const file of files)
//     console.log(file);
// }catch (error) {
//     console.log(error);
// }



// Remove a directory (The directory Must be empty)

// try {
//     await fs.rmdir('C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Promise Based API\\Demo\\Safi\\Sarnali\\Us\\New folder')
//     console.log("Direcotry Removed...")
// }catch (error) {
//     console.log(error);
// } 


// Create a and wirte a file

// try {
//     await fs.writeFile('C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Promise Based API\\Demo\\Safi\\Sarnali\\Us\\readme.txt', 'Hello Node JS')
// }catch (error) {
//     console.log(error);
// }


// Read a file (this returns buffer)

// try {
//     const data = await fs.readFile('C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Promise Based API\\Demo\\Safi\\Sarnali\\Us\\readme.txt');
//     console.log(data);
// }catch (error) {
//     console.log(error);



// }



// Read a file (this returns the actual string)

// try {
//     const data = await fs.readFile('C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Promise Based API\\Demo\\Safi\\Sarnali\\Us\\readme.txt', 'utf-8');
//     console.log(data);
// }catch (error) {
//     console.log(error);
// }



// Append Data into File

// try {
//     await fs.appendFile('C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Promise Based API\\Demo\\Safi\\Sarnali\\Us\\readme.txt', 'I am Sarnali');
// }catch (error) {
//     console.log(error);
// }


// Copy File

// try {
//     await fs.copyFile('C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Promise Based API\\Demo\\Safi\\Sarnali\\Us\\readme.txt', 'C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Promise Based API\\Demo\\Safi\\Sarnali\\Us\\New.txt');
// }catch (error) {
//     console.log(error);
// }


//Get File Informaton

// try {
//     const stats = await fs.stat('C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Promise Based API\\Demo\\Safi\\Sarnali\\Us\\readme.txt');
//     console.log(stats.isDirectory());
//     console.log(stats.isFile());
//     console.log(stats);
// }catch (error) {
//     console.log(error);
// }