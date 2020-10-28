// DEFINE ALL LISTENER SUBJECTS
const Subject = {
  TICKET_CREATED: "ticket:created",
  TICKET_UPDATED: "ticket:updated",
  ORDER_CREATED: "order:created",
  ORDER_CANCELLED: "order:canceled",
  EXPIRATION_COMPLETED: "expiration:completed"
}

// DEFINE ALL LISTENER QUEUE GROUP NAMES
const QueueGroupName = {
  PAYMENT_SERVICE: "payment-service",
  ORDER_SERVICE: "order-service",
  TICKET_SERVICE: "ticket-service",
  EXPIRATION_SERVICE: "expiration-service"
}

exports.Subject = Subject
exports.QueueGroupName = QueueGroupName
