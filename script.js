function toggleMode() {
    const html = document.documentElement

// if(html.classList.contains('light')) {
//     html.classList.remove('light')
// } else {
//     html.classList.add('light')
// }


html.classList.toggle("light")


  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // set tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar-dark.png")
  }


  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("alt", "foto de Matheus Balbe com fundo claro e gravata")
  } else {
    // set tiver sem light mode, manter a imagem normal
    img.setAttribute("alt", "foto de Matheus Balbe com fundo escuro e óculos")
  }

}
