// ABSTRACT CLASS FOR PUBLISH NATS EVENT
class Publisher {
  subject // ABSTRACT
  #client // PRIVATE
  constructor(client) {
    this.#client = client
  }
  publish(data) {
    this.#client.publish(this.subject, JSON.stringify(data), () => {
      console.log("Event Published")
    })
  }
}

exports.Publisher = Publisher
