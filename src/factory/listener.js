// ABSTRACT CLASS FOR LISTEN NATS EVENT
class Listener {
  subject // ABSTRACT
  queueGroupName // ABSTRACT
  #client // PRIVATE
  _ackWait // PROTECTED

  constructor(client) {
    this.#client = client
  }

  // DEFAULT CONFIGURATION OF NATS STREAMING
  subscriptionOption() {
    return this.#client
      .subscriptionOptions()
      .setDeliverAllAvailable()
      .setManualAckMode(true)
      .setAckWait(this._ackWait)
      .setDurableName(this.queueGroupName)
  }

  listen() {
    const subscription = this.#client.subscribe(
      this.subject,
      this.queueGroupName,
      this.subscriptionOption()
    )

    subscription.on("message", msg => {
      console.log(`Event received: ${this.subject} / ${this.queueGroupName}`)
      const parsedData = this.parseMessage(msg)
      this.onMessage(parsedData, msg)
    })
  }

  parseMessage(msg) {
    const data = msg.getData()
    return typeof data === "string"
      ? JSON.parse(data)
      : JSON.parse(data.toString("utf8"))
  }
}

exports.Listener = Listener
