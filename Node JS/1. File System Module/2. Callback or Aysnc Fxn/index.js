// File Systhem - Callback API
import * as fs from 'fs';


// Creaitng Direcotry- Path Should be there

// fs.mkdir('C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Callback or Aysnc Fxn\\Safi', (error) => {
//     if (error) {
//         throw error;
//     }

//     console.log('Direcotry Created...');
// });


// Creaitng Direcotry- Path May Not be there

// fs.mkdir('C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Callback or Aysnc Fxn\\Safi2\\Safi3', {recursive: true}, (error) => {
//     if (error) {
//         throw error;
//     }

//     console.log('Direcotry Created...');
// });


// Read Content of a Directory

// fs.readdir('C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Callback or Aysnc Fxn\\', (error, files) => {
//     if (error) {
//         throw error;
//     }
//     for(const file of files) {
//         console.log(file);
//     }
// });


// Remove a Directory - Directory Should be empty

// fs.rmdir('C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Callback or Aysnc Fxn\\Safi2\\Safi3', (error) => {
//     if (error) {
//         throw error;
//     }
//         console.log('Directory Removed...');
// });


// Create and Write a file

// fs.writeFile('C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Callback or Aysnc Fxn\\Safi\\Sarnali.txt', 'Hellooo', (error) => {
//     if (error) {
//         throw error;
//     }
//     console.log('File Created')
// });


// Read file (Retuens buffer data)


// fs.readFile('C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Callback or Aysnc Fxn\\Safi\\Sarnali.txt', (error,data) => {
//     if (error) {
//         throw error;
//     }
//     console.log(data);
// });


// Read file (Retuens actual data)


// fs.readFile('C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Callback or Aysnc Fxn\\Safi\\Sarnali.txt', 'utf-8', (error,data) => {
//     if (error) {
//         throw error;
//     }
//     console.log(data);
// });



// Append file 

// fs.appendFile('C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Callback or Aysnc Fxn\\Safi\\Sarnali.txt', ' Hiii', (error) => {
//     if (error) {
//         throw error;
//     }
//     console.log("data appended");
// });



// Copy file (Retuens buffer data)

// fs.copyFile('C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Callback or Aysnc Fxn\\Safi\\Sarnali.txt', 'C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Callback or Aysnc Fxn\\Safi\\Safi.txt', (error) => {
//     if (error) {
//         throw error;
//     }
//     console.log("File Copied...");
// });



// Get FIle Information

// fs.stat('C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Callback or Aysnc Fxn\\Safi\\Sarnali.txt', 'C:\\Users\\DELL\\Documents\\Coding\\Back End\\Node JS\\File System Module\\Callback or Aysnc Fxn\\Safi\\Safi.txt', (error, stats) => {
//     if (error) {
//         throw error;
//     }
//     console.log(stats.isDirectory());
//     console.log(stats.isFile());
//     console.log(stats);
// });