const body = document.getElementsByTagName('body')[0]

const coin = {
  state: 0,
  
  flip() {
    return this.state = Math.floor(Math.random() * (2))
  },
  
  toString() {
    if (this.state === 0) {
      return 'Heads'
    } else {
      return 'Tails'
    }
  },
  
  toHTML() {
    const image = document.createElement("img");
    
    if (this.state === 0) {
      image.src = "./img/cara.jpg"
      image.alt = `${this.toString()}`
    } else {
      image.src = "./img/coroa.jpg"
      image.alt = `${this.toString()}`
    }
    
    return image
  },

  display20Flips() {
    body.innerText = ''
    const results = []
    let jogada
  
    for (let i = 0; i < 20; i++) {
      coin.flip()
      jogada = coin.toString()
      results.push(jogada)
    }
  
    const texto = document.createElement('p')
    texto.innerText = `Resultado: ${results}`
    body.appendChild(texto)
    
    return results
  },

  display20Images() {
    body.innerText = ''
    const div = document.createElement('div')
    const results = [];
    
    for (let i = 0; i < 20; i++) {
      coin.flip()
      jogada = coin.toString()
      results.push(jogada)
      div.appendChild(coin.toHTML())
    }
  
    body.appendChild(div)
    
    return results
  }
}




