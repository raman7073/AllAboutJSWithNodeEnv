/*
 What are buffers?
 Buffers are fixed size containers in memory
 Which recieves the binary data and sends it further,
 where it can be processed.

 Buffer is the global object that offers 
 the alloc() method to create  a buffer.
 We also need to pass the buffer size.

 Another method for memory allocation is to pass the data directly,from().
 The benefit is it will allocate the exact required memory for data.

 In case of alloc , if the data has more size than buffer , then tha data will be
 trimmed.So data will be missing.

 The fill() method allow us to store new values in a buffer.It does not allocate
 memory , it just fill data in already allocated buffer.We can pass data as arguments directly
 Behavior is : if data has more size , it will get trimmed.
               if it is less, it will have repeating char from beginning.

 The byteLength() returns the number of bytes occupied by a buffer object.We need to pass buffer as arguments.

*/
const alloc = Buffer.alloc(5);
console.log(alloc);
//to fill some data in buffer
alloc.write("hello");
// now buffer has charater codes according to the default
// character set utf-8 in hexadecimal number: <Buffer 68 65 6c 6c 6f>
console.log(alloc);
console.log(alloc.toString()); // hello
const buf = Buffer.from("hello is a string", "utf8");
console.log(buf);
console.log(buf.toString());
alloc.write("hello is a string");
console.log(alloc);

const fill = alloc.fill("Hyyy");
console.log(fill.toString()); //HyyyH
console.log(Buffer.byteLength(alloc));
