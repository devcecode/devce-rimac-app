import icon1 from '../../assets/icon1.svg'
import icon2 from '../../assets/icon2.svg'
import icon3 from '../../assets/icon3.svg'


// Sí sí esto es un objeto de arreglos y no un arreglo de objetos ¿por que?, para extraer cada propiedad o más conocido en el mundo de Javascript como Keys del objeto; que en este caso sería el nombre de cada arreglo, Para iterarlos y definirlos como nombres de las coberturas.

export const toppings = {
  "Protege a tu auto": [
    {
      title: "Llanta Robada",
      content: "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis",
      image: icon1,
      amount: 15
    },
    {
      title: "Choque y/o pasarse la luz roja",
      content: "Sabemos que un accidente puede ocurrir en cualquier momento. Para tu tranquilidad, hemos analizado y discutido algunas cosas en tu beneficio!!",
      image: icon2,
      amount: 20,
    },
    {
      title: "Atropello en vía de evitamiento",
      content: "Tambien tenemos algunos planes bien estudiados para estos casos",
      image: icon3,
      amount: 50,
    }
  ],
  "Protege a lo que te rodean": [

  ],
  "Mejora tu Plan": [
    
  ]
}