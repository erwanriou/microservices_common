// ABSTRACT CLASS FOR EVENT LISTENER
class Listener {
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
      console.log(`Message received: ${this.subject} / ${this.queueGroupName}`)
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

// DEFINE ALL LISTENER SUBJECTS
const Subject = {
  TICKET_CREATED: "ticket:created"
}

// DEFINE ALL LISTENER QUEUE GROUP NAMES
const QueueGroupName = {
  PAYMENT_SERVICE: "payment-service"
}

exports.Subject = Subject
exports.QueueGroupName = QueueGroupName
exports.Listener = Listener
