class App {

  constructor() {
    this.run = (name = 'World') => {
      console.log(`hello ${name}`)
    }
  }
}

const app = new App()

app.run()