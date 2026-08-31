const emailId = ' Goni@Mia.com '
if(emailId.includes('a.')){
    console.log(emailId.trimEnd().toLocaleLowerCase());
    console.log('it has a.');
}
else{
    console.log('not found');
}
// console.log(emailId.toLocaleLowerCase())

const fileName = 'My Final PDF.pdf';
const twitterHashtags = '@elonmask';
console.log(fileName.endsWith('.pdf'));
console.log(twitterHashtags.startsWith('@'));