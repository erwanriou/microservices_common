// ABSTRACT CLASS FOR PUBLISH NATS EVENT
class Publisher {
  subject // ABSTRACT
  #client // PRIVATE
  constructor(client) {
    this.#client = client
  }
  publish(data) {
    return new Promise((resolve, reject) => {
      this.#client.publish(this.subject, JSON.stringify(data), err => {
        if (err) {
          return reject(err)
        }
        console.log(`Event Published: ${this.subject}`)
        resolve()
      })
    })
  }
}

exports.Publisher = Publisher
