



function changeO(arr){
    var show = document.getElementById('show')
    var wordOut = document.getElementById('wordOut').value
    arr = wordOut.toLowerCase().split('')
    var newList = []
      for(var i = 0; i < arr.length; i++){
        if(arr[i] === 'a'){
          newList.push('*')
       
      } else if(arr[i] === 'b'){
          newList.push('$');
        
      }else if(arr[i] === 'c'){
          newList.push('^');
        
      }else if(arr[i] === 'd'){
          newList.push(')');
        
      }else if(arr[i] === 'e'){
          newList.push('(');
        
      }else if(arr[i] === 'f'){
          newList.push('&');
        
      }else if(arr[i] === 'g'){
          newList.push('%');
        
      }else if(arr[i] === 'h'){
          newList.push('@');
        
      }else if(arr[i] === 'i'){
          newList.push('_');
        
      }else if(arr[i] === 'j'){
          newList.push(':');
        
      }else if(arr[i] === 'k'){
          newList.push('+');
        
      }else if(arr[i] === 'l'){
          newList.push('=');
        
      }else if(arr[i] === 'm'){
          newList.push('#');
        
      }else if(arr[i] === 'n'){
          newList.push('-');
        
      }else if(arr[i] === 'o'){
          newList.push(';');
        
      }else if(arr[i] === 'p'){
          newList.push('<');
        
      }else if(arr[i] === 'q'){
          newList.push('.');
        
      }else if(arr[i] === 'r'){
          newList.push('>');
        
      }else if(arr[i] === 's'){
          newList.push('?');
        
      }else if(arr[i] === 't'){
          newList.push('/');
        
      }else if(arr[i] === 'u'){
          newList.push(']');
        
      }else if(arr[i] === 'v'){
          newList.push('}');
        
      }else if(arr[i] === 'w'){
          newList.push('`');
        
      }else if(arr[i] === 'x'){
          newList.push('{');
        
      }else if(arr[i] === 'y'){
          newList.push('[');
        
      }else if(arr[i] === 'z'){
          newList.push('"');
        
      }else if(arr[i] === ' '){
          newList.push(' ');
        
      }else if(arr[i] === '1'){
          newList.push('3');
        
      }else if(arr[i] === '2'){
          newList.push('8');
        
      }else if(arr[i] === '3'){
          newList.push('1');
        
      }else if(arr[i] === '4'){
          newList.push('0');
        
      }else if(arr[i] === '5'){
          newList.push('7');
        
      }else if(arr[i] === '8'){
          newList.push('2');
        
      }else if(arr[i] === '9'){
          newList.push('6');
        
      }else if(arr[i] === '0'){
          newList.push('4');
        
      }else if(arr[i] === '7'){
        newList.push('5');
      
    }else if(arr[i] === '6'){
        newList.push('9');
      
    }
      
    }
   
    return show.innerHTML += newList.join('')
    
  }
  
  function changeOm(arr){
    var newshow = document.getElementById('newshow')
    var wordOut = document.getElementById('theChange').value;
    console.log(wordOut)
    arr = wordOut.split('')
    var newList = []
      for(var i = 0; i < arr.length; i++){
        if(arr[i] === '*'){
          newList.push('a')
       
      } else if(arr[i] === '$'){
          newList.push('b');
        
      }else if(arr[i] === '^'){
          newList.push('c');
        
      }else if(arr[i] === ')'){
          newList.push('d');
        
      }else if(arr[i] === '('){
          newList.push('e');
        
      }else if(arr[i] === '&'){
          newList.push('f');
        
      }else if(arr[i] === '%'){
          newList.push('g');
        
      }else if(arr[i] === '@'){
          newList.push('h');
        
      }else if(arr[i] === '_'){
          newList.push('i');
        
      }else if(arr[i] === ':'){
          newList.push('j');
        
      }else if(arr[i] === '+'){
          newList.push('k');
        
      }else if(arr[i] === '='){
          newList.push('l');
        
      }else if(arr[i] === '#'){
          newList.push('m');
        
      }else if(arr[i] === '-'){
          newList.push('n');
        
      }else if(arr[i] === ';'){
          newList.push('o');
        
      }else if(arr[i] === '<'){
          newList.push('p');
        
      }else if(arr[i] === '.'){
          newList.push('q');  
      }else if(arr[i] === '>'){
          newList.push('r');
      }else if(arr[i] === '?'){
          newList.push('s');
      }else if(arr[i] === '/'){
          newList.push('t'); 
      }else if(arr[i] === ']'){
          newList.push('u'); 
      }else if(arr[i] === '}'){
          newList.push('v');   
      }else if(arr[i] === '`'){
          newList.push('w'); 
      }else if(arr[i] === '{'){
          newList.push('x'); 
      }else if(arr[i] === '['){
          newList.push('y'); 
      }else if(arr[i] === '"'){
          newList.push('z'); 
      }else if(arr[i] === ' '){
          newList.push(' ');
      }else if(arr[i] === '3'){
          newList.push('1'); 
      }else if(arr[i] === '8'){
          newList.push('2');    
      }else if(arr[i] === '1'){
          newList.push('3');     
      }else if(arr[i] === '0'){
          newList.push('4');     
      }else if(arr[i] === '7'){
          newList.push('5');     
      }else if(arr[i] === '2'){
          newList.push('8');    
      }else if(arr[i] === '6'){
          newList.push('9');      
      }else if(arr[i] === '4'){
          newList.push('0'); 
      }else if(arr[i] === '5'){
        newList.push('7');
      
    }else if(arr[i] === '9'){
        newList.push('6');
      
    }
      
    }
    return newshow.innerHTML += newList.join('').toUpperCase();
  }

  console.log(changeO('had'))

function resetIt() {
    var clearAll = document.getElementById('show');
    var clearIt = document.getElementById('wordOut')

    clearIt.value = ''
    
    clearAll.innerHTML = ''
}

function resetAgain() {
    var clearAll = document.getElementById('newshow');
    var clearIt = document.getElementById('theChange');


    clearIt.value = ''
    
    clearAll.innerHTML = ''
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.
document.getElementById("dwn-btn").addEventListener("click", function(){
    // Generate download of hello.txt file with some content
    var text = document.getElementById("show").textContent + '      <--- Copy and paste this message at https://SecretMessages.netlify.com to decode.';
    var filename = "hello.txt";
    
    download(filename, text);
}, false);