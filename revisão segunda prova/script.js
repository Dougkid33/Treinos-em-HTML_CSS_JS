function countText() {
    let text = document.form_main.text.value;
    document.getElementById('characters').innerText = text.length;
    document.getElementById('words').innerText = text.length == 0 ? 0 : text.split(/\s+/).length;
    document.getElementById('rows').innerText = text.length == 0 ? 0 : text.split(/\n/).length;
    document.getElementById('res').innerText = (text.match(/texto/g) || []).length; //deu certo !!!! caso só repetir
    //const ocorrencias2 = (text.match(/texto/g) || []).length;
  }
