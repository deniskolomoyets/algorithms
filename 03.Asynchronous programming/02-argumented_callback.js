/* write.js
Implement an asynchronous function that writes data to the specified path and notifies about completion through the given callback. Export the function as default.
*/

//// Example - test
write("./myfile", "data", () => {
    console.log("success");
  });
// => writes data to ./myfile and than returns 'success' to the console

export default (filepath, data, cb) => {
    fs.writeFile(filepath, data, cb);
  };